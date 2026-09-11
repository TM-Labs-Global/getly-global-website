# 📧 Getly — Resend Email Integration Setup Guide

> **For the Getly development and operations team.**  
> This guide outlines the setup and architecture for the contact form on the Getly global website, ensuring inquiries submitted by travelers, partners, and users are dispatched from **`info@getly.qa`** and delivered directly to our team inbox at **`info@getly.qa`** via [Resend](https://resend.com).

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Prerequisites](#prerequisites)
3. [Step 1 — Create / Access Resend Account](#step-1--create--access-resend-account)
4. [Step 2 — Verify the Getly Domain (`getly.qa`)](#step-2--verify-the-getly-domain-getlyqa)
5. [Step 3 — Generate Your API Key](#step-3--generate-your-api-key)
6. [Step 4 — Set Up an Audience (Optional Contacts Sync)](#step-4--set-up-an-audience-optional-contacts-sync)
7. [Step 5 — Configure Environment Variables](#step-5--configure-environment-variables)
8. [Step 6 — API Route & Form Implementation](#step-6--api-route--form-implementation)
9. [Step 7 — Test End-to-End](#step-7--test-end-to-end)
10. [Best Practices & Security](#best-practices--security)
11. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

When a visitor, traveler, or business partner submits an inquiry on Getly (`/contact` or `/contact-us`), the system executes a reliable multi-tier delivery process:

```
Visitor Submits Form 
       │
       ▼
Next.js API Route (/api/contact)
       │
       ├─► 1. Anti-Spam Honeypot Check (Silently drops bots)
       │
       ├─► 2. Data Preservation Layer (Appends to data/contact-submissions/submissions.log)
       │
       ├─► 3. Resend Email Dispatch
       │        ├── From: info@getly.qa (RESEND_FROM_EMAIL)
       │        ├── Delivered to: info@getly.qa (CONTACT_RECIPIENT_EMAIL)
       │        ├── Reply-To: visitor's email (Instant 1-click reply)
       │        └── Branded HTML Template (Navy #07153d & Electric Blue #0069fe)
       │
       └─► 4. Optional Audience Sync (Saves contact to Resend CRM list)
```

**Key Advantages:**
- **Zero Lead Loss**: Even if Resend encounters temporary downtime or API limits, inquiries are backed up locally in `data/contact-submissions/submissions.log`.
- **Instant 1-Click Reply**: The notification email sets `replyTo` to the sender's email, so hitting "Reply" in your email client sends directly to the customer.
- **Department Routing**: Submissions automatically tag the inquiry department: *Customer Support*, *Business & Partnerships*, *Press & Media*, or *Compliance & Legal*.

---

## Prerequisites

- [x] **Next.js 15 App Router** project configured
- [x] **Resend SDK installed** (`npm install resend`)
- [ ] Access to DNS records for **`getly.qa`** (Cloudflare, Namecheap, Route 53, Ooredoo, etc.)
- [ ] A **Resend account** registered at [resend.com](https://resend.com)

---

## Step 1 — Create / Access Resend Account

1. Visit [https://resend.com](https://resend.com) and sign in (or create an account using `info@getly.qa` or your company email).
2. Resend's free tier provides **3,000 emails/month** with 1 custom domain — ideal for handling website inquiries and customer contacts.

---

## Step 2 — Verify the Getly Domain (`getly.qa`)

Domain verification allows Getly to dispatch transactional notification emails from **`info@getly.qa`** without landing in spam filters.

### 2a. Add Domain in Resend Dashboard
1. Go to **Domains** in the Resend sidebar.
2. Click **Add Domain**.
3. Enter **`getly.qa`** (or a dedicated mail subdomain such as `send.getly.qa`).
4. Select your preferred region (e.g., **US East** or **EU West**).
5. Click **Add**.

### 2b. Add DNS Records to your DNS Provider
Resend will generate DNS records (DKIM, SPF, and MX). Add them to your DNS manager for `getly.qa`:

| Type | Name / Host | Value | Priority |
|------|-------------|-------|----------|
| `TXT` | `resend._domainkey.getly.qa` | `p=MIGfMA0GCS...` *(unique to your account)* | — |
| `MX` | `send.getly.qa` | `feedback-smtp.us-east-1.amazonses.com` | 10 |
| `TXT` | `send.getly.qa` | `v=spf1 include:amazonses.com ~all` | — |

> ⚠️ **Always copy the exact keys displayed in your Resend Dashboard.**

### 2c. Verify DNS Status
DNS propagation takes from 2 minutes up to 24 hours. Click **Verify Records** in Resend. A green checkmark ✅ indicates successful verification.

---

## Step 3 — Generate Your API Key

1. In the Resend Dashboard, navigate to **API Keys**.
2. Click **Create API Key**.
3. Name the key (e.g., `getly-contact-form-production`).
4. Set permission to **Sending access** (restricted to sending emails).
5. Click **Add** and copy the key immediately (starts with `re_...`).

> 🔐 **Security Reminder**: Never commit API keys to GitHub. Store them only in `.env.local` and your hosting provider's environment settings (Vercel, AWS, Cloudflare).

---

## Step 4 — Set Up an Audience (Optional Contacts Sync)

An **Audience** in Resend allows Getly to automatically retain submitter contact information for relationship management:

1. In Resend, navigate to **Audiences** &rarr; **Create Audience**.
2. Name it `Getly Inquiries` or `Website Contacts`.
3. Copy the generated **Audience ID** (e.g. `07f8d6b8-919e-4a66-81f7-7428579ca5b8`).

---

## Step 5 — Configure Environment Variables

Add the following environment variables to your local `.env.local` file, as well as your production hosting dashboard (e.g., Vercel Project Settings &rarr; Environment Variables):

```env
# ─────────────────────────────────────────────────────────────
# Resend Email Integration (Getly Contact Form)
# ─────────────────────────────────────────────────────────────

# Resend API Key from Step 3
RESEND_API_KEY=re_your_api_key_here

# Verified sender address on your verified getly.qa domain
RESEND_FROM_EMAIL="Getly Inquiries <info@getly.qa>"

# The internal inbox where contact submissions are received
CONTACT_RECIPIENT_EMAIL=info@getly.qa

# Optional: Resend Audience ID for automatic contact retention
RESEND_AUDIENCE_ID=your_audience_uuid_here
```

> 💡 **Graceful Fallback**: If `RESEND_API_KEY` is not defined in local development, the API route still securely preserves the submission in `data/contact-submissions/submissions.log` and returns success without throwing a 500 error.

---

## Step 6 — API Route & Form Implementation

The integration is built directly into Getly's App Router architecture:

### 1. API Route: `app/api/contact/route.ts`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "fullName": "Alex Morgan",
    "email": "alex@example.com",
    "department": "partnership",
    "subject": "Global eSIM Partnership",
    "message": "Hello, we would like to discuss a regional distribution partnership...",
    "botField": ""
  }
  ```
- **Validation**: Strict name, email regex, message length, and department allowlist.
- **Honeypot Trap**: If `botField` contains any value, the bot request is silently neutralized.
- **Branded Notification**: Dispatches an HTML email formatted with Getly's brand colors:
  - Header: `#07153d` (Deep Navy) with Getly logomark
  - Accent: `#0069fe` (Getly Electric Blue)
  - Sender: `info@getly.qa`
  - Recipient: `info@getly.qa`
  - Department Pills & 1-Click "Reply to Sender" CTA button.

### 2. Frontend Component: `features/contact/components/ContactForm.tsx`
- Connects to `/api/contact`.
- Fully integrated with `next-intl` (translated across English, Spanish, French, German, Portuguese, Chinese, Japanese, and Arabic).
- Visual feedback for submitting, receiving confirmation, and inline error alerting.

---

## Step 7 — Test End-to-End

### A. Testing via Browser UI
1. Run the local dev server: `npm run dev`
2. Navigate to `http://localhost:3000/contact` (or `http://localhost:3000/es/contact`, etc.)
3. Fill in the name, email, department, subject, and message.
4. Click **Submit Inquiry**.
5. You will see the animated **Inquiry Received!** confirmation state.
6. Verify:
   - Check `data/contact-submissions/submissions.log` in your project root to see the saved JSON record.
   - If `RESEND_API_KEY` is configured, check your inbox at `info@getly.qa`.

### B. Testing via `curl`
You can verify the backend endpoint directly from your terminal:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Dev Tester",
    "email": "test@getly.qa",
    "department": "partnership",
    "subject": "Integration Test",
    "message": "Testing the Resend contact endpoint on Getly website."
  }'
```

**Expected JSON Response:**
```json
{
  "success": true,
  "message": "Your inquiry has been submitted successfully."
}
```

---

## Best Practices & Security

1. **Keep Secrets Server-Side**: `RESEND_API_KEY` is only used in server code (`app/api/contact/route.ts`). Never prefix it with `NEXT_PUBLIC_`.
2. **Local Backup Safety**: `data/contact-submissions/` is local file logging. Ensure your `.gitignore` includes `/data/` so inquiries are kept private.
3. **Spam & Abuse Resistance**:
   - The form includes a hidden honeypot field (`botField`) which automated scrapers fill in, triggering an immediate silent drop.
   - Server-side email validation stops malformed inputs.
4. **Deliverability Optimization**:
   - Every email includes both rich responsive HTML and an RFC-compliant plain text version.
   - Setting `replyTo` prevents "on behalf of" spoofing issues while allowing direct replies.

---

## Troubleshooting

| Symptom | Probable Cause | Resolution |
|---------|----------------|------------|
| **Email not arriving in inbox** | In spam folder or domain unverified | Check Spam folder in `info@getly.qa`. Ensure DNS records for `getly.qa` in Resend show green ✅ checks. |
| **API returns 400 Bad Request** | Missing fields or invalid email | Ensure `fullName` (min 2 chars), valid `email`, and `message` (min 5 chars) are sent. |
| **"Domain not verified" in Resend** | DNS propagation delay | Wait 15–30 minutes for DNS propagation. If using Cloudflare, turn proxy OFF (DNS-only) for TXT records. |
| **Submission succeeds locally but no email** | `RESEND_API_KEY` not in `.env.local` | Add `RESEND_API_KEY` to `.env.local` and restart the Next.js development server (`npm run dev`). |
| **Contact not appearing in Audience** | Contact already exists or invalid Audience ID | Resend skips duplicates silently; verify `RESEND_AUDIENCE_ID` matches the UUID in Resend &rarr; Audiences. |

---

*Document maintained by Getly Web Engineering &bull; Last updated: September 2026*
