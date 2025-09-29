---
layout: default
title: Deployment
parent: Documentation
nav_order: 7
---

# Deployment

Two primary deployment options are available.

## Static Site Generation

For applications that do not require real-time backend logic, generating a static site is the recommended approach. The `build` command compiles the application into static HTML, CSS, and JavaScript files.

```bash
syqlorix build app.py
```

This command generates a `dist/` directory containing the build artifacts. This directory can be deployed to any static hosting provider, such as GitHub Pages, Vercel, Netlify, or AWS S3.

## Live Server

For applications with backend logic (e.g., handling `POST` requests), the Syqlorix application can be run as a live server. This requires a production-grade WSGI server (like Gunicorn or Waitress) and typically a reverse proxy (like Nginx). This is a more complex setup intended for specific use cases.