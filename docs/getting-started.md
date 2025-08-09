---
layout: default
title: Getting Started
parent: Documentation
nav_order: 2
---

# Getting Started

This guide will walk you through creating and running your first Syqlorix application.

## Installation

First, install Syqlorix from PyPI using pip.

```bash
pip install syqlorix
```

## Initialize Your Project

The fastest way to start is with the `init` command. This creates a feature-rich `app.py` file in your current directory.

```bash
syqlorix init
```

## Run the Development Server

Now, run the application using the `run` command.

```bash
syqlorix run app.py
```

You will see output similar to this:
```
🔥 Starting server for app.py...
🚀 Syqlorix server running on http://127.0.0.1:8000
🌍 Routes discovered: /, /message, /user/<username>
   Press Ctrl+C to stop.
```

Your Syqlorix site is now running! Open your browser to `http://127.0.0.1:8000`. The server features **live-reloading**, so any changes you make to your files will automatically refresh the page.