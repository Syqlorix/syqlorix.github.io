---
layout: default
title: Handling Forms
parent: Documentation
nav_order: 5
---

# Handling Forms

Syqlorix makes it easy to process user input from HTML forms. The key is to create a route that can handle both `GET` (displaying the form) and `POST` (processing the submitted data) requests.

## Full Form Example

Here is a complete example of a route that displays a form and then shows the user the data they submitted.

```python
@doc.route('/message', methods=['GET', 'POST'])
def message_form(request):
    # If the browser sent a POST request, process the data
    if request.method == 'POST':
        user_message = request.form_data.get('message', 'nothing')
        return div(
            h1("Message Received!"),
            p(f"You sent: '{user_message}'"),
            a("Send another message", href="/message")
        )

    # Otherwise, it's a GET request, so show the form
    return div(
        h1("Send a Message"),
        form(
            label("Your message:", for_="message"),
            br(),
            input_(type="text", name="message", id="message"),
            button("Submit", type="submit"),
            # This is the crucial part for the POST request
            method="POST", 
            action="/message"
        )
    )
```

### The `request` Object

When a form is submitted, Syqlorix populates the `request.form_data` dictionary. You can access the submitted values using the `name` attribute of your form's input fields as the key.