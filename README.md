# Nana's Mama

Multi-page storefront for Nana's Mama, set up as a Vite project for easier development and future growth.

## Hostinger Deployment Note

This repository is the Hostinger-ready version of the Nana's Mama site.

### Deployment Steps

1. Install dependencies if needed:

```bash
npm install
```

2. Build the production files:

```bash
npm run build
```

3. Open Hostinger hPanel and go to the domain's File Manager.

4. Open the domain's `public_html` folder.

5. Remove any old placeholder files from `public_html`, especially Hostinger's
   default `index.html`.

6. Upload the contents of this project's `dist/` folder into `public_html`.
   Upload the contents only, not the `dist` folder itself.

7. Confirm these files exist directly inside `public_html`:

```text
index.html
products.html
contact.html
assets/
sitemap.xml
robots.txt
```

8. In Hostinger, make sure the domain points to the Hostinger hosting account.
   If the domain uses Hostinger nameservers, this is usually handled in hPanel.

9. Enable SSL for the domain in Hostinger so the site loads with `https://`.

10. Test the live site:

```text
https://nanasmama.com/
https://nanasmama.com/products.html
https://nanasmama.com/contact.html
https://nanasmama.com/sitemap.xml
```

The contact form is a special case. Hostinger serves the static website, but
the contact form still sends email through the existing Firebase Cloud Function:

```text
https://us-central1-nanaamama.cloudfunctions.net/sendNanasMamaEmail
```

This keeps the email feature working without needing a Hostinger backend. For
the form to work in production, the Firebase Function must stay deployed and
its `RESEND_API_KEY` secret must remain configured in Firebase.

Verification status:

- The site builds successfully with `npm run build`.
- The Firebase Function URL is reachable.
- A browser-style GET request returns `405 Method not allowed`, which is
  expected because the form sends a POST request.
- A full live email test has not yet been completed. To fully confirm delivery,
  submit the contact form after deployment or send a real test POST request.

### Contact Form Verification Steps

1. Deploy or confirm the Firebase Function is still deployed:

```bash
firebase deploy --only functions
```

2. Confirm the Firebase Function still has the `RESEND_API_KEY` secret
   configured.

3. After uploading the Hostinger build, open:

```text
https://nanasmama.com/contact.html
```

4. Submit a small test message through the contact form.

5. Confirm the email arrives at:

```text
nanasmamashea@gmail.com
```

6. If the form fails, check the browser console and Firebase Function logs:

```bash
firebase functions:log
```

## Site Management

Shared page metadata lives in `src/site-pages.js`. Use that file when adding, removing, renaming, or changing SEO details for a page.

The same registry powers:

- Vite multi-page build inputs
- canonical, Open Graph, Twitter, and robots meta tags
- production image loading hints
- sitemap generation

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Regenerate the sitemap after route or SEO changes:

```bash
npm run manage:sitemap
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```
