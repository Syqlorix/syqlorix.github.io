---
layout: default
title: Static Files
parent: Documentation
nav_order: 6
---

# Static File Serving

Syqlorix uses a convention-based approach for serving static files such as CSS, JavaScript, and images.

## Project Structure Convention

By default, the development server is configured to serve files from the project root. For example, a request for `/style.css` will serve a file named `style.css` located in the root of the project.

```
/my-project/
├── app.py
├── style.css
└── images/
    └── logo.png
```

This allows for standard, portable paths in the application code.

```python
my_page = Syqlorix(
    head(
        link(rel="stylesheet", href="/style.css")
    ),
    body(
        img(src_="/images/logo.png")
    )
)
```

## Access Control with `.syqlorix`

To control which static files are accessible, create a file named `.syqlorix` in the project's root directory.

### Rule Precedence

1.  **Blacklist:** If a file path matches a blacklist rule, access is denied.
2.  **Whitelist:** If a whitelist rule exists, any file path *not* matching a whitelist rule is denied.

### Rule Syntax

-   Lines starting with `-` are blacklist patterns.
-   All other non-empty, non-comment lines are whitelist patterns.
-   Patterns are standard glob patterns.
-   A pattern ending in `/` (e.g., `assets/`) is treated as `assets/*` to match all files in that directory.
-   Blank lines and lines starting with `#` are ignored.

### Example `.syqlorix` File

Given the following rules:

```ini
# .syqlorix

# Whitelist the assets directory.
assets/

# Blacklist all .json files.
-*.json
```

-   A request for `/assets/main.css` will be **allowed**.
-   A request for `/private/keys.txt` will be **denied** (not on the whitelist).
-   A request for `/data/users.json` will be **denied** (matches the blacklist).

### Live-Reload Integration

The `.syqlorix` file is monitored by the development server. Saved changes are applied on the next browser refresh.