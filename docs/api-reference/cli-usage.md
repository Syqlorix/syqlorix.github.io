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
        - `static/` directory with all your assets (CSS, JS, images).
        ```
        **Save.**

    *   **`docs/api-reference/css-dsl.md`:**
        ```markdown
        # CSS DSL (`syqlorix.css`)

        Syqlorix provides a simple Pythonic Domain-Specific Language (DSL) for generating CSS strings, allowing you to define styles using Python dictionaries.

        ## `css(**rules)`

        Generates a CSS string from keyword arguments where each keyword is a CSS selector and its value is a dictionary of CSS properties and values.

        - `**rules`: Keyword arguments where keys are CSS selectors (e.g., `body`, `#my-id`, `.my-class a`). Values are dictionaries of CSS properties (`snake_case` will be converted to `kebab-case`).

        ### Example:

        ```python
        from syqlorix import Page, css

        # Define styles using the css() DSL
        my_styles = css(
            body={
                "font_family": "Arial, sans-serif",
                "margin": "20px",
                "background_color": "#f0f0f0"
            },
            "h1": {
                "color": "#336699",
                "text_align": "center"
            },
            ".button": {
                "padding": "10px 15px",
                "border_radius": "5px"
            }
        )

        page = Page(title="CSS DSL Example")
        page.style(my_styles) # Add the generated CSS to the page

        with page.body:
            page.h1("Styling with Syqlorix CSS DSL")
            page.p("This page is styled using Python dictionaries for CSS.")
            page.button("Styled Button", _class="button")

        print(page.render())
        ```

        ### Output (CSS portion):

        ```css
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          background-color: #f0f0f0;
        }
        h1 {
          color: #336699;
          text-align: center;
        }
        .button {
          padding: 10px 15px;
          border-radius: 5px;
        }
        ```