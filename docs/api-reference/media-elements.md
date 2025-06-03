# Media Element Helpers

Syqlorix provides direct helper methods for common HTML5 media and graphics elements.

-   `page.audio(src=None, **attrs)`: Creates an `<audio>` tag. Can be used as a context manager.
-   `page.video(src=None, **attrs)`: Creates a `<video>` tag. Can be used as a context manager.
-   `page.canvas(**attrs)`: Creates a `<canvas>` tag. Can be used as a context manager.
-   `page.source(src, type, **attrs)`: Creates a `<source>` tag (for `<audio>`/`<video>`).
-   `page.track(src, kind, srclang, label, **attrs)`: Creates a `<track>` tag (for `<audio>`/`<video>`).

### Example: Video Player

```python
from syqlorix import Page

page = Page(title="Media Demo")

with page.body:
    page.h1("Video Player Example")
        with page.video(controls=True, width="400", height="300"):
        page.source(src="/static/my-video.mp4", type="video/mp4")
        page.p("Your browser does not support the video tag.")
        
    page.h1("Audio Player Example")
        with page.audio(controls=True):
        page.source(src="/static/my-audio.mp3", type="audio/mpeg")
        page.p("Your browser does not support the audio tag.")
# print(page.render())
```