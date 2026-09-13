# Backlog — a game review blog

A small static site: reviews on the left, a "Now Playing" shelf on the right.
No build step, no framework — plain HTML, CSS, and JS, so it works as-is on
GitHub Pages.

## File map

```
index.html    page structure
style.css     all styling
reviews.js    your content — reviews + now-playing list
script.js     renders reviews.js into the page (you shouldn't need to touch this)
```

## Adding a review

Open `reviews.js` and add an object to the `REVIEWS` array:

```js
{
  id: "elden-ring",              // unique, used in the URL as #elden-ring
  title: "Elden Ring",
  date: "2026-04-10",            // YYYY-MM-DD
  status: "finished",            // "finished" or "dropped"
  rating: 9.5,                   // 0–10, decimals okay
  tags: ["action", "soulslike"],
  excerpt: "One or two sentences — shown in the list view.",
  body: [
    "First paragraph of the full review.",
    "Second paragraph.",
    "As many paragraphs as you want — each string in this array is its own <p>."
  ]
}
```

New tags you use show up automatically as filter buttons at the top of the
page — nothing else to configure.

## Updating "Now Playing"

Edit the `NOW_PLAYING` array in the same file:

```js
{
  game: "Baldur's Gate 3",
  note: "Act 2, currently arguing with a githyanki."
}
```

When you finish or drop it, move it into `REVIEWS` with a rating and remove
it from here.

## Running it locally

Just open `index.html` in a browser — everything's client-side, no server
needed. If your browser blocks local file access for scripts, run a quick
local server from this folder instead:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (or use an existing one).
2. Put these four files (`index.html`, `style.css`, `script.js`, `reviews.js`)
   in the repository root, then commit and push:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub, go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick the **main** branch and the **/ (root)** folder, then save.
5. GitHub gives you a URL a minute or two later, usually
   `https://<your-username>.github.io/<your-repo>/`.

Every time you push a new commit (e.g. after adding a review to
`reviews.js`), the live site updates automatically within a minute or so.

### Using a custom domain (optional)

Settings → Pages has a "Custom domain" field. Add a `CNAME` file at your
domain's DNS host pointing to `<your-username>.github.io`, enter the domain
in that field, and GitHub handles the rest (including free HTTPS).

## Customizing the look

All colors, fonts, and spacing are CSS custom properties at the top of
`style.css` under `:root` — change the hex values there to retheme the whole
site without hunting through the rest of the file.
