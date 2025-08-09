---
layout: default
title: Routing
parent: Documentation
nav_order: 4
---

# Routing

Routing is how Syqlorix maps a URL to a Python function.

## Basic Routes

The `@doc.route()` decorator creates a page. The function it decorates must return a `Node` object (or a string).

```python
@doc.route('/')
def home_page(request):
    return h1("Welcome to the homepage!")

@doc.route('/about')
def about_page(request):
    return p("This is the about page.")
```

## Dynamic Routes

Capture parts of a URL by using angle brackets (`<...>`). The captured value is available in the `request.path_params` dictionary.

```python
@doc.route('/user/<username>')
def user_profile(request):
    username = request.path_params.get('username')
    return h1(f"Profile for {username}")
```

## Handling HTTP Methods

By default, routes only respond to `GET` requests. You can allow `POST` and other methods using the `methods` argument.

```python
@doc.route('/submit', methods=['GET', 'POST'])
def message_form(request):
    if request.method == 'POST':
        user_message = request.form_data.get('message')
        return p(f"You sent: {user_message}")
    
    # Otherwise, show the form on a GET request
    return form(method="POST", ...)
```