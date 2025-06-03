# Server-Side Form Parsing

Syqlorix includes a lightweight, zero-dependency utility to parse `application/x-www-form-urlencoded` data (the default encoding for HTML forms submitted via `POST` without `enctype="multipart/form-data"`). This is useful for handling basic form submissions in Python applications without extra dependencies.

## `syqlorix.parse_form_urlencoded(data_string)`

Parses a URL-encoded string into a Python dictionary.

- `data_string` (str): The URL-encoded string, typically received from a form submission's request body.

### Returns:

`Dict[str, Union[str, List[str]]]` - A dictionary where keys are form field names. If a field has multiple values (e.g., multiple checkboxes with the same name), its value will be a list of strings; otherwise, it will be a single string.

### Example: Parsing Form Data (e.g., in Flask)

```python
from flask import Flask, request, render_template_string
from syqlorix import Page, parse_form_urlencoded

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    message = ""
    if request.method == 'POST':
        # Flask's request.data provides raw bytes for non-multipart forms
        raw_data = request.data.decode('utf-8')
            
        # Use Syqlorix's utility to parse the form data
        parsed_form_data = parse_form_urlencoded(raw_data)
        
        username = parsed_form_data.get('username', 'N/A')
        email = parsed_form_data.get('email', 'N/A')
            
        message = f"Received: Username='{username}', Email='{email}'"
        print(message) # For server-side logging

    page = Page(title="Form Parsing Demo")
    with page.body:
        page.h1("Submit a Form")
        with page.form(method="post"):
            page.label("Username:", _for="username")
            page.text_input("username", id="username")
            page.br()
            page.label("Email:", _for="email")
            page.email_input("email", id="email")
            page.br()
            page.submit_button("Submit Form")
        if message:
            page.p(message, style="font-weight: bold; color: green;")
    
    return render_template_string(page.render())

if __name__ == '__main__':
    print("Run Flask app and submit the form to see parsing in action.")
    app.run(debug=True, port=5000)
```