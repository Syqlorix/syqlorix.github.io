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
- **`.register_blueprint(blueprint)`**: Registers a blueprint to organize routes.
- **`.run(file_path)`**: Starts the development server.
- **`.build(output_dir)`**: Builds the application into a static site.
- **`.render()`**: Renders the object and its children to an HTML string.
- **`.test_client()`**: Returns a test client for the application.
- **`.proxy(path_prefix, target_url)`**: Define a development proxy rule.

### `Node`
The base class for all HTML elements.

- **`__init__(*children, **attributes)`**: Creates a node with children and HTML attributes.
- **`__truediv__(other)`**: Implements the `/` operator for nesting nodes.

### `Component`
The base class for creating reusable UI components. Inherit from this class and implement the `create()` method to define the component's structure.

- **`create(children)`**: The method that returns the component's node structure.
- **`before_render()`**: A lifecycle method called before `create()`.
- **`after_render(node)`**: A lifecycle method called after `create()`.
- **`set_state(new_state)`**: Updates the component's state.

### `Request`
An object passed to route handlers containing information about the incoming HTTP request.

- **`.method`**: The HTTP method (`GET`, `POST`).
- **`.path`**: The URL path.
- **`.path_params`**: A dictionary of captured dynamic URL segments.
- **`.query_params`**: A dictionary of URL query parameters.
- **`.form_data`**: A dictionary of submitted form data from a `application/x-www-form-urlencoded` request.
- **`.json_data`**: A dictionary of data from a `application/json` request body.
- **`.headers`**: A dictionary of request headers.
- **`.body`**: The raw request body as bytes.

### `Blueprint`
A class for organizing routes into different files.

- **`Blueprint(name, url_prefix)`**: Creates a new blueprint.
- **`.route(path, methods)`**: A decorator to register a route on the blueprint.
- **`.register_blueprint(blueprint)`**: Registers a nested blueprint.

### `Plugin`
A class for extending Syqlorix's functionality.

- **`Plugin()`**: Creates a new plugin.
- **`on_node_init(node)`**: A method called when a node is initialized.
- **`load()`**: Loads the plugin.

## Element Functions

Standard HTML tags are available as lowercase Python functions that create `Node` objects (e.g., `div()`, `p()`, `a()`).

### Special Cases
- **`input_`**: Use `input_()` to avoid conflict with Python's built-in `input()` function.
- **`style()`**: Accepts a string of CSS to be injected into a `<style>` tag.
- **`script()`**: Accepts a string of JavaScript or a `src` attribute to link to an external script.
- **`_()`**: A function to create elements using a CSS selector-like syntax.
- **`tailwind()`**: A component to generate CSS from Tailwind classes.