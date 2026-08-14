# 🍒 Cherry Pop

A fictional retro American diner-style ice cream shop, with a working shopping cart, product filtering, an interactive quiz, and a "build your own sundae" feature with real-time preview updates. Built from scratch with **plain HTML, CSS, and JavaScript**, no frameworks or front-end libraries.

> Personal study project, built as progressive front-end practice: DOM manipulation, events, arrays/objects, array methods, `localStorage`, and mobile-first responsive design.

---

## 🔗 Demo

https://nathaliadebona.github.io/cherry-pop/

---

## 📋 About the project

Cherry Pop is a fictional ice cream shop with a bright, playful visual identity inspired by 1950s American diners — a deliberate contrast to the more serious tone of previous projects. The site simulates an e-commerce experience, including a catalog with category filtering, a persistent shopping cart, a product recommendation quiz, and an interactive section for building a custom sundae.

The site has 5 pages (Home, Menu, About, Quiz, and Cart), sharing a common header, navigation, and footer across all of them.

---

## ✨ Features

- 🛒 **Shopping cart** — add and remove items, dynamic counter in the header, automatic total calculation
- 🔍 **Product filter** — by category (Cones, Cups, Shakes), with a visual indicator for the active filter
- 🍨 **Build Your Own Sundae** — choose a cone, flavor, and toppings, with a live preview that updates in real time
- ❓ **Interactive quiz** — "Which Cherry Pop Treat Matches You?", with category-based scoring logic and an illustrated result
- 💾 **Data persistence** — the cart is preserved across pages and reloads using `localStorage`
- 📱 **Mobile-first responsive design** — bottom navigation bar on mobile, traditional header on desktop

---

## 🛠️ Tech stack

- **HTML5** — semantic markup
- **CSS3** — CSS variables, Flexbox, Grid, media queries, `color-mix()`, pseudo-elements, `:has()`
- **JavaScript (Vanilla)** — DOM manipulation, events, arrays/objects, array methods, `localStorage`
- **Font Awesome** — icons
- **Google Fonts** — typography (Pacifico, Poppins)

---

## 📁 Project structure

```
cherry-pop/
├── index.html          # Home (hero, featured products, sundae builder)
├── menu.html            # Catalog with category filter
├── about.html            # Store history, timeline, and team
├── quiz.html              # Product recommendation quiz
├── cart.html               # Shopping cart
├── css/
│   └── style.css            # Styles for the whole site
├── js/
│   ├── menu.js                # Product filter logic
│   ├── cart.js                  # Cart logic (add/remove/total/localStorage)
│   ├── quiz.js                    # Quiz scoring and result logic
│   └── sundae.js                    # Build your own sundae logic
└── assets/                              # Images used in the project (logo, banner, illustrations)
```

---

## 🎨 Color palette and typography

| Use | Color |
|---|---|
| Primary (bubblegum pink) | `#FF6FA0` |
| Secondary (butter yellow) | `#FFD34E` |
| Tertiary (mint turquoise) | `#4ECDC4` |
| Accent (cherry red) | `#E8432F` |
| Background (cream) | `#FFF8EF` |
| Text (dark brown) | `#4A2E2A` |

**Typography:** [Pacifico](https://fonts.google.com/specimen/Pacifico) (headings and logo), [Poppins](https://fonts.google.com/specimen/Poppins) (body text)

---

## 🧠 Key learnings

This project was built in stages, as progressive front-end practice:

- **Mobile-first responsive layout** — CSS Grid and Flexbox, media queries, navigation that switches from a bottom bar (mobile) to a traditional header (desktop)
- **DOM** — selecting and manipulating elements, dynamically creating content (`createElement`, `appendChild`, `innerHTML`)
- **Events** — `addEventListener` on `click`, `change`, and `submit`, `event.preventDefault()`
- **Array methods** — `.forEach()`, `.map()`, `.reduce()`, `.join()` applied to real use cases (category filtering, cart total, sundae building)
- **`localStorage`** — persisting data in the browser with `JSON.stringify()`/`JSON.parse()`
- **Advanced selectors and pseudo-classes** — `:checked`, `:has()`, `:not()`, attribute selectors (`data-*`)
- **Optional chaining (`?.`)** — safely reading values that may not exist yet
- **Advanced CSS** — `color-mix()` to derive colors automatically, pseudo-elements (`::before`) for decoration, organic shapes with asymmetric `border-radius`
- **Best practices** — organizing code into multiple JS files by feature, preventing errors on elements that don't exist on every page, refactoring loose logic into reusable functions

---

## 🚀 Running the project

No dependencies or build step required — just plain HTML, CSS, and JS.

```bash
# Clone the repository
git clone https://github.com/nathaliadebona/cherry-pop.git

# Enter the folder
cd cherry-pop

# Open index.html in your browser
```

Or, if you prefer, use VS Code's **Live Server** extension to run it with auto-reload.

---

## 👩‍💻 Author

Built by **Nathália** as a front-end study project.

Github https://github.com/nathaliadebona
Portfolio https://nathaliadebona.github.io/portfolio/

---

## 📄 License

This is a study project, free to browse and learn from.
