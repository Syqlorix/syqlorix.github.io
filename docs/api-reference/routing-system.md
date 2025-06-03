# Routing System (`syqlorix.Route`)

Syqlorix provides a simple, zero-dependency routing system that allows you to organize your web pages into a logical structure, supporting both direct page objects and functions that generate pages. This is primarily used by the `syqlorix serve` and `syqlorix build` CLI commands.

## `syqlorix.Route(path="/")`

Initializes a new router instance. A `Route` instance acts as a container for other routes or sub-routers.

- `path` (str): The base path for this router and its children. Must start with `/`.

## `@router_instance.route(path="/")`

A decorator to map Python functions (which return `Page` objects or HTML strings) to specific URL paths within a router instance.

- `path` (str): The URL path to map the function to. Must start with `/`.

### Example: Defining Routes

```python
# site_routes.py
from syqlorix import Page, Route

# Create your main router instance
main_router = Route("/")

# Define pages
home_page = Page(title="Home")
with home_page.body:
    home_page.h1("Welcome!")
    home_page.a("Go to About", href="/about")

# Map a Page object directly
@main_router.route("/")
def serve_home(): # Name doesn't matter, just a placeholder
    return home_page

# Map a function that generates a Page (for dynamic content)
@main_router.route("/dynamic")
def create_dynamic_page():
    dynamic_page = Page(title="Dynamic")
    with dynamic_page.body:
        dynamic_page.p("This page was generated dynamically!")
    return dynamic_page

# Example of a sub-router for better organization
admin_router = Route("/admin")

@admin_router.route("/")
def admin_dashboard():
    page = Page(title="Admin Dashboard")
    with page.body:
        page.h1("Admin Area")
        page.p("Manage your site here.")
    return page

@admin_router.route("/users")
def admin_users():
    page = Page(title="Admin Users")
    with page.body:
        page.h1("User Management")
        page.ul(page.li("User A"), page.li("User B"))
    return page

# Nest the sub-router into the main router
main_router.subroute(admin_router)

# You can also use a simple dictionary, but Route offers more structure:
routes_dict_example = {
    "/": home_page,
    "/dynamic": create_dynamic_page,
    "/contact": Page(title="Contact Us") # Direct Page object
}
```

## `router_instance.subroute(sub_router_instance)`

Nests another `Route` instance under the current router. This is useful for creating modular and hierarchical URL structures.

- `sub_router_instance`: An instance of `syqlorix.Route`.

## `router_instance.map_routes()`

Flattens the hierarchical router structure into a simple dictionary of `path: Page/callable` mappings that the `syqlorix serve` and `syqlorix build` commands can directly use.

- **Returns**: `Dict[str, Union[Page, Callable[[], Page]]]` - A flattened dictionary of all mapped routes.

### Usage with CLI:

To serve or build a site using your `main_router` instance:

```bash
# Assuming your routes are defined in 'site_routes.py'
syqlorix serve site_routes.py # The CLI automatically looks for 'routes' or 'main_router'
syqlorix build site_routes.py -o my_site
```