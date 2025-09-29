marked.use({
    renderer: {
        blockquote(quote) {
            const match = quote.match(/<p>\[!(NOTE|TIP|WARNING)\]\s*([\s\S]*)<\/p>/);
            if (match) {
                const type = match[1].toLowerCase();
                const text = match[2].trim();
                return `<div class="callout ${type}"><p><strong>${type.toUpperCase()}:</strong> ${text}</p></div>`;
            }
            return false; // Use default for normal blockquotes
        }
    }
});

function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('#content-container pre');
    codeBlocks.forEach(block => {
        if (block.querySelector('.copy-button')) return;
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '<i class="far fa-copy mr-2"></i>Copy';
        button.addEventListener('click', () => {
            const code = block.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = '<i class="fas fa-check mr-2"></i>Copied!';
                setTimeout(() => { button.innerHTML = '<i class="far fa-copy mr-2"></i>Copy'; }, 2000);
            });
        });
        block.appendChild(button);
    });
}
class SearchManager {
    constructor(pages, loadPageCallback) {
        this.pages = pages;
        this.loadPageCallback = loadPageCallback;
        this.searchIndex = [];
        this.searchInput = document.getElementById('searchInput');
        this.resultsContainer = document.getElementById('searchResults');
    }
    async init() {
        if (!this.searchInput || !this.resultsContainer) return;
        await this.buildIndex();
        this.searchInput.addEventListener('input', (e) => this.performSearch(e.target.value));
        document.addEventListener('click', (e) => this.closeResultsOnClickOutside(e));
    }
    async buildIndex() {
        const fetchPromises = this.pages.map(async (link) => {
            const pageName = link.getAttribute('data-page');
            const title = link.textContent.trim();
            const response = await fetch(`docs/${pageName}.md`);
            const markdown = await response.text();
            return { title, pageName, content: markdown.replace(/^---[\s\S]*?---/, '').toLowerCase() };
        });
        this.searchIndex = await Promise.all(fetchPromises);
    }
    performSearch(query) {
        if (query.length < 2) {
            this.resultsContainer.classList.add('hidden');
            return;
        }
        const results = this.searchIndex.map((item, index) => {
            const titleMatch = item.title.toLowerCase().includes(query);
            const contentIndex = item.content.indexOf(query.toLowerCase());
            if (!titleMatch && contentIndex === -1) return null;
            
            let snippet = '...';
            if (contentIndex !== -1) {
                const start = Math.max(0, contentIndex - 30);
                snippet += item.content.substring(start, contentIndex) +
                        `<span class="highlight">${item.content.substring(contentIndex, contentIndex + query.length)}</span>` +
                        item.content.substring(contentIndex + query.length, contentIndex + 70);
            } else {
                snippet = item.content.substring(0, 100);
            }
            return { index, title: item.title, snippet: snippet + '...' };
        }).filter(Boolean);
        this.displayResults(results.slice(0, 5));
    }
    displayResults(results) {
        if (results.length === 0) {
            this.resultsContainer.innerHTML = `<div class="p-4 text-sm text-gray-500">No results found.</div>`;
        } else {
            this.resultsContainer.innerHTML = results.map(r => `
                <a href="#" class="search-result-item" data-page-index="${r.index}">
                    <div class="search-result-title">${r.title}</div>
                    <div class="search-result-snippet">${r.snippet}</div>
                </a>`).join('');
        }
        this.resultsContainer.classList.remove('hidden');
    }
    closeResultsOnClickOutside(e) {
        if (!this.resultsContainer.contains(e.target) && e.target !== this.searchInput) {
            this.resultsContainer.classList.add('hidden');
        }
    }
}
class SidebarManager {
    constructor() {
        this.sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
        this.sidebar = document.getElementById('sidebar');
        this.mainContent = document.querySelector('.main-content');
        this.overlay = document.getElementById('mobileOverlay');
        this.breakpoint = 768; // Tailwind's `md` breakpoint
        this.init();
    }

    init() {
        if (!this.sidebarToggleBtn || !this.sidebar || !this.mainContent || !this.overlay) return;

        // Set initial desktop state from localStorage
        if (window.innerWidth > this.breakpoint) {
            const isHidden = localStorage.getItem('sidebarHidden') === 'true';
            if (isHidden) {
                this.sidebar.classList.add('is-hidden');
                this.mainContent.classList.add('sidebar-is-hidden');
            }
        }

        this.sidebarToggleBtn.addEventListener('click', () => this.toggle());
        this.overlay.addEventListener('click', () => this.closeMobile());
    }

    toggle() {
        if (window.innerWidth <= this.breakpoint) {
            // Mobile behavior: toggle overlay
            const isOpen = this.sidebar.classList.toggle('is-open');
            this.overlay.classList.toggle('is-open', isOpen);
        } else {
            // Desktop behavior: toggle persistent sidebar
            const isHidden = this.sidebar.classList.toggle('is-hidden');
            this.mainContent.classList.toggle('sidebar-is-hidden', isHidden);
            localStorage.setItem('sidebarHidden', isHidden);
        }
    }

    closeMobile() {
        this.sidebar.classList.remove('is-open');
        this.overlay.classList.remove('is-open');
    }
}
class ThemeManager {
    constructor() { this.theme = localStorage.getItem('theme') || 'light'; this.init(); }
    init() { this.applyTheme(); this.setupToggle(); this.updateIcon(); }
    applyTheme() { document.documentElement.setAttribute('data-theme', this.theme); localStorage.setItem('theme', this.theme); }
    toggle() { this.theme = this.theme === 'light' ? 'dark' : 'light'; this.applyTheme(); this.updateIcon(); }
    updateIcon() { const icon = document.getElementById('themeIcon'); icon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'; }
    setupToggle() { document.getElementById('themeToggle').addEventListener('click', () => this.toggle()); }
}

const contentContainer = document.getElementById('content-container');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
const pageLinks = Array.from(document.querySelectorAll('nav .nav-link[data-page]'));
let currentPageIndex = 0;

function updateArrowVisibility() {
    if (currentPageIndex > 0) {
        const prev = pageLinks[currentPageIndex - 1];
        prevArrow.innerHTML = `<div class="label">Previous</div><div class="title">← ${prev.textContent.trim()}</div>`;
        prevArrow.classList.remove('hidden');
    } else { prevArrow.classList.add('hidden'); }
    if (currentPageIndex < pageLinks.length - 1) {
        const next = pageLinks[currentPageIndex + 1];
        nextArrow.innerHTML = `<div class="label">Next</div><div class="title">${next.textContent.trim()} →</div>`;
        nextArrow.classList.remove('hidden');
    } else { nextArrow.classList.add('hidden'); }
}

function setActiveSidebarLink(index) {
    pageLinks.forEach(link => link.classList.remove('active'));
    if (pageLinks[index]) pageLinks[index].classList.add('active');
}

async function loadPage(index) {
    if (index < 0 || index >= pageLinks.length) return;
    currentPageIndex = index;
    const pageName = pageLinks[index].getAttribute('data-page');
    
    contentContainer.innerHTML = '<p>Loading...</p>';
    try {
        const response = await fetch(`docs/${pageName}.md`);
        if (!response.ok) throw new Error(`HTTP error`);
        let markdown = await response.text();
        markdown = markdown.replace(/^---[\s\S]*?---/, '');
        contentContainer.innerHTML = marked.parse(markdown);
        Prism.highlightAllUnder(contentContainer);
        addCopyButtons();
    } catch (error) {
        console.error('Error loading page:', error);
        contentContainer.innerHTML = `<p style="color:red;">Failed to load page.</p>`;
    } finally {
        setActiveSidebarLink(currentPageIndex);
        updateArrowVisibility();
        window.scrollTo({ top: 0, behavior: 'auto' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new SidebarManager();
    const searchManager = new SearchManager(pageLinks, loadPage);
    searchManager.init();
    loadPage(0); // Load the first page

    prevArrow.addEventListener('click', () => loadPage(currentPageIndex - 1));
    nextArrow.addEventListener('click', () => loadPage(currentPageIndex + 1));

    pageLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage(index);
        });
    });
    
    document.getElementById('searchResults').addEventListener('click', (e) => {
        const resultItem = e.target.closest('.search-result-item');
        if (resultItem) {
            e.preventDefault();
            const pageIndex = parseInt(resultItem.getAttribute('data-page-index'), 10);
            loadPage(pageIndex);
            document.getElementById('searchResults').classList.add('hidden');
        }
    });

    // Add event listener for content links
    contentContainer.addEventListener('click', (e) => {
        const targetLink = e.target.closest('a[data-page]');
        if (targetLink) {
            e.preventDefault();
            const pageName = targetLink.getAttribute('data-page');
            const pageIndex = pageLinks.findIndex(link => link.getAttribute('data-page') === pageName);
            if (pageIndex !== -1) {
                loadPage(pageIndex);
            }
        }
    });
});