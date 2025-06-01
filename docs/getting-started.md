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