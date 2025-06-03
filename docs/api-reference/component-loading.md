# Component Loading

Syqlorix allows you to dynamically load components from separate Python files at runtime using `syqlorix.loader.load_component()`. This is useful for organizing larger projects where components might reside in various files.

## `syqlorix.loader.load_component(file_path, component_name=None)`

Loads a Syqlorix component function from a specified Python file.

- `file_path` (str): The absolute or relative path to the Python file containing the component.
- `component_name` (str, optional): The name of the specific component function within the file.
    - If `None`, it tries to find a function decorated with `@component`.
    - If only one `@component` function exists, it returns that one.
    - Raises an error if multiple or no `@component` functions are found without `component_name` specified.

### Example: Dynamic Component Loading

Assume you have a file `my_custom_component.py` in your project root:

```python
# my_custom_component.py
from syqlorix import Page, component

@component
def CustomGreeting(page_instance: Page, name: str):
    page_instance.div(f"Hello, {name}! This greeting was loaded dynamically.")

def _internal_helper(): # This function will be ignored as it's not a @component
    pass
```

Then in your main application:

```python
import os
from syqlorix import Page
from syqlorix.loader import load_component

page = Page(title="Dynamic Loading Demo")

# Construct the path to the component file (adjust as per your project structure)
current_script_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(os.path.dirname(current_script_dir)) # Assumes this script is in examples/
component_file = os.path.join(project_root, "my_custom_component.py")

# Load the component
try:
    LoadedGreeting = load_component(component_file) # Auto-detects @component
    # Or if you had multiple components in one file:
    # LoadedGreeting = load_component(component_file, "CustomGreeting")

    with page.body:
        page.h1("Dynamic Component Loading")
        page.add_component(LoadedGreeting, name="Syqlorix User")
except FileNotFoundError as e:
        page.p(f"Error loading component: {e}")
except ValueError as e:
        page.p(f"Error finding component: {e}")
except Exception as e:
    page.p(f"An unexpected error occurred: {e}")

# print(page.render())
```