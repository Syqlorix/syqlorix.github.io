---
layout: default
title: Handling Forms
parent: Documentation
nav_order: 5
---

# Form Data Handling

This document describes how to process user-submitted form data. A route can be configured to handle both `GET` (for displaying the form) and `POST` (for processing the submitted data) requests.

## Form Handling Example

The following example demonstrates a route that displays a form and processes its data upon submission.

```python
@doc.route('/message', methods=['GET', 'POST'])
def message_form(request):
    # A POST request indicates a form submission.
    if request.method == 'POST':
        user_message = request.form_data.get('message', 'nothing')
        return div(
            h1("Message Received"),
            p(f"Submitted data: '{user_message}'"),
            a("Return to form", href="/message")
        )

    # A GET request displays the form.
    return div(
        h1("Send a Message"),
        form(
            label("Message:", for_="message"),
            br(),
            input_(type="text", name="message", id="message"),
            button("Submit", type="submit"),
            method="POST", 
            action="/message"
        )
    )
```

### The `request` Object

Upon form submission, the `request.form_data` attribute is populated with the submitted data. The dictionary keys correspond to the `name` attribute of the form's input fields.

## API Data (JSON)

For API endpoints that receive JSON data, the `request.json_data` attribute can be used.

```python
@doc.route('/api/data', methods=['POST'])
def api_data(request):
    # Data sent with a Content-Type of application/json
    # will be available in the request.json_data dictionary.
    item = request.json_data.get('item')
    return {"status": "success", "received": item}
```