```markdown
# Welcome to Syqlorix Documentation!

        This is the official documentation and comprehensive example guide for the **Syqlorix** Python package.

        ## About Syqlorix

        Syqlorix is a hyper-minimal Python DSL designed to build full HTML documents, including CSS and JavaScript, from a single Python script. It aims to provide a zero-dependency, readable, and highly embeddable solution for dynamic web content creation.

        **Explore the main Syqlorix library here:** [Syqlorix on GitHub](https://github.com/Syqlorix/Syqlorix)

        ## Quick Start

        To get started with Syqlorix, install the package:
        ```bash
        pip install syqlorix
        ```
        Then, explore the [Getting Started](getting-started.md) guide and the [Examples](examples/index.md) section.
        ```
        **Save.**

    *   **`docs/getting-started.md`:**
        ```markdown
        # Getting Started

        This guide will walk you through the initial setup and basic usage of Syqlorix.

        ## Installation

        Syqlorix is available on PyPI:

        ```bash
        pip install syqlorix
        ```

        ## Basic Usage

        A typical Syqlorix page starts with importing the `Page` class:

        ```python
        from syqlorix import Page

        page = Page(title="My First Syqlorix Page")

        with page.body:
            page.h1("Hello, Syqlorix!")
            page.p("This is a simple page generated entirely in Python.")

        html_output = page.render()
        print(html_output)
        ```

        This will print the full HTML structure to your console. For more interactive development, consider using the built-in development server.

        ## Running Examples

        All detailed examples are available in the [Examples section](examples/index.md).
```