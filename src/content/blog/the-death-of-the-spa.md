---
title: "The Death of the SPA (For Content)"
description: "Why Single Page Applications are the wrong choice for content-driven websites and what we use instead."
pubDate: 2024-03-22T14:15:00Z
author: "Alan Turing"
tags: ["Architecture", "Web Development", "Opinion"]
draft: false
---

## The SPA Hangover

The mid-2010s saw the meteoric rise of the Single Page Application (SPA). Frameworks like React, Angular, and Vue promised a native-app-like experience on the web. And for a while, it seemed like SPAs were the solution to everything.

We built *everything* as an SPA. Marketing sites, blogs, portfolios.

But then the cracks started to show.

### The SEO Problem
Search engines struggled to index JavaScript-heavy sites. We invented complex Server-Side Rendering (SSR) solutions just to give crawlers the HTML they needed. We added layers of complexity (Next.js, Nuxt) to solve problems created by our initial choice of architecture.

### The Performance Problem
Initial load times suffered. Users stared at blank white screens while megabytes of JavaScript bundles were downloaded and parsed. We invented code-splitting and lazy-loading, again, solving problems we created.

### The Complexity Problem
State management for a static blog? Client-side routing just to show a different Markdown file? The cognitive load required to build a simple website skyrocketed.

## The Pendulum Swings Back

At CodingCup Labs, we've realized that the SPA is a powerful tool, but it is not a golden hammer.

**If your site is primarily content-driven, an SPA is the wrong choice.**

### The Multi-Page Application (MPA) Revival

We are returning to the Multi-Page Application (MPA) model, powered by modern tools like Astro and static site generators.

- **HTML First:** The browser gets fully formed HTML immediately. Time to First Byte (TTFB) and First Contentful Paint (FCP) are drastically improved.
- **Simpler Mental Model:** Each page is just a page. Routing is handled by the server (or the static file structure), not a complex client-side router.
- **Resilience:** If JavaScript fails to load (which happens more often than developers like to admit), the core content of the site is still accessible.

We still build SPAs when building complex, highly interactive web applications (like an IDE in the browser, or a real-time collaborative tool). But for everything else? The MPA is back, and it's better than ever.
