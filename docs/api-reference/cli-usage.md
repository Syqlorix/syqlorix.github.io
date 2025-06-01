# CLI Usage

Syqlorix provides a command-line interface (`syqlorix`) to help you serve and build your web pages.

## Global Usage

```bash
syqlorix --help
```
This will display the available commands.

## `syqlorix serve`

Starts a multi-page development server for local preview. It automatically serves pages defined in a Python routes file and static assets from your project's `static/` directory.

### Usage:

```bash
syqlorix serve <routes_file.py> [--port <port_number>]
```

- `<routes_file.py>`: Path to a Python file that defines a `routes` dictionary. This dictionary maps URL paths (e.g., `/`, `/about`) to `Page` objects or functions that return `Page` objects.
- `--port <port_number>` (optional): The port number to serve on (default is `8000`).

### Example:

Assuming you have an `examples/multi_page_site.py` file with your `routes` dictionary:

```bash
syqlorix serve examples/multi_page_site.py --port 8000
```

After running, the terminal will provide clickable links (e.g., `http://localhost:8000/`, `http://localhost:8000/about`). Open these in your browser. If using GitHub Codespaces, check the "Ports" tab for convenient access. Press `Enter` in the terminal to stop the server.

## `syqlorix build`

Generates a complete static website from your Syqlorix pages, ready for deployment to any static web host. This command will render all defined routes into `.html` files and copy your `static/` assets.

### Usage:

```bash
syqlorix build <routes_file.py> [--output <output_directory>]
```

- `<routes_file.py>`: Path to a Python file defining the `routes` dictionary for your site.
- `--output <output_directory>` (optional): The directory where the generated static files will be placed (default is `public/`).

### Example:

```bash
syqlorix build examples/multi_page_site.py --output build_output
```

After running, a new directory (e.g., `build_output/`) will be created containing:
- `index.html` (for `/` route)
- `about/index.html` (for `/about` route)
- `dynamic/index.html` (for `/dynamic` route)
- `static-demo/` (if that's a direct route you serve as index.html)
- `static/` (copied from your project's root static/ directory)
    - `css/`
        - `main.css`
    - `js/`
        - `app.js`

You can open the generated `index.html` files directly in your web browser to view your static site.