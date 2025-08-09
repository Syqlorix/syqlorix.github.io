---
layout: default
title: CLI Reference
parent: Documentation
nav_order: 8
---

# CLI Reference

Syqlorix comes with a simple and powerful Command-Line Interface (CLI) for managing your project.

## `syqlorix init`

Scaffolds a new project by creating a sample `app.py` in the current directory.

| Argument | Description |
| :--- | :--- |
| `[FILENAME]` | Optional. The name of the file to create (defaults to `app.py`). |

## `syqlorix run`

Starts the live-reloading development server for your application.

> Static-file access can be restricted with an optional `.syqlorix` policy file—see [Static Files](./static-files.md).

| Argument | Description |
| :--- | :--- |
| `FILE` | Required. The path to your application file (e.g., `app.py`). |
| `--host` | The interface to bind to (defaults to `127.0.0.1`). |
| `--port` | The port to run the server on (defaults to `8000`). |
| `--no-reload`| Disables the live-reloading feature. |

## `syqlorix build`

Builds your application into a static site for production deployment.

| Argument | Description |
| :--- | :--- |
| `FILE` | Required. The path to your application file. |
| `--output` | The name of the output file (defaults to `<input_name>.html`). |
| `--minify` | Minifies the HTML, CSS, and JavaScript for smaller file sizes. |