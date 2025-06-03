# Pre-defined Components

The `syqlorix.components_lib` module provides a set of ready-to-use components that can be directly imported and added to your Syqlorix pages using `page.add_component()`.

## Available Components

### `syqlorix.components_lib.SimpleAlert(page_instance, message, type="info")`

Generates a styled alert box.

- `page_instance`: The `Page` object to add the component to.
- `message` (str): The text content of the alert.
- `type` (str, optional): The type of alert, which determines its styling. Options: `info` (default), `success`, `warning`, `error`.

### Example: SimpleAlert

```python
from syqlorix import Page
from syqlorix.components_lib import SimpleAlert

page = Page(title="Alerts Demo")

with page.body:
    page.h1("Simple Alerts")
    page.add_component(SimpleAlert, "This is an informational message!", type="info")
    page.add_component(SimpleAlert, "Data saved successfully!", type="success")
    page.add_component(SimpleAlert, "Warning: Something needs your attention.", type="warning")
    page.add_component(SimpleAlert, "Error: Failed to process request.", type="error")
    
# print(page.render())
```

### `syqlorix.components_lib.ImageGallery(page_instance, images, _class="", **attrs)`

Generates a responsive image gallery.

- `page_instance`: The `Page` object to add the component to.
- `images` (List[str]): A list of image URLs (`src` attributes).
- `_class` (str, optional): Additional CSS classes for the gallery container.
- `**attrs`: Additional HTML attributes for the gallery container.
### Example: ImageGallery

```python
from syqlorix import Page
from syqlorix.components_lib import ImageGallery

page = Page(title="Image Gallery Demo")

# Example image URLs (replace with your actual image paths)
image_list = [
    "/static/img/pic1.jpg", # Assuming you have a /static/img/ folder
    "/static/img/pic2.jpg",
    "/static/img/pic3.jpg",
    "/static/img/pic4.jpg",
]

# Note: You'd need to ensure these static images exist in your 'static/' directory
# for them to be served by syqlorix serve or copied by syqlorix build.

with page.body:
    page.h1("Syqlorix Image Gallery")
    page.add_component(ImageGallery, images=image_list, _class="my-custom-gallery")

# print(page.render())
```