---
layout: default
title: Deployment
parent: Documentation
nav_order: 7
---

# Deployment

When you're ready to publish your site, you have two primary options.

## Static Site Build (Recommended)

For most applications, the best approach is to build a static site. This is fast, secure, and easy to host.

```bash
syqlorix build app.py
```

This command generates a `dist/` folder containing static `.html` files for your routes, with minified CSS and JS. You can deploy this folder to any static hosting provider, such as:

- GitHub Pages
- Vercel
- Netlify
- AWS S3

## Live Server (Advanced)

If your app requires real-time backend logic (e.g., complex POST requests that can't be handled by a serverless function), you can run Syqlorix as a live server behind a production-grade tool like Gunicorn or Waitress, often with Nginx as a reverse proxy. This is a more complex setup and is only recommended for specific use cases.