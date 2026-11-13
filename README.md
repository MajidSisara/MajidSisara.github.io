# MajidSisara.github.io

Personal academic website of **Majid Abbasi Sisara**, hosted free on GitHub Pages.
No build tools, no Jekyll, no installs. Plain HTML + CSS + a small script.

**Live at:** https://majidsisara.github.io

---

## How to update the site

All content is in the `data/` folder. Edit a file, commit, and the site updates in about a minute.

| What you want to change | File to edit |
|---|---|
| Name, bio, tagline, links, skills, education | `data/profile.js` |
| Research project cards (with figures) | `data/research.js` |
| Publications | `data/publications.js` |
| News, experience, teaching, talks, reviewing | `data/experience.js` |
| Photo | replace `assets/img/profile.png` |
| CV PDF | replace `files/Majid_Abbasi_Sisara_CV.pdf` (keep the same name) |

You can edit directly on github.com: open the file, click the ✏️ pencil, change it, then click **Commit changes**.

### Add a publication
Open `data/publications.js`, copy any `{ ... },` block, paste it at the top of the list, and change the fields:

```js
{
  type: "journal",          // "journal" | "submitted" | "preprint" | "conference"
  year: 2027,
  selected: true,           // optional: adds a ★ and shows under "Selected"
  title: "Your paper title",
  authors: "Abbasi Sisara, M., Coauthor, A., & Valero-Cuevas, F. J.",
  venue: "Journal Name, 12(3), 45–67",
  image: "assets/img/pubs/my-figure.png",   // optional thumbnail
  links: [
    { label: "PDF",  url: "https://..." },
    { label: "DOI",  url: "https://doi.org/..." },
    { label: "Code", url: "https://github.com/MajidSisara/..." }
  ]
},
```

When a paper under review is accepted, change `type: "submitted"` to `type: "journal"` and update `venue`. Your name is bolded automatically.

### Add a research figure
1. Upload the image (PNG/JPG, ideally around 1200×720 px, 5:3 ratio) to `assets/img/research/`. On GitHub: open the folder → **Add file → Upload files**.
2. In `data/research.js`, set `image: "assets/img/research/your-file.png"` on the project card.

Visitors can click any figure to enlarge it. Publication thumbnails go in `assets/img/pubs/` the same way.

> Only post figures you hold the rights to: your own, or figures from open-access (CC-BY) papers with credit. For subscription journals, check the publisher's reuse policy first.

### Add a news item
At the top of `window.NEWS` in `data/experience.js`:
```js
{ date: "Dec 2026", text: "Paper accepted in <em>Neurology</em>!" },
```

### Common mistakes
- Every `{ ... }` block needs a comma after it.
- Text goes inside straight double quotes `"..."`. To use a `"` inside text, write `\"`.
- If the page goes blank after an edit, there's a typo in the data file you just changed. Check the commas and quotes, or open the browser console (F12) to see the line number.

## Preview locally (optional)
Double-click `index.html`. It works straight from your computer.
