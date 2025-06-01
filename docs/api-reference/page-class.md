# Page Class Reference

        The `syqlorix.Page` class is the core component for building HTML documents.

        ## `Page(title="")`

        Initializes a new HTML page.

        - `title` (str, optional): The title of the HTML document, which will be set in the `<title>` tag.

        ## HTML Tag Methods (`page.div()`, `page.h1()`, etc.)

        The `Page` object dynamically provides methods for common HTML tags.

        ### Usage:

        1.  **As a container (with `with` statement):** For tags that enclose content (like `div`, `p`, `ul`, `body`).
            ```python
            with page.div(id="my-container", _class="wrapper"):
                page.p("Some content inside the div.")
            ```
            Attributes are passed as keyword arguments. `class` is a Python keyword, so use `_class`.

        2.  **As a single-line tag (content as arguments):** For tags that might contain inline text or other elements.
            ```python
            page.h1("Page Title")
            page.li("List Item 1")
            page.a("Link Text", href="https://example.com")
            ```

        ### Common Attributes:

        Standard HTML attributes can be passed as keyword arguments. Note that `class` should be passed as `_class`.

        ```python
        page.div(id="unique-id", _class="my-class another-class", style="color: red;")
        ```

        ## Styling and Scripting

        ### `page.style(css_str)`

        Adds raw CSS content directly into an inline `<style>` tag within the HTML `<head>`.

        ```python
        page.style("""
            body { font-family: sans-serif; }
            h1 { color: blue; }
        """)
        ```

        ### `page.script(js_str)`

        Adds raw JavaScript content directly into an inline `<script>` tag, placed just before the closing `</body>` tag for performance.

        ```python
        page.script("""
            document.getElementById('myBtn').onclick = function() {
                alert('Button clicked!');
            };
        """)
        ```

        ### `page.link_css(href, **attrs)`

        Adds a `<link rel="stylesheet" href="..." />` tag to the HTML `<head>`, linking an external CSS file.

        - `href` (str): The URL of the CSS file.
        - `**attrs`: Any additional HTML attributes for the `<link>` tag (e.g., `integrity`, `crossorigin`).

        ```python
        page.link_css(href="/static/css/styles.css")
        page.link_css(href="https://unpkg.com/some-lib.css", integrity="sha384-...")
        ```

        ### `page.link_js(src, **attrs)`

        Adds a `<script src="..."></script>` tag to the end of the HTML `<body>`, linking an external JavaScript file.

        - `src` (str): The URL of the JavaScript file.
        - `**attrs`: Any additional HTML attributes for the `<script>` tag (e.g., `defer`, `async`, `integrity`).

        ```python
        page.link_js(src="/static/js/app.js", defer=True)
        ```

        ## Head Elements

        The following tags can be called directly on the `Page` object and will be automatically added to the HTML `<head>`:

        - `page.meta(...)`
        - `page.link(...)` (can also be used for other `rel` types like `icon`, `preload`)
        - `page.base(...)`
        - `page.title(...)` (usually set via `Page(title="...")` constructor)

        ```python
        page.meta(charset="utf-8")
        page.meta(name="viewport", content="width=device-width, initial-scale=1.0")
        page.link(rel="icon", type="image/png", href="/favicon.png")
        ```

        ## Rendering

        ### `page.render()`

        Renders the entire `Page` object into a complete HTML string, including `<!DOCTYPE html>`, `<head>`, and `<body>`.

        - **Returns**: `str` - The full HTML document.

        ```python
        html_output = page.render()
        # print(html_output)
        ```