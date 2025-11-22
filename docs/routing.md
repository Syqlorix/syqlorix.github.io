---
layout: default
title: Routing
parent: Documentation
nav_order: 4
---

# Routing

Routing maps a URL to a Python function that returns a response.

## Basic Routes

The `@doc.route()` decorator is used to register a function as a route handler. The decorated function must return a `Node` object or a string.

```python
@doc.route('/')
def home_page(request):
    return h1("Homepage")

@doc.route('/about')
def about_page(request):
    return p("This is the about page.")
```

## Dynamic Routes

URL segments can be captured by enclosing them in angle brackets (`<...>`). The captured value is available in the `request.path_params` dictionary.

```python
@doc.route('/user/<username>')
def user_profile(request):
    username = request.path_params.get('username')
    return h1(f"Profile for {username}")
```

## Structuring Large Applications with Blueprints

Use Blueprints to organize your routes into separate files.

```python
# pages/about.py
from syqlorix import Blueprint, h1

about_bp = Blueprint("about")

@about_bp.route('/about')
def about_page(request):
    return h1("About Us")

# main_app.py
from syqlorix import Syqlorix
from pages.about import about_bp

doc = Syqlorix()
doc.register_blueprint(about_bp)
```

## HTTP Methods

By default, routes respond to `GET` requests. Other methods can be specified via the `methods` argument.

```python
@doc.route('/submit', methods=['GET', 'POST'])
def message_form(request):
    if request.method == 'POST':
        user_message = request.form_data.get('message')
        return p(f"Submitted: {user_message}")
    
    # A GET request will render the form.
    return form(method="POST", ...)
```
