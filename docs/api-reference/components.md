# Components

Syqlorix supports creating reusable page components using simple Python functions decorated with `@syqlorix.component`. This allows you to encapsulate blocks of HTML, CSS, and JavaScript logic into modular, reusable units.

## `@component` Decorator

To define a component, decorate a Python function with `@syqlorix.component`. The component function **must** accept a `page_instance: Page` as its first argument.

```python
# components/my_button.py
from syqlorix import Page, component, css

@component
def PrimaryButton(page_instance: Page, text: str, button_id: str, **attrs):
    # Components can encapsulate their own styles
    button_styles = css(
        f"#{button_id}": {
            "background_color": "#007bff",
            "color": "white",
            "padding": "10px 20px",
            "border": "none",
            "border_radius": "5px",
            "cursor": "pointer",
            "font_size": "1em"
        },
        f"#{button_id}:hover": {
            "background_color": "#0056b3"
        }
    )
    page_instance.style(button_styles)

    # And their own scripts
    page_instance.script(f"""
        document.getElementById('{button_id}').onclick = function() {{
            alert('Primary button "{text}" clicked!');
        }};
    """)

    # And their own HTML
    page_instance.button(text, id=button_id, **attrs)
```

## `page.add_component(component_func, *args, **kwargs)`

To use a component within a `Page` object, call `page.add_component()`. Pass the component function itself, followed by any arguments or keyword arguments that the component function expects (after `page_instance`).

### Example: Using a Custom Component

```python
from syqlorix import Page
from syqlorix.components_lib import SimpleAlert # Import a predefined component

page = Page(title="Component Demo")

with page.body:
    page.h1("Syqlorix Components")
    page.p("Components help you build reusable UI blocks.")

    # Add a predefined component
    page.add_component(SimpleAlert, "This is an informational message!", type="info")
    page.add_component(SimpleAlert, "Operation successful!", type="success")
    
# print(page.render())
```