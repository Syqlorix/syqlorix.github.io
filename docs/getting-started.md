---
layout: default
title: Getting Started
parent: Documentation
nav_order: 2
---

# Getting Started

This document outlines the process for creating and running a Syqlorix application.

## Installation

Install the `syqlorix` package from PyPI using pip.

```bash
pip install syqlorix
```

## Project Initialization

The `init` command generates a default `app.py` file in the current directory.

```bash
syqlorix init
```

## Running the Development Server

The application is executed using the `run` command.

```bash
syqlorix run app.py
```

The following output indicates the server is active:
```
🔥 Starting server for app.py...
🚀 Syqlorix server running on http://127.0.0.1:8000
🌍 Routes discovered: /, /message, /user/<username>
   Press Ctrl+C to stop.
```

The development server can be accessed at `http://127.0.0.1:8000`.

### Live-Reload

The development server includes a live-reload feature. When a file in the project directory is modified, the browser will refresh.