---
layout: default
title: Tailwind CSS Integration
parent: Documentation
nav_order: 10
---

# Tailwind CSS Integration

Syqlorix provides a seamless integration with Tailwind CSS, allowing you to use Tailwind classes in your components and have the CSS automatically generated.

## Installation

To use the Tailwind CSS integration, you need to install Syqlorix with the `tailwind` extra:

```bash
pip install "syqlorix[tailwind]"
```

## Basic Usage

The easiest way to use the Tailwind integration is to load the `TailwindPlugin`. This plugin will automatically collect all the `class` attributes from all the nodes and generate the corresponding CSS.

```python
from syqlorix import Syqlorix, body, h1
from syqlorix.tailwind import load_plugin, tailwind

# Load the plugin
load_plugin()

doc = Syqlorix(
    head(
        title("Syqlorix with Tailwind CSS"),
        # Add the tailwind component to the head
        tailwind()
    ),
    body(
        h1.text_3xl.font_bold.underline(
            "Hello, Tailwind CSS!"
        )
    )
)
```

In this example, the `TailwindPlugin` will find the classes `text-3xl`, `font-bold`, and `underline` and generate the corresponding CSS, which will be injected into the `<head>` of the document by the `tailwind` component.

## Scopes

Scopes allow you to manage different sets of CSS. For example, you can have a global scope for the CSS that is used on all pages, and a separate scope for the CSS that is only used on a specific page.

```python
from syqlorix import Syqlorix, body, h1, div
from syqlorix.tailwind import tailwind, get_scope

# Get the 'home' scope, creating it if it doesn't exist
home_scope = get_scope('home')
# Add classes to the 'home' scope
home_scope.add('text-blue-500')

doc = Syqlorix(
    head(
        title("Syqlorix with Tailwind CSS"),
        # Use the 'home' scope to generate the CSS
        tailwind(scope='home')
    ),
    body(
        h1.text_blue_500("This title is blue")
    )
)
```

## Custom Configuration

You can use a custom Tailwind CSS configuration file by passing the path to the `config` argument of the `tailwind` component.

```python
# tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#243c5a',
      },
    },
  },
  plugins: [],
}
```

```python
# app.py
from syqlorix import Syqlorix, body, h1
from syqlorix.tailwind import tailwind

doc = Syqlorix(
    head(
        title("Syqlorix with Tailwind CSS"),
        # Use the custom config file
        tailwind(config='tailwind.config.js')
    ),
    body(
        h1.text_custom_blue("This title has a custom color")
    )
)
```
