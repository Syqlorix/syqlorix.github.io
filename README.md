# Syqlorix Documentation & Examples

<p align="center">
  <img src="https://raw.githubusercontent.com/Syqlorix/Syqlorix/refs/heads/main/syqlorix-logo.svg" alt="Syqlorix Logo" width="250"/>
</p>

This repository serves as the official documentation and comprehensive examples for the **Syqlorix** Python package.

## About Syqlorix

Syqlorix is a hyper-minimal Python DSL (Domain-Specific Language) designed to build full HTML documents, including CSS and JavaScript, from a single Python script. It aims to provide a zero-dependency, readable, and highly embeddable solution for dynamic web content creation.

**Explore the main Syqlorix library here:** [Syqlorix on GitHub](https://github.com/Syqlorix/Syqlorix)

## Running the Examples

To run these examples locally, you need to have the `Syqlorix` package installed and, for some examples, the `Flask` web framework.

### Prerequisites

1.  **Clone this documentation repository:**
    ```bash
    git clone https://github.com/Syqlorix/syqlorix.github.io
    cd syqlorix.github.io
    ```
2.  **Install the `Syqlorix` package:**
    ```bash
    pip install syqlorix
    ```
3.  **Install Flask** (required for the Flask integration example):
    ```bash
    pip install Flask
    ```

### Available Examples

All examples are located in the `examples/` directory.

#### 1. Single Page HTML Generation (`examples/basic.py`)

This example demonstrates the core `Page` class, showing how to build a basic HTML page and render it to a string.

*   **What it does:** Generates a complete HTML string and prints it to the console.
*   **How to run:**
    ```bash
    python examples/basic.py
    ```

#### 2. Multi-Page Development Server (`examples/multi_page_site.py`)

This example showcases how to define multiple routes (pages) in a single Python file and serve them using Syqlorix's built-in development server. It also demonstrates linking external CSS and JavaScript files from the `static/` directory within this repository.

*   **What it does:** Starts a local web server, serving multiple pages (home, about, dynamic, static-assets-demo) and static files from the `static/` folder.
*   **How to run:**
    ```bash
    syqlorix serve examples/multi_page_site.py
    ```
    *   Once running, open your browser to the links provided in the terminal (e.g., `http://localhost:8000/`, `http://localhost:8000/about`, `http://localhost:8000/static-demo`).
    *   If using GitHub Codespaces, check the "Ports" tab for clickable links.
    *   Press `Enter` in the terminal to stop the server.

#### 3. Single-Page Development Server (`examples/dev_server_example.py`)

A simpler version of the development server, demonstrating how to serve just one `Page` object.

*   **What it does:** Starts a local web server serving a single page.
*   **How to run:**
    ```bash
    python examples/dev_server_example.py
    ```
    *   Access via your browser at `http://localhost:8000/`.
    *   Press `Enter` in the terminal to stop the server.

#### 4. Static Site Generation (`syqlorix build`)

This demonstrates how to use the `syqlorix` CLI to build a complete static website from a Python routes file, including all HTML pages and static assets.

*   **What it does:** Generates static `.html` files and copies the `static/` assets into a specified output directory (e.g., `public/`).
*   **How to run:**
    ```bash
    syqlorix build examples/multi_page_site.py --output public
    ```
    *   After running, explore the `public/` directory created in your repository. You can open the generated `index.html` files directly in your browser.

#### 5. Flask Integration (`examples/flask_integration.py`)

This example illustrates how Syqlorix can be used seamlessly within a Flask web application, replacing traditional templating engines like Jinja2 for page generation.

*   **What it does:** Runs a Flask web server that uses Syqlorix to generate its home page.
*   **How to run:**
    ```bash
    python examples/flask_integration.py
    ```
    *   Access via your browser at `http://127.0.0.1:5000/`.
    *   Press `Ctrl + C` in the terminal to stop the Flask server.

---

## Contributing

Contributions to the Syqlorix project (including documentation and examples) are welcome! Feel free to open issues or submit pull requests on the [main Syqlorix GitHub repository](https://github.com/Syqlorix/Syqlorix).

## License

This project is licensed under the MIT License - see the `LICENSE` file in the [main Syqlorix repository](https://github.com/Syqlorix/Syqlorix) for details.
