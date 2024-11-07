# intergrav/dev.css

[![NPM Version](https://img.shields.io/npm/v/@intergrav/dev.css)](https://www.npmjs.com/package/@intergrav/dev.css) [![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/@intergrav/dev.css)](https://cdn.jsdelivr.net/npm/@intergrav/dev.css/) [![Discord](https://img.shields.io/discord/1262738186338308126?logo=discord&logoColor=%23fff&color=%235865F2)](https://discord.gg/m5tUgaM3uK) [![GitHub Repo stars](https://img.shields.io/github/stars/intergrav/dev.css)](https://github.com/intergrav/dev.css)

Tiny, simple, classless CSS framework inspired by Vercel's [Geist](https://vercel.com/geist) design system. It is designed to make any plain HTML file look clean and modern. The minified stylesheet weighs only **~4.8kb** and includes both light and dark themes.

<details>
<summary>Click to view preview</summary>
<img src="https://raw.githubusercontent.com/intergrav/branding/main/dev.css/preview/desktop-light.png" alt="dev.css desktop demo, light mode">
<img src="https://raw.githubusercontent.com/intergrav/branding/main/dev.css/preview/desktop-dark.png" alt="dev.css desktop demo, dark mode">
<img height="748px" src="https://raw.githubusercontent.com/intergrav/branding/main/dev.css/preview/mobile-light.png" alt="dev.css mobile demo, dark mode">
<img height="748px" src="https://raw.githubusercontent.com/intergrav/branding/main/dev.css/preview/mobile-dark.png" alt="dev.css mobile demo, dark mode">
</details>

## Importing

To use dev.css in your HTML, simply add the following line to the `<head>` section of your HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3">
```

You can also add a font from [intergrav/fonts](https://github.com/intergrav/fonts#readme) to improve the experience, however it will increase the website download size. Geist and Inter fonts work with dev.css out of the box, other fonts will require a theme to be used. If these fonts are not available, the default system/browser sans-serif and monospace fonts will be used, such as Microsoft's Segoe UI or Apple's San Francisco.

## Elements

dev.css takes advantage of semantic HTML elements. Here are some guidelines on how to use them for the best results.

### Header

Use the `<header>` tag to create a large header for your page. Place it at the very top of your `<body>`. You can use an `<h1>` tag for your website title, and another `<h1>` tag outside of the header for the page title.

If you need a navigation bar, add a `<nav>` element with a `<ul>` that contains `<li>` items with `<a>` links. dev.css will automatically lay out the navigation items horizontally, with dividing bullet points between them. If you are using the `header-sidebar.css` addon, the navigation items will be laid out vertically when in sidebar mode. 

Optionally, you can add a `<p>` tag after the `<h1>` tag to provide a description of the current page.

### Footer

Optionally, use the `<footer>` tag to create a footer for your page. Place it at the bottom of your `<body>`. You can add any content you like inside the footer.

### Text

Wrap all body text in `<p>` tags, unless it's the sole child of another element. Use the `<blockquote>` tag for quotes. To highlight text, wrap it in the `<mark>` tag. For code, use `<code>` for short inline code snippets and wrap that with `<pre>` for code blocks. Use `<kbd>` for keyboard input.

### Button

To create a link button, wrap the button in an `<a>` tag. Here's an example:

```html
<a href="https://example.com">
	<button>Click me!</button>
</a>
```

### Details

The `<details>` element can be used to create a toggle-able dropdown without using any JavaScript. Here's an example:

```html
<details>
	<summary>Click me!</summary>
	<p>Lorem ipsum dolor sit amet.</p>
</details>
```

### More

To learn about other HTML elements and how to write HTML, visit [W3Schools/html](https://www.w3schools.com/html/).

## Addons

dev.css provides a basic set of styles. Addons are small CSS or JS snippets that can be used to adjust or add functionality to dev.css based on your needs. Here are the built-in addons.

### `header-sticky.css`

This addon makes the header sticky, always staying at the top of the screen. Note that this addon is recommended for small headers, as it may affect the usability of your site if the header is large and takes up a lot of space. To use this addon, add the following line after the `dev.css` import:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3/addon/header-sticky.min.css">
```

### `header-oneline.css`

This addon lays everything out in the header horizontally. This is ideal if you don't have much in your header and you want it to be more compact. It works great with `header-sticky.css`. I do not recommend adding `<p>` or more than one `<nav>` element in the header if you're using this. To use this addon, add the following line after the `dev.css` import:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3/addon/header-oneline.min.css">
```

### `header-sidebar.css`

This addon turns the header into a sidebar on wide displays. The navigation items are listed vertically in this mode. The sidebar will responsively switch back to the default state if the viewport is too narrow to contain everything. If you are using this addon with `header-sticky.css` or `header-oneline.css`, make sure to import it **after** those. To use this addon, add the following line after the `dev.css` import:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3/addon/header-sidebar.min.css">
```

### `scroll-to-top.js`

This addon creates a small "scroll to top" button in the bottom right corner of your website when the user scrolls down. The button uses the default dev.css button style. The button is slightly opaque so that you can see it but it doesn't block the view. To use this addon, add the following line after the `dev.css` import:

```html
<script src="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3/addon/scroll-to-top.min.js" defer></script>
```

## Themes

dev.css supports custom colors and fonts through themes. You can find some pre-made themes in the `/theme` folder. To use a theme, simply apply it after the dev.css stylesheet. There are themes inspired by terminals, night and day themes, and a set of Catppuccin themes. For example, to apply the terminal theme, add the following line after the `dev.css` import:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@3/theme/terminal.min.css">
```

If you are creating a custom theme, it is recommended to use the `boilerplate-auto.css` template for better accessibility.

## Credits

- [xz/new.css](https://github.com/xz/new.css) is the main inspiration for this project
