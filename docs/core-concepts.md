---
layout: default
title: Core Concepts
parent: Documentation
nav_order: 3
---

# Core Concepts

Syqlorix is built on a few simple but powerful ideas.

## `Node` Objects

Everything that renders to an HTML tag in Syqlorix is a `Node`. This includes `div`, `p`, `h1`, `style`, and even the main `Syqlorix` application object itself. This unified design makes the framework consistent and easy to learn.

You create a node by instantiating its class. The arguments become its children, and keyword arguments become its HTML attributes.

```python
# Renders: <p class="lead">Hello World</p>
my_paragraph = p("Hello World", class_="lead") 
```
> Note: Because `class` is a reserved keyword in Python, you must use `class_` (with a trailing underscore) to define a CSS class.

## The `doc` Instance

The `doc` object is the global instance of the `Syqlorix` class that acts as your application's entry point. It's responsible for two things:
1.  **Collecting Routes:** The `@doc.route()` decorator registers a URL path to a Python function that returns a `Node`.
2.  **Running the Server:** The `syqlorix run` command finds this `doc` object and calls its `.run()` method to start the server.

## Reusable Components

You can create your own reusable components by making a class that inherits from `syqlorix.Component`.

```python
class PageTitle(Component):
    def __init__(self, text):
        super().__init__(
            h1(text, class_="page-title")
        )

# Use it in a route
@doc.route('/')
def home():
    return PageTitle("Welcome Home")
```