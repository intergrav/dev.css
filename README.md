# intergrav/dev.css

[![NPM Version](https://img.shields.io/npm/v/@intergrav/dev.css)](https://www.npmjs.com/package/@intergrav/dev.css) [![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/@intergrav/dev.css)](https://cdn.jsdelivr.net/npm/@intergrav/dev.css/) [![GitHub Repo stars](https://img.shields.io/github/stars/intergrav/dev.css)](https://github.com/intergrav/dev.css)

Extremely simple, small, classless CSS framework in the style of Vercel's Geist. Inspired by [xz/new.css](https://github.com/xz/new.css).

The minified stylesheet weighs only **~5kb** and can make any plain HTML file look clean and modern. 

It has a light and dark theme, and the header turns into a sidebar on wider displays so that you get more vertical space.

## Importing

In your HTML's `<head>` all you have to write is this, and you're done! (`.min` means to minify the file)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@1">
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

## Themes

You can also use custom colors and custom fonts in dev.css through themes. See the `/theme` folder to view some premade ones. You can also copy the `boilerplate.css` and make a theme yourself. Simply apply it after the dev.css stylesheet. For example, to apply the terminal theme, put this after your main stylesheet:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@intergrav/dev.css@1/theme/terminal.min.css">
```
