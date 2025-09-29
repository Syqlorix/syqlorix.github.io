---
layout: default
title: CLI Reference
parent: Documentation
nav_order: 8
---

# CLI Reference

The Syqlorix package includes a command-line interface (CLI).

## `syqlorix init`

Generates a sample `app.py` file in the current directory.

| Argument | Description |
| :--- | :--- |
| `[FILENAME]` | Optional. The name of the file to create (default: `app.py`). |

## `syqlorix run`

Starts the development server.

| Argument | Description |
| :--- | :--- |
| `FILE` | Required. The path to the application file. |
| `--host` | The interface to bind to (default: `127.0.0.1`). |
| `--port` | The port to use (default: `8000`). |
| `--no-reload`| Disables the live-reloading feature. |

## `syqlorix build`

Builds the application into a static site.

| Argument | Description |
| :--- | :--- |
| `FILE` | Required. The path to the application file. |
| `--output` | The name of the output directory (default: `dist`). |
