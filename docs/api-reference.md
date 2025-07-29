---
layout: default
title: API Reference
parent: Documentation
nav_order: 9
---

# API Reference

This page provides a high-level overview of the most important classes and functions in the Syqlorix library.

## Main Classes

### `Syqlorix`
The main application class. It serves as the root of the HTML document and the manager for routing and the web server.

- **`doc = Syqlorix()`**: The conventional global instance.
- **`.route(path, methods)`**: A decorator to register a function as a request handler.
- **`.run(file_path)`**: Starts the development server.
- **`.render()`**: Renders the object and its children to an HTML string.

### `Node`
The base class for all HTML elements. You will typically use its subclasses.

- **`__init__(*children, **attributes)`**: Creates a node with children and HTML attributes.
- **`__truediv__(other)`**: The `/` operator for nesting other nodes.

### `Component`
The base class for creating reusable UI components. Inherit from this class and define the component's structure in the `super().__init__()` call.

### `Request`
An object passed to every route handler containing details about the incoming request.

- **`.method`**: `GET`, `POST`, etc.
- **`.path`**: The URL path (e.g., `/user/profile`).
- **`.path_params`**: Dictionary of dynamic URL segments (e.g., `{'username': 'alice'}`).
- **`.query_params`**: Dictionary of URL query parameters (e.g., `{'search': 'docs'}`).
- **`.form_data`**: Dictionary of submitted form data from a `POST` request.
- **`.json_data`**: Dictionary of data if the request body was JSON.
- **`.headers`**: A dictionary of all request headers.

## Element Functions

All standard HTML tags are available as lowercase Python functions that create `Node` objects. For example: `div()`, `p()`, `span()`, `h1()`, `a()`, `img()`, `ul()`, `li()`, etc.

### Special Cases
- **`input_`**: Use `input_()` instead of `input()` to avoid conflict with Python's built-in `input()` function.
- **`style()`**: Takes a string of CSS to be injected into a `<style>` tag.
- **`script()`**: Takes a string of JavaScript or a `src` attribute to link to an external script.