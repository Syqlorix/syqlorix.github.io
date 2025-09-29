---
layout: default
title: API Reference
parent: Documentation
nav_order: 9
---

# API Reference

This document provides an overview of the classes and functions in the Syqlorix library.

## Classes

### `Syqlorix`
The application class. It functions as the HTML document root and manages routing and the web server.

- **`doc = Syqlorix()`**: The conventional global instance.
- **`.route(path, methods)`**: A decorator to register a function as a request handler.
- **`.run(file_path)`**: Starts the development server.
- **`.render()`**: Renders the object and its children to an HTML string.

### `Node`
The base class for all HTML elements.

- **`__init__(*children, **attributes)`**: Creates a node with children and HTML attributes.
- **`__truediv__(other)`**: Implements the `/` operator for nesting nodes.

### `Component`
The base class for creating reusable UI components. Inherit from this class and implement the `create()` method to define the component's structure.

### `Request`
An object passed to route handlers containing information about the incoming HTTP request.

- **`.method`**: The HTTP method (`GET`, `POST`).
- **`.path`**: The URL path.
- **`.path_params`**: A dictionary of captured dynamic URL segments.
- **`.query_params`**: A dictionary of URL query parameters.
- **`.form_data`**: A dictionary of submitted form data.
- **`.json_data`**: A dictionary of data from a JSON request body.
- **`.headers`**: A dictionary of request headers.

## Element Functions

Standard HTML tags are available as lowercase Python functions that create `Node` objects (e.g., `div()`, `p()`, `a()`).

### Special Cases
- **`input_`**: Use `input_()` to avoid conflict with Python's built-in `input()` function.
- **`style()`**: Accepts a string of CSS to be injected into a `<style>` tag.
- **`script()`**: Accepts a string of JavaScript or a `src_` attribute to link to an external script.