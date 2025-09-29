---
layout: default
title: Complete Component Reference
parent: Documentation
nav_order: 4
---

# Complete Component Reference

This page serves as a quick-reference between the Syqlorix Python components to the final HTML output.

| Syqlorix Component | HTML Tag | Description & Short Example |
| :--- | :--- | :--- |
| `a()` | `<a>` | **Anchor / Link:** `a("Home", href="/")` |
| `abbr()` | `<abbr>` | **Abbreviation:** `abbr("WHO", title="World Health Organization")` |
| `address()` | `<address>` | **Contact Address:** `address("123 Main St")` |
| `article()` | `<article>` | **Article:** `article(h1("Title"), p("..."))` |
| `aside()` | `<aside>` | **Aside:** `aside(p("Sidebar content"))` |
| `audio()` | `<audio>` | **Audio Player:** `audio(controls=True, src_="/audio.mp3")` |
| `b()` | `<b>` | **Bold Text:** `b("This is bold")` |
| `bdi()` | `<bdi>` | **Bi-Directional Isolate:** `bdi("Username")` |
| `bdo()` | `<bdo>` | **Bi-Directional Override:** `bdo("text", dir="rtl")` |
| `blockquote()` | `<blockquote>` | **Block Quote:** `blockquote("A quote.", cite="source")` |
| `br()` | `<br>` | **Line Break:** `br()` |
| `button()` | `<button>` | **Button:** `button("Click Me", type="button")` |
| `canvas()` | `<canvas>` | **Canvas for Graphics:** `canvas(id="myCanvas")` |
| `caption()` | `<caption>` | **Table Caption:** `caption("My Table")` |
| `cite()` | `<cite>` | **Citation:** `cite("The Scream")` |
| `code()` | `<code>` | **Code Snippet:** `code("x = 1")` |
| `data()` | `<data>` | **Machine-Readable Data:** `data("Product", value="123")` |
| `datalist()` | `<datalist>` | **Datalist for Inputs:** `datalist(id="items")` |
| `dd()` | `<dd>` | **Description Details:** `dd("Details about item")` |
| `details()` | `<details>` | **Disclosure Details:** `details(summary("Title"))` |
| `dfn()` | `<dfn>` | **Definition:** `dfn("The term being defined")` |
| `dialog()` | `<dialog>` | **Dialog Box:** `dialog("Hi!", open=True)` |
| `div()` | `<div>` | **Division / Container:** `div(class_="container")` |
| `dl()` | `<dl>` | **Description List:** `dl(dt("Item"), dd("Desc"))` |
| `dt()` | `<dt>` | **Description Term:** `dt("The item")` |
| `em()` | `<em>` | **Emphasized Text:** `em("This is emphasized")` |
| `fieldset()` | `<fieldset>` | **Form Fieldset:** `fieldset(legend("Group"))` |
| `figcaption()` | `<figcaption>` | **Figure Caption:** `figcaption("Fig. 1")` |
| `figure()` | `<figure>` | **Figure Element:** `figure(img(src_="p.png"))` |
| `footer()` | `<footer>` | **Footer:** `footer("Copyright 2025")` |
| `form()` | `<form>` | **Input Form:** `form(action="/submit")` |
| `h1()`-`h6()` | `<h1>`-`<h6>` | **Headings:** `h1("Title")` |
| `header()` | `<header>` | **Header:** `header(h1("Main Title"))` |
| `hr()` | `<hr>` | **Horizontal Rule:** `hr()` |
| `i()` | `<i>` | **Idiomatic Text (Italic):** `i("This is italic")` |
| `iframe()` | `<iframe>` | **Inline Frame:** `iframe(src_="page.html")` |
| `img()` | `<img>` | **Image:** `img(src_="i.jpg", alt="desc")` |
| `input_()` | `<input>` | **Input Field:** `input_(type="text", name="user")` |
| `ins()` | `<ins>` | **Inserted Text:** `ins("new text")` |
| `kbd()` | `<kbd>` | **Keyboard Input:** `kbd("Ctrl")` |
| `label()` | `<label>` | **Form Label:** `label("Name:", for_="name")` |
| `legend()` | `<legend>` | **Fieldset Legend:** `legend("User Details")` |
| `li()` | `<li>` | **List Item:** `li("First item")` |
| `link()` | `<link>` | **Link Metadata:** `link(rel="stylesheet", href="s.css")` |
| `main()` | `<main>` | **Main Content:** `main(p("Primary content"))` |
| `map()` | `<map>` | **Image Map:** `map(name="map_name")` |
| `mark()` | `<mark>` | **Marked/Highlighted Text:** `mark("highlighted")` |
| `meta()` | `<meta>` | **Document Metadata:** `meta(charset="utf-8")` |
| `meter()` | `<meter>` | **Meter / Gauge:** `meter(value=5, max=10)` |
| `nav()` | `<nav>` | **Navigation Links:** `nav(a("Home", href="/"))` |
| `noscript()` | `<noscript>` | **Noscript Content:** `noscript("Enable JS!")` |
| `object()` | `<object>` | **Embedded Object:** `object(data="file.swf")` |
| `ol()` | `<ol>` | **Ordered List:** `ol(li("First"))` |
| `optgroup()` | `<optgroup>` | **Option Group:** `optgroup(label="Group")` |
| `option()` | `<option>` | **Select Option:** `option("Choice 1", value="1")` |
| `output()` | `<output>` | **Output/Result:** `output(name="result")` |
| `p()` | `<p>` | **Paragraph:** `p("Some text.")` |
| `picture()` | `<picture>` | **Picture Element:** `picture(source(), img())` |
| `pre()` | `<pre>` | **Preformatted Text:** `pre(code("code block"))` |
| `progress()` | `<progress>` | **Progress Bar:** `progress(value=50, max=100)` |
| `q()` | `<q>` | **Inline Quote:** `q("A short quote.")` |
| `rp()` | `<rp>` | **Ruby Fallback Parentheses:** `rp("(")` |
| `rt()` | `<rt>` | **Ruby Text:** `rt("ruby text")` |
| `ruby()` | `<ruby>` | **Ruby Annotation:** `ruby("text", rt("anno"))` |
| `s()` | `<s>` | **Strikethrough Text:** `s("no longer accurate")` |
| `samp()` | `<samp>` | **Sample Output:** `samp("Sample program output")` |
| `section()` | `<section>` | **Section of a Document:** `section(h2("Topic"))` |
| `select()` | `<select>` | **Select Dropdown:** `select(option("One"))` |
| `small()` | `<small>` | **Small Text:** `small("fine print")` |
| `source()` | `<source>` | **Media Source:** `source(src_="v.mp4", type="video/mp4")` |
| `span()` | `<span>` | **Inline Container:** `span("text", class_="highlight")` |
| `strong()` | `<strong>` | **Strong Importance:** `strong("Important!")` |
| `summary()` | `<summary>` | **Details Summary:** `summary("Click to expand")` |
| `sup()` | `<sup>` | **Superscript:** `sup("text")` |
| `table()` | `<table>` | **Table:** `table(tr(td("cell")))` |
| `tbody()` | `<tbody>` | **Table Body:** `tbody(tr(td("cell")))` |
| `td()` | `<td>` | **Table Data Cell:** `td("Cell content")` |
| `template()` | `<template>` | **Template Content:** `template(div())` |
| `textarea()` | `<textarea>` | **Text Area:** `textarea(name="comment")` |
| `tfoot()` | `<tfoot>` | **Table Foot:** `tfoot(tr(td("foot")))` |
| `th()` | `<th>` | **Table Header Cell:** `th("Header")` |
| `thead()` | `<thead>` | **Table Head:** `thead(tr(th("Header")))` |
| `time()` | `<time>` | **Date/Time:** `time("2025-12-25", datetime="2025-12-25")` |
| `title()` | `<title>` | **Document Title:** `title("Page Title")` |
| `tr()` | `<tr>` | **Table Row:** `tr(td("Cell"))` |
| `u()` | `<u>` | **Underlined Text:** `u("underlined")` |
| `ul()` | `<ul>` | **Unordered List:** `ul(li("item"))` |
| `var()` | `<var>` | **Variable:** `var("x")` |
| `video()` | `<video>` | **Video Player:** `video(controls=True, src_="/video.mp4")` |