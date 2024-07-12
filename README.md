# intergrav/dev.css

[![NPM Version](https://img.shields.io/npm/v/@intergrav/dev.css)](https://www.npmjs.com/package/@intergrav/dev.css) [![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/@intergrav/dev.css)](https://cdn.jsdelivr.net/npm/@intergrav/dev.css/) [![GitHub Repo stars](https://img.shields.io/github/stars/intergrav/dev.css)](https://github.com/intergrav/dev.css)

Extremely simple, small, classless CSS framework in the style of Vercel's Geist. Inspired by [xz/new.css](https://github.com/xz/new.css).

The minified stylesheet weighs only **~4.8kb** and can make any plain HTML file look clean and modern. It also has a light and dark theme.

## Importing

In your HTML's `<head>` all you have to write is this, and you're done! (`.min` means to minify the file)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@2">
```

I also recommend adding a font through [intergrav/fonts](https://github.com/intergrav/fonts). Geist or Inter work with dev.css out of the box. It will use the default system/browser san-serif fonts otherwise.

### Geist Font

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/fonts@1/serve/geist.min.css">
```
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/fonts@1/serve/geist-mono.min.css">
```

### Inter Font

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/fonts@1/serve/inter.min.css">
```

## Elements

dev.css takes advantage of semantic HTML elements. Here are some guidelines on how these should be used for the best results.

### Header

Use the `<header>` tag to create a large header for your page. Only use this at the very top of your `<body>`, or else it may look wonky.

For the title, the header should contain an `<h1>` tag. You can also add an `<h4>` tag before the `<h1>` tag if you want to show extra information.

If you need a navigation bar, you can add a `<nav>` with `<a>` links inside it. dev.css will automatically add dividing bullet points between or before the `<a>` tags, depending on whether the user is in topbar or sidebar mode. In sidebar mode, the navigation bar will lay out into separate lines.

Optionally, you could add a `<p>` tag after the `<h1>` tag if you want to give a description of the page the user is currently on.

### Text

Wrap all body text in `<p>` tags, unless it's the sole child of another element. If you want to write quotes, you can use the `<blockquote>` tag. To highlight text, wrap it in the `<mark>` tag. Want to show code? Use `<code>` for short inline code. Use `<pre>` for code blocks. Use `<kbd>` for keyboard input.

### Button

For a link button, you can wrap the button in an `<a>` tag. Here's a code example:

```html
<a href="https://example.com">
	<button>Click me!</button>
</a>
```

### Details

The `<details>` element can make a toggle-able dropdown without using any JavaScript. Here's a code example:

```html
<details>
	<summary>Click me!</summary>
	<p>Lorem ipsum dolor sit amet.</p>
</details>
```

### More

To learn about other HTML elements and how to write HTML, visit [W3Schools/html](https://www.w3schools.com/html/).

## Themes

You can use custom colors and custom fonts in dev.css through themes. See the `/theme` folder to view some premade ones. You can also copy the `boilerplate.css` and make a theme yourself. Simply apply it after the dev.css stylesheet. For example, to apply the terminal theme, put this after your main stylesheet:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@2/theme/terminal.min.css">
```
