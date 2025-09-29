---
layout: default
title: Core Concepts
parent: Documentation
nav_order: 3
---

# Core Concepts

This document describes the concepts used by the Syqlorix framework.

## `Node` Objects

Most objects that render to an HTML tag in Syqlorix are `Node` objects. This includes `div`, `p`, `h1`, and the main `Syqlorix` application object. 

A node is created by instantiating its class. The positional arguments become its children, and keyword arguments become its HTML attributes.

```python
# Renders: <p class="lead">Hello World</p>
my_paragraph = p("Hello World", class_="lead") 
```
> Note: Because `class` is a reserved keyword in Python, `class_` must be used to define a CSS class.

## The `doc` Instance

The `doc` object, an instance of the `Syqlorix` class, serves as the application's entry point. It is responsible for:
1.  **Route Collection:** The `@doc.route()` decorator registers a URL path to a handler function.
2.  **Server Execution:** The `syqlorix run` command locates this `doc` object and calls its `.run()` method.

## Reusable Components

Custom components can be created by defining a class that inherits from `syqlorix.Component`. The structure of the component is defined in the `create()` method.

This method receives `self.props` (for attributes passed to the component) and `children` (for any nodes nested inside the component).

```python
from syqlorix import Component, h1, p, div

class Card(Component):
    def create(self, children=None):
        title = self.props.get("title", "Default Card Title")

        return div(
            h1(title),
            div(
                *(children or []),
                class_="card-content"
            ),
            class_="card"
        )

# Use it in a route
@doc.route('/')
def home():
    return Card(
        p("This is the content of the card."),
        title="My First Card" # Passed as a prop
    )
```
