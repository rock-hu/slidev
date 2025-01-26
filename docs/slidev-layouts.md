# slidev-layouts

## center

Displays the content in the middle of the screen.

## cover

Used to display the cover page for the presentation, may contain the presentation title, contextualization, etc.

## default

The most basic layout, to display any kind of content.

## end

The final page for the presentation.

## fact

To show some fact or data with a lot of prominence on the screen.

## full

Use all the space of the screen to display the content.

## intro

To introduce the presentation, usually with the presentation title, a short description, the author, etc.

## none

A layout without any existent styling.

## quote

To display a quotation with prominience.

## section

Used to mark the beginning of a new presentation section.

## statement

Make an affirmation/statement as the main page content.

## image

```
---
layout: image|image-left|image-right

# the image source
image: ./path/to/the/image
---
```

## iframe

```
---
layout: iframe|iframe-left|iframe-right

# the web page source
url: https://github.com/slidevjs/slidev
---
```

```
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```

## two-cols-header

```
---
layout: two-cols-header
---

This spans both

::left::

# Left

This shows on the left

::right::

# Right

This shows on the right
```

## references

| item             | link(s)                              |
| ---------------- | ------------------------------------ |
| Built-in Layouts | https://sli.dev/builtin/layouts.html |
