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

### State Management

Components can have internal state using the `self.state` dictionary and the `self.set_state()` method. State is managed on the server, and updates are triggered by new page requests.

```python
class Counter(Component):
    def __init__(self, *children, **props):
        super().__init__(*children, **props)
        # Initialize state from props (e.g., from request query params)
        self.set_state({"count": int(self.props.get("initial_count", 0))})

    def create(self, children=None):
        count = self.state.get("count", 0)
        return div(
            h1(count),
            form(
                button("-", name="count", value=count - 1),
                button("+", name="count", value=count + 1),
                method="get", action="/"
            )
        )
```

### Component Lifecycle

Components have two lifecycle methods that can be implemented:

*   **`before_render()`**: This method is called before the `create()` method. It's useful for modifying state or props before rendering.
*   **`after_render(node)`**: This method is called after the `create()` method. It receives the rendered `node` as an argument and can be used to perform actions on the rendered node.

```python
class MyComponent(Component):
    def before_render(self):
        print("Component is about to be rendered")

    def create(self, children=None):
        return div("Hello from MyComponent")

    def after_render(self, node):
        print("Component has been rendered")
```

### Expressive HTML DSL

Syqlorix provides an expressive Domain-Specific Language (DSL) for creating HTML in a Pythonic way.

#### Chaining for CSS classes

You can chain class names to a component to add CSS classes to it.

```python
# Renders: <div class="my-class another-class">...</div>
my_div = div.my_class.another_class(p("Hello"))
```

#### CSS selector-like syntax with `_`

The `_` function provides a powerful shortcut to create elements using a syntax similar to CSS selectors.

```python
# Renders: <p id="my-id" class="my-class">Hello</p>
my_paragraph = _('p#my-id.my-class', "Hello")
```
