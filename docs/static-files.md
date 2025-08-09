---
layout: default
title: Static Files
parent: Documentation
nav_order: 6
---

# Static Files & Assets

Syqlorix has a simple and powerful convention for serving static files like CSS, JavaScript, and images.

## The `static` Folder

Create a folder named `static` in your project's root directory (next to `app.py`).

```
/my-project/
├── app.py
└── static/
    ├── style.css
    ├── script.js
    └── images/
        └── logo.png
```

## Automatic Routing

The Syqlorix server is pre-configured to handle this folder automatically. **Any request that does not match a Python route will attempt to find a file in the `static` directory.**

- A browser request for `/style.css` serves `static/style.css`.
- A browser request for `/images/logo.png` serves `static/images/logo.png`.
- A browser request for `/` serves `static/index.html` (if it exists).

This means you can write standard, portable paths in your HTML.

```python
# In your app.py, link to static assets directly
my_page = Syqlorix(
    head(
        link(rel="stylesheet", href="/style.css")
    ),
    body(
        img(src="/images/logo.png"),
        script(src="/script.js")
    )
)
```

## (Optional) `.syqlorix` Policy File

If you want **fine-grained control** over which static files are served, create a file named `.syqlorix` in the project root:


```
# allow everything
*

# block PNGs
-*.png

# block a specific file
-secret.txt
```

- Lines starting with `-` are **blacklist** patterns (glob).  
- Any other line is a **whitelist** pattern.  
- When the file is absent, the original defaults (HTML, CSS, JS, images, etc.) remain in effect.