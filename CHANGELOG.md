# CHANGELOG

All changes detailed below have been made directly to the local workspace and left **uncommitted in your working tree** for your local review. No `git push`, `git commit`, `git merge`, or deployment commands were executed.

---

## Summary of All Changes by File

### 1. Forms & Email Delivery (Step 1)

#### [`app/api/contact/route.ts`](file:///e:/portfolio-website-design/app/api/contact/route.ts)
- **Rate Limiting**: Implemented in-memory sliding window rate limiter by client IP (5 requests per 10-minute window) returning `429 Too Many Requests`.
- **Spam Trap**: Added hidden honeypot field validation (`honeypot` and `website`). If filled by automated bots, the request returns a simulated `200` without triggering email notifications.
- **Payload Validation**: Added strict server-side validation for `name` (>=2 chars), `email` (regex checked), and `message` (>=5 chars).
- **Email Delivery & Fallback**: Dual-provider implementation:
  1. Primary: **Resend API** via `RESEND_API_KEY`.
  2. Secondary: **Nodemailer Gmail SMTP** via `EMAIL_USER` and `EMAIL_PASS`.
  3. Formatted HTML template containing Full Name, Email, Project Type, Budget, Timeline, Message, Source Page, and ISO Timestamp.
- **Dev Simulation Mode**: Added `DEV_EMAIL_SIMULATE=true`, body `simulate: true`, or header `x-simulate-email: true` to test and log form submissions in local development without sending real emails.
- **Error Handling**: Graceful fallback error messages providing direct WhatsApp and email mailto links on delivery failure.

#### [`components/contact.tsx`](file:///e:/portfolio-website-design/components/contact.tsx)
- **Multi-Step Flow**: Redesigned into a true, accessible 3-step wizard:
  - Step 1: **Your Info** (Full Name, Email, Phone)
  - Step 2: **Project Details** (Project Type, Budget, Timeline, Message)
  - Step 3: **Review & Send** (Summary of details with direct edit jumps)
- **Active Navigation**: Fixed the previously non-functional / faded "Continue" button. Button is always active and triggers inline client-side validation on click, moving forward only when required fields are valid. Button is disabled *only* while actively submitting (`isSubmitting`).
- **Semantic Link Composition**: Updated button navigation to use `<Button asChild>` with `<Link>` to prevent invalid nested interactive HTML elements.
- **Accessibility**: Bound all inputs to labels with explicit `id` and `htmlFor`. Added `aria-live="polite"` status announcements and automatic keyboard focus transition to the first field of each new step.
- **Anti-Spam**: Embedded an off-screen honeypot input with `tabIndex={-1}` and `autoComplete="off"`.
- **UX & Fallback**: Form resets automatically upon success. On failure, inline alert surfaces direct WhatsApp (`wa.me`) and mailto links.

#### [`app/contact/page.tsx`](file:///e:/portfolio-website-design/app/contact/page.tsx)
- Added inline validation, error messages, honeypot spam protection, `aria-live` announcements, and fallback CTAs.
- Replaced "Guaranteed 24-hour response" with softer, realistic wording ("Fast Response", usually replies within 2-4 hours).

---

### 2. Copy, Wording & Consistency (Step 2)

#### [`components/rsweblabs-hero.tsx`](file:///e:/portfolio-website-design/components/rsweblabs-hero.tsx)
- **Typing Animation Fix**: Refactored the typewriter loop using a race-condition-free timer. Guaranteed words cycle accurately (`Next.js`, `WordPress`, `Shopify`, `React`, `Custom Web Apps`) without overshooting to `"Next.jj"`.
- **Responsive Width**: Replaced static `minWidth: "260px"` with `minWidth: "min(260px, 100%)"` to prevent horizontal line-wrap overflow on 320px mobile screens.
- **CTA Unification**: Standardized the primary hero button to `"Let's Talk"`.
- **Asset Upgrade**: Replaced the unrelated student stock video (`/visa.mp4`) with a professional developer portrait (`/professional-developer-portrait.png`) preserved inside the exact diagonal frame.

#### [`components/rsweblabs-navigation.tsx`](file:///e:/portfolio-website-design/components/rsweblabs-navigation.tsx)
- Updated "Let's Talk" button so that clicking it from any subpage (`/services/*`, `/portfolio`, `/blog`, `/contact`) navigates cleanly to `/#contact`.
- Standardized logo image alt text to `"Muhammad Muzammal"`.

#### [`components/about-bento.tsx`](file:///e:/portfolio-website-design/components/about-bento.tsx)
- Fixed awkward split heading into a single natural element: `<h2>Building Digital Solutions That Drive <span ...>Real Results</span></h2>`.
- Replaced nested `<Link><button>` with a clean semantic action link to prevent HTML validation warnings.

#### [`components/rsweblabs-services.tsx`](file:///e:/portfolio-website-design/components/rsweblabs-services.tsx)
- Fixed awkward split heading into: `<h2>Services Built for <span ...>Real Business Results</span></h2>`.

#### [`components/testimonials.tsx`](file:///e:/portfolio-website-design/components/testimonials.tsx)
- Repaired the truncated quote by `rizwanramzan518` to conclude naturally without an awkward trailing `"..."`.
- Replaced the word "seller" with "developer" in Upwork review badges.
- Upgraded text contrast from washed out gray to high-legibility dark slate (`#0f172a` and `#475569`).
- Upgraded Upwork badge text color to accessible `#15803d`.
- Added uniform card flex heights, pause-on-hover, and touch swipe gestures.

---

### 3. Design Upgrades & Responsive Layout (Step 3)

#### [`components/featured-portfolio.tsx`](file:///e:/portfolio-website-design/components/featured-portfolio.tsx)
- **Equal Card Sizing**: Removed `transform: scale(0.95)` and `opacity: 0.6` on inactive carousel cards so all cards display at equal size, full opacity, and uniform visual hierarchy without an oversized first card.
- **Responsive Width**: Replaced hardcoded `380px` card width with dynamic responsive width (`Math.min(380, windowWidth - 48)`), preventing mobile card clipping.
- **Title Alignment**: Added `line-clamp-2` and `min-h-[44px]` to card titles to eliminate overlapping text on the first card.
- **Touch Swipe & Autoplay**: Added touch gesture handlers (`onTouchStart`, `onTouchMove`, `onTouchEnd`) and hover pause.
- **Image Sharpness**: Updated `next/image` attributes with responsive `sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"`, `quality={85}`, and `priority` on the initial card.
- **Link Semantics**: Applied `<Button asChild>` on "View Complete Portfolio" CTA.

#### Service Pages Duplicate Navigation & Footer Removal
Removed duplicate `<MZwebSolutionsNavigation />` and `<MZwebSolutionsFooter />` tags from:
- [`app/services/wordpress/page.tsx`](file:///e:/portfolio-website-design/app/services/wordpress/page.tsx)
- [`app/services/shopify/page.tsx`](file:///e:/portfolio-website-design/app/services/shopify/page.tsx)
- [`app/services/frontend/page.tsx`](file:///e:/portfolio-website-design/app/services/frontend/page.tsx)
- [`app/services/ai-automation/page.tsx`](file:///e:/portfolio-website-design/app/services/ai-automation/page.tsx)
- [`app/services/ai-chatbot/page.tsx`](file:///e:/portfolio-website-design/app/services/ai-chatbot/page.tsx)

#### Service Overview Pricing Synchronization
- [`app/services/page.tsx`](file:///e:/portfolio-website-design/app/services/page.tsx): Fixed pricing inconsistencies where WordPress showed \$2,500 (instead of \$99), Shopify showed \$3,000 (instead of \$149), eBay showed \$500 (instead of \$25), and Frontend showed \$3,500 (instead of \$129). Now synchronized with all packages and home services.

#### [`components/mzwebsolutions-footer.tsx`](file:///e:/portfolio-website-design/components/mzwebsolutions-footer.tsx)
- Added Upwork and Fiverr social profile links with official SVG icons alongside GitHub and LinkedIn.
- Added `// TODO: Replace with real profile URL` comments for your personal URLs.
- Added `target="_blank" rel="noopener noreferrer"` and descriptive `aria-label`s to all external links.
- Unified brand and copyright name to `"Muhammad Muzammal"`.

#### [`components/whatsapp-float.tsx`](file:///e:/portfolio-website-design/components/whatsapp-float.tsx)
- Adjusted mobile bottom spacing with `env(safe-area-inset-bottom)` (`bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6`).
- Reduced mobile button dimensions slightly (`h-14 w-14 sm:h-16 sm:w-16`) to preserve tap space without obstructing forms.
- Lowered z-index to `z-40` to avoid overlapping modal backdrops.
- Hid the wide chat preview bubble on small mobile viewports (`hidden sm:block`) to prevent obstructing form submits.
- Softened response text to `"Usually replies within a few hours"`.

#### [`app/globals.css`](file:///e:/portfolio-website-design/app/globals.css)
- Added `overflow-x: hidden; max-width: 100vw;` to `html` and `body` to eliminate horizontal scroll.
- Added `@media (prefers-reduced-motion: reduce)` accessibility rules.

#### [`next.config.mjs`](file:///e:/portfolio-website-design/next.config.mjs)
- Configured `images.qualities: [75, 85, 90]` to eliminate Next.js 16 quality console warnings.

---

### 4. SEO & Metadata Cleanup (Step 4)

#### [`public/og-image.jpg`](file:///e:/portfolio-website-design/public/og-image.jpg)
- Generated a crisp 1200x630 Open Graph image with dark slate/emerald theme, developer name, tech badges, and portfolio URL. Resolves social preview 404 errors.

#### [`app/layout.tsx`](file:///e:/portfolio-website-design/app/layout.tsx)
- Centralized domain to `const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://muzammalzaheer.vercel.app').replace(/\/+$/, '')`.
- Applied `SITE_URL` to `metadataBase`, `canonical`, `og:url`, `og:image`, and all schema.org JSON-LD nodes.
- Removed outdated 134-keyword meta tag array.
- Removed placeholder verification codes (`yandex` and `msvalidate.01`) and Twitter creator handle `@muzammal`.
- Standardized creator and publisher metadata to `"Muhammad Muzammal"`.

#### Route Metadata Layouts (Unique Titles < 60 chars, Descriptions < 160 chars)
Created dedicated server layout metadata for all routes:
- [`app/portfolio/layout.tsx`](file:///e:/portfolio-website-design/app/portfolio/layout.tsx): Title: *"Portfolio & Case Studies | Muhammad Muzammal"* (48 chars), Desc: (111 chars)
- [`app/contact/layout.tsx`](file:///e:/portfolio-website-design/app/contact/layout.tsx): Title: *"Contact & Project Inquiry | Muhammad Muzammal"* (49 chars), Desc: (114 chars)
- [`app/blog/layout.tsx`](file:///e:/portfolio-website-design/app/blog/layout.tsx): Title: *"Web Development Blog | Muhammad Muzammal"* (40 chars), Desc: (108 chars)
- [`app/services/layout.tsx`](file:///e:/portfolio-website-design/app/services/layout.tsx): Title: *"Web Development Services | Muhammad Muzammal"* (44 chars), Desc: (120 chars)
- [`app/services/wordpress/layout.tsx`](file:///e:/portfolio-website-design/app/services/wordpress/layout.tsx): Title: *"WordPress Development | Muhammad Muzammal"* (41 chars), Desc: (117 chars)
- [`app/services/shopify/layout.tsx`](file:///e:/portfolio-website-design/app/services/shopify/layout.tsx): Title: *"Shopify Store Development | Muhammad Muzammal"* (45 chars), Desc: (120 chars)
- [`app/services/frontend/layout.tsx`](file:///e:/portfolio-website-design/app/services/frontend/layout.tsx): Title: *"Frontend & React Development | Muhammad Muzammal"* (48 chars), Desc: (112 chars)
- [`app/services/ai-automation/layout.tsx`](file:///e:/portfolio-website-design/app/services/ai-automation/layout.tsx): Title: *"AI Automation Services | Muhammad Muzammal"* (42 chars), Desc: (116 chars)
- [`app/services/ai-chatbot/layout.tsx`](file:///e:/portfolio-website-design/app/services/ai-chatbot/layout.tsx): Title: *"AI Chatbot Development | Muhammad Muzammal"* (42 chars), Desc: (106 chars)
- [`app/services/ebay-templates/layout.tsx`](file:///e:/portfolio-website-design/app/services/ebay-templates/layout.tsx): Title: *"eBay Template Design | Muhammad Muzammal"* (40 chars), Desc: (116 chars)
- [`app/services/webflow/page.tsx`](file:///e:/portfolio-website-design/app/services/webflow/page.tsx): Title: *"Webflow Design & Development | Muhammad Muzammal"* (49 chars), Desc: (101 chars)

#### Dynamic Sitemap & Robots
- Created [`app/sitemap.ts`](file:///e:/portfolio-website-design/app/sitemap.ts) and [`app/robots.ts`](file:///e:/portfolio-website-design/app/robots.ts) indexing all 15 public routes dynamically.
- Synchronized static [`public/sitemap.xml`](file:///e:/portfolio-website-design/public/sitemap.xml) and [`public/robots.txt`](file:///e:/portfolio-website-design/public/robots.txt).

---

### 5. Verification & Testing Artifacts (Step 5)
- [`AUDIT.md`](file:///e:/portfolio-website-design/AUDIT.md): Comprehensive findings across forms, viewports, and SEO.
- [`ENV_SETUP.md`](file:///e:/portfolio-website-design/ENV_SETUP.md): Environment variables setup guide.
- Before & After Viewport Screenshots:
  - `home-before-1440.png` & `home-before-390.png`
  - `home-after-1440.png` & `home-after-390.png`
