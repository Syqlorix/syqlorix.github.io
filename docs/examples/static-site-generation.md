# Static Site Generation

This example demonstrates how to use the `syqlorix build` CLI command to generate a complete static website from your Syqlorix pages. This process renders all defined routes into `.html` files and copies your static assets into a specified output directory, making your site ready for deployment to any static web host.

## Code (`examples/multi_page_site.py`)

The static site is built using the same `examples/multi_page_site.py` file that defines routes for the development server. Refer to the [Multi-Page Development Server example](multi-page-dev-server.md) for the full code.

## How to Run:

To build the static site:

```bash
syqlorix build examples/multi_page_site.py --output public
```

- The `--output public` argument will create a directory named `public/` in your repository's root.
- If the directory already exists, it will be cleared before new files are generated.

## Output Structure:

After successful execution, the `public/` directory will contain your generated website structure, typically like this:

```
public/
├── index.html        (from / route)
├── about/
│   └── index.html    (from /about route)
├── dynamic/
│   └── index.html    (from /dynamic route)
├── static-demo/      (if that's a direct route you serve as index.html)
│   └── index.html
└── static/           (copied from your project's root static/ directory)
    ├── css/
    │   └── main.css
    └── js/
        └── app.js
```

You can open the generated `index.html` files directly in your web browser to view your static site.