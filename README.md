# stylein

> **Give Style To Elements** — A tiny, dependency-free CSS-in-JS helper for the DOM.

[فارسی](#فارسی) · [English](#english)

---

## English

### What is stylein?

`stylein` is a lightweight CSS-in-JS library for vanilla JavaScript. It lets you style DOM elements with a plain JavaScript object — no build step, no framework, no dependencies.

### Install

```bash
npm install stylein
```

Or use it directly from a CDN:

```html
<script type="module">
  import stylein from "https://unpkg.com/stylein/script.js";
</script>
```

### Usage

```js
import stylein from "stylein";

const p = new stylein("p");

p.style = {
  width: "100%",
  height: "100dvh",
  bgColor: "#00ff00",
  margin: "0",
  paddingTop: "16px",
  borderRadius: "8px",
};
```

### Aliases

To keep your code short, `stylein` supports shorthand aliases:

| Alias     | CSS Property      |
|-----------|-------------------|
| `bgColor` | `backgroundColor` |
| `mt`      | `marginTop`       |
| `mb`      | `marginBottom`    |
| `pt`      | `paddingTop`      |
| `bdr`     | `borderRadius`    |
| ...       | more aliases coming |

### Features

- ✅ Zero dependencies
- ✅ Works with any DOM element
- ✅ Plain object syntax
- ✅ Alias support for common properties
- 🚧 Pseudo-selectors, media queries, and themes — coming soon

### API

#### `new stylein(selector)`

Creates a wrapper around a DOM element.

```js
const el = new stylein(".my-class");
```

#### `el.style = { ... }`

Applies styles from a plain object.

```js
el.style = { color: "red", fontSize: "18px" };
```

#### Aliases

Common properties can be accessed via short aliases.

```js
el.mt = "20px";   // → marginTop
el.bgColor = "#fff";
```

### License

MIT © 2026 humbledore

---

## فارسی

### stylein چیست؟

`stylein` یک کتابخانه‌ی سبک CSS-in-JS برای جاوااسکریپت خالص (vanilla JS) است. با آن می‌توانید به DOM استایل بدهید — بدون نیاز به build، فریم‌ورک، یا هیچ dependency.

### نصب

```bash
npm install stylein
```

یا استفاده‌ی مستقیم از CDN:

```html
<script type="module">
  import stylein from "https://unpkg.com/stylein/script.js";
</script>
```

### استفاده

```js
import stylein from "stylein";

const p = new stylein("p");

p.style = {
  width: "100%",
  height: "100dvh",
  bgColor: "#00ff00",
  margin: "0",
  paddingTop: "16px",
  borderRadius: "8px",
};
```

### Aliasها

برای کوتاه‌تر شدن کد، `stylein` از alias پشتیبانی می‌کند:

| Alias     | پراپرتی CSS       |
|-----------|-------------------|
| `bgColor` | `backgroundColor` |
| `mt`      | `marginTop`       |
| `mb`      | `marginBottom`    |
| `pt`      | `paddingTop`      |
| `bdr`     | `borderRadius`    |
| ...       | aliasهای بیشتر به‌زودی |

### ویژگی‌ها

- ✅ بدون هیچ dependency
- ✅ روی هر المنت DOM کار می‌کند
- ✅ سینتکس آبجکت ساده
- ✅ پشتیبانی از alias برای پراپرتی‌های رایج
- 🚧 pseudo-selectorها، media queryها و theme — به‌زودی

### API

#### `new stylein(selector)`

یک wrapper دور یک المنت DOM می‌سازد.

```js
const el = new stylein(".my-class");
```

#### `el.style = { ... }`

استایل‌ها را از یک آبجکت ساده اعمال می‌کند.

```js
el.style = { color: "red", fontSize: "18px" };
```

#### Aliasها

پراپرتی‌های رایج با alias کوتاه در دسترس‌اند.

```js
el.mt = "20px";   // ← marginTop
el.bgColor = "#fff";
```

### مجوز

MIT © 2026 humbledore

---

## Contributing

Issues and pull requests are welcome.

## Author

**humbledore** — [npm](https://www.npmjs.com/~humbledore)

---

⭐ If you find `stylein` useful, give it a star!
