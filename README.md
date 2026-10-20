## Stack

- [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React
- [Motion](https://motion.dev/) - An animation library for React

## Available Scripts

This project uses [pnpm](https://pnpm.io/). In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.
<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
<br />

### `pnpm build`

### `pnpm start`

<br />

## Project structure

```
$PROJECT_ROOT
│   # Page files
├── pages
│   # React component files
├── components
│   # Markdown posts served at /writing/<file-name>
├── posts
│   # Static images and files
└── public
```

## Writing a post

Add a Markdown file to `posts/`. The file name becomes the URL, so `posts/my-post.md` is served at `/writing/my-post`.

```markdown
---
title: My post
date: 2026-10-19
description: One or two sentences shown on the Writing page and in link previews.
cover: /images/writing/my-post.png  # optional, file goes in public/
crossposts:                        # optional, listed as "Also published on ..."
  - name: LinkedIn
    url: https://www.linkedin.com/pulse/...
---

Post body in Markdown.
```

