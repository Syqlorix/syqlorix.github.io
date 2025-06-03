# Form Helpers

Syqlorix provides a comprehensive set of helper methods for creating HTML form elements, simplifying input creation and client-side validation.

## Common Input Helpers

These methods wrap the `page.input()` tag function and set common attributes.

-   `page.text_input(name, value=None, **attrs)`: Creates an `<input type="text">`.
-   `page.password_input(name, value=None, **attrs)`: Creates an `<input type="password">`.
-   `page.email_input(name, value=None, **attrs)`: Creates an `<input type="email">`.
-   `page.number_input(name, value=None, **attrs)`: Creates an `<input type="number">`.
-   `page.date_input(name, value=None, **attrs)`: Creates an `<input type="date">`.
-   `page.range_input(name, value=None, min_val=None, max_val=None, step=None, **attrs)`: Creates an `<input type="range">`.
-   `page.checkbox(name, value, checked=False, **attrs)`: Creates an `<input type="checkbox">`.
-   `page.radio(name, value, checked=False, **attrs)`: Creates an `<input type="radio">`.
-   `page.submit_button(text="Submit", name=None, **attrs)`: Creates an `<button type="submit">`.

### Example: Input Helpers

```python
from syqlorix import Page

page = Page(title="Form Helpers Demo")

with page.body:
    with page.form(action="/submit", method="post", id="myForm"):
        page.label("Username:", _for="username")
        page.text_input("username", placeholder="Enter username", required=True, id="username")
        page.br()

        page.label("Password:", _for="password")
        page.password_input("password", id="password")
        page.br()

        page.label("Quantity:", _for="qty")
        page.number_input("qty", value=1, min=0, max=10, id="qty")
        page.br()

        page.submit_button("Sign Up")

# print(page.render())
```

## Other Form Elements

-   `page.textarea(name, content="", **attrs)`: Creates a `<textarea>`.
    ```python
    with page.form():
        page.label("Your Message:", _for="message")
        page.textarea("message", "Default text here", rows=5, cols=30, id="message")
    ```
-   `page.select(*content, **attrs)`: Creates a `<select>` dropdown (context manager).
-   `page.option(text, value, selected=False, **attrs)`: Creates an `<option>`.
    ```python
    with page.form():
        page.label("Choose Fruit:", _for="fruit")
        with page.select(name="fruit", id="fruit"):
            page.option("Apple", value="apple")
            page.option("Banana", value="banana", selected=True)
            page.option("Cherry", value="cherry")
    ```
-   `page.label(text, _for, **attrs)`: Creates a `<label>`.

## Client-Side Form Validation

`page.validate_form_script(form_id, fields)` generates a robust, zero-dependency JavaScript for inline error display and custom messages.

- `form_id` (str): The ID of the form element.
- `fields` (dict): A dictionary defining validation rules for each input.
    ```python
    {
        "username": {"required": True, "minlength": 3, "pattern": "[a-zA-Z0-9]+$", "message": "Username must be alphanumeric (3+ chars)"},
        "email": {"required": True, "type": "email", "message": "Please enter a valid email address."},
        "password": {"required": True, "minlength": 8, "message": "Password must be at least 8 characters."},
     }
    ```

### Example: Client-Side Validation

```python
from syqlorix import Page

page = Page(title="Validation Demo")

with page.body:
    with page.form(id="validationForm"):
        page.label("Username:", _for="val_username")
        page.text_input("username", id="val_username")
        page.span(id="val_username-error", _class="error-message") # Error display span
        page.br()

        page.label("Email:", _for="val_email")
        page.email_input("email", id="val_email")
        page.span(id="val_email-error", _class="error-message")
        page.br()

        page.label("Password:", _for="val_password")
        page.password_input("password", id="val_password")
        page.span(id="val_password-error", _class="error-message")
        page.br()

    page.submit_button("Register")

    page.style("""
        .error-message { color: red; font-size: 0.8em; margin-left: 5px; }
        input.is-invalid { border-color: red; }
    """)
        
    page.validate_form_script(
        form_id="validationForm",
        fields={
            "username": {"required": True, "minlength": 3, "pattern": "^[a-zA-Z0-9]+$", "message": "Username: 3+ alphanumeric chars."},
            "email": {"required": True, "type": "email", "message": "Valid email required."},
            "password": {"required": True, "minlength": 8, "message": "Password: 8+ characters."},
        }
    )
# print(page.render())
```