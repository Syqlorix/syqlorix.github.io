# CSS DSL (`syqlorix.css`)

Syqlorix provides a simple Pythonic Domain-Specific Language (DSL) for generating CSS strings, allowing you to define styles using Python dictionaries.

## `css(**rules)`

Generates a CSS string from keyword arguments where each keyword is a CSS selector and its value is a dictionary of CSS properties and values.

- `**rules`: Keyword arguments where keys are CSS selectors (e.g., `body`, `#my-id`, `.my-class a`). Values are dictionaries of CSS properties (`snake_case` will be converted to `kebab-case`).

### Example:

```python
from syqlorix import Page, css

# Define styles using the css() DSL
my_styles = css(
    body={
        "font_family": "Arial, sans-serif",
        "margin": "20px",
        "background_color": "#f0f0f0"
    },
    "h1": {
        "color": "#336699",
        "text_align": "center"
    },
    ".button": {
        "padding": "10px 15px",
        "border_radius": "5px"
    }
)

page = Page(title="CSS DSL Example")
page.style(my_styles) # Add the generated CSS to the page

with page.body:
    page.h1("Styling with Syqlorix CSS DSL")
    page.p("This page is styled using Python dictionaries for CSS.")
    page.button("Styled Button", _class="button")

print(page.render())
```

### Output (CSS portion):

```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f0f0f0;
}
h1 {
  color: #336699;
  text-align: center;
}
.button {
  padding: 10px 15px;
  border-radius: 5px;
}
```