# Environment Variables Setup Guide (ENV_SETUP.md)

This document lists all environment variables used by the portfolio website.

> **IMPORTANT**: Never commit secrets or your `.env.local` file to git. Only variable names and instructions are documented here.

---

## 1. Site Domain & Metadata
| Variable Name | Required | Default / Fallback | Description |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | `https://muzammalzaheer.vercel.app` | The base URL of the deployed website. Used for canonical URLs, Open Graph tags, Twitter share cards, robots.txt, and sitemap.xml. Change this once you connect a custom domain (e.g. `https://muzammal.dev`). |

**Local (.env.local)**:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Vercel Production**:
```env
NEXT_PUBLIC_SITE_URL=https://muzammalzaheer.vercel.app
```

---

## 2. Contact Forms & Email Delivery
The contact forms (`components/contact.tsx` and `app/contact/page.tsx`) submit to `/api/contact`. The backend supports **two email providers** (Resend or Gmail Nodemailer) plus a **Local Development Simulation mode**.

### Option A: Local Dev Simulation (Zero Setup)
Test all form validation, UX, rate limiting, and response handling locally without configuring any email accounts:
```env
DEV_EMAIL_SIMULATE=true
```
When `DEV_EMAIL_SIMULATE=true` (or when no email credentials are set during development), the API route:
- Validates the form data and honeypot field.
- Pretty-prints the complete formatted inquiry to your server terminal.
- Returns a successful JSON response (`200 OK`) so you can test success alerts, form resets, and transitions.

---

### Option B: Resend (Recommended for Vercel)
Resend uses HTTP API calls which never suffer from serverless SMTP connection timeouts or Google account security blocks.

| Variable Name | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key (starts with `re_`) from [resend.com/api-keys](https://resend.com/api-keys). |
| `CONTACT_TO_EMAIL` | The email address where you want to receive inquiries (e.g., `muzammalzaheer571@gmail.com`). |
| `CONTACT_FROM_EMAIL` | Optional sender email. If using the free tier without a custom domain, you can use `onboarding@resend.dev`. With a custom domain, use `Portfolio <contact@yourdomain.com>`. |

---

### Option C: Gmail SMTP (Nodemailer)
If you prefer receiving emails directly via your Gmail account:

| Variable Name | Description |
|---|---|
| `EMAIL_USER` | Your full Gmail address (e.g., `muzammalzaheer571@gmail.com`). |
| `EMAIL_PASS` | Your 16-character Google **App Password**. *(Do NOT use your regular Gmail login password. Generate it from Google Account > Security > 2-Step Verification > App Passwords).* |
| `CONTACT_TO_EMAIL` | Optional destination address (defaults to `EMAIL_USER` if omitted). |

---

## 3. Optional Services
| Variable Name | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | Optional | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). |

---

## Summary: Quick Copy for `.env.local`
For local development and testing, you can paste the following into your local `.env.local`:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Dev email simulation (logs email payloads directly to terminal)
DEV_EMAIL_SIMULATE=true

# Uncomment and fill when ready to test real email sending:
# RESEND_API_KEY=re_your_api_key_here
# CONTACT_TO_EMAIL=muzammalzaheer571@gmail.com
# CONTACT_FROM_EMAIL=onboarding@resend.dev

# Or for Gmail SMTP:
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-16-char-app-password
```
