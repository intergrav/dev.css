# intergrav/dev.css

[![NPM Version](https://img.shields.io/npm/v/@intergrav/dev.css)](https://www.npmjs.com/package/@intergrav/dev.css) [![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/@intergrav/dev.css)](https://cdn.jsdelivr.net/npm/@intergrav/dev.css/) [![GitHub Repo stars](https://img.shields.io/github/stars/intergrav/dev.css)](https://github.com/intergrav/dev.css)

Tiny, simple, classless CSS framework in the style of Vercel's [Geist](https://vercel.com/geist) design system. Inspired by [xz/new.css](https://github.com/xz/new.css).

The minified stylesheet weighs only **~4.8kb** and can make any plain HTML file look clean and modern. It also has a light and dark theme.

<details>
<summary>Preview</summary>

<img src="https://raw.githubusercontent.com/intergrav/branding/main/dev.css/preview/desktop-light.png" alt="dev.css desktop demo, light mode">
<img src="https://raw.githubusercontent.com/intergrav/branding/main/dev.css/preview/desktop-dark.png" alt="dev.css desktop demo, dark mode">
<img height="748px" src="https://raw.githubusercontent.com/intergrav/branding/main/dev.css/preview/mobile-light.png" alt="dev.css mobile demo, dark mode">
<img height="748px" src="https://raw.githubusercontent.com/intergrav/branding/main/dev.css/preview/mobile-dark.png" alt="dev.css mobile demo, dark mode">

</details>

## Importing

In your HTML's `<head>` all you have to write is this, and you're done! (`.min` means to minify the file)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3">
```

I also recommend adding a font through [intergrav/fonts](https://github.com/intergrav/fonts). Geist or Inter work with dev.css out of the box. It will use the default system/browser san-serif fonts if those are not available.

### Geist Font

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/fonts@1/serve/geist.min.css">
```

Recommended monospace variant:

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

### Footer

Optionally, use the `<footer>` tag to create a footer for your page. Only use this at the bottom of your `<body>`, or else it may look wonky. You can add whatever content in here that you'd like.

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

## Addons

dev.css at the minimum is very basic. Addons are small CSS snippets that adjust or add on to the functionality of dev.css, based on what you want for your users. Examples include turning the header into a sidebar, or making the header sticky. If you are adding an addon, it must be added **after** the main dev.css file. You might also need order them in a specific way to make it work. Here are a few built-in addons.

### `header-sticky.css`

This makes the header sticky - always at the top of the screen. Keep in mind that I do not recommend using this if your header is large, as it could affect usability of your site since it'll always be onscreen and will take up a lot of space. Only use it if your header is small, e.g. only contains a one-line `<h1>` and `<nav>`.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3/addon/header-sticky.min.css">
```

### `header-sidebar.css`

This turns the header into a sidebar on displays that are wide enough to support it. It will list the navigation out vertically in this mode. It will responsively turn back into the default state if the viewport is too thin to contain everything. If you are using this with `header-sticky.css`, be sure to add it **after** that rather than before. To import it, add this line after `dev.css`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3/addon/header-sidebar.min.css">
```

## Themes

You can use custom colors and custom fonts in dev.css through themes. See the `/theme` folder to view some premade ones. You can also copy the `boilerplate.css` and make a theme yourself. Simply apply it after the dev.css stylesheet. For example, to apply the terminal theme, put this after your main stylesheet:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3/theme/terminal.min.css">
```
