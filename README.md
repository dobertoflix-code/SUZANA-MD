# SUZANA MD — Pairing Web Page

Static page for people to pair their WhatsApp number to SUZANA MD **without Telegram**.

## Deploy to Vercel

1. Push this folder to a GitHub repo (or drag-and-drop the folder into vercel.com/new).
2. No build step needed — it's a single static `index.html`.
3. Deploy.

## Required setup — before it will work

This page calls an API that lives on your **Pterodactyl server** (the same one
running SUZANA MD). You must:

1. In Pterodactyl, open **Network** (or **Allocations**) for this server and
   make sure a port is allocated and mapped to `API_PORT` in `.env`
   (default `3000`). Ask your host/panel admin if you're not sure how to expose it publicly, since this varies per Pterodactyl node (some require a reverse proxy / subdomain, like the `muzansigma.site` domain already used for the console).
2. Once you know the public URL where the API answers (e.g.
   `https://api.yourdomain.com` or `https://yourdomain.com:3000`), open
   `index.html` in this folder and edit this one line near the bottom:

   ```js
   const API_BASE_URL = "https://REPLACE_WITH_YOUR_API_DOMAIN";
   ```

3. Redeploy on Vercel (or just push the change — Vercel redeploys automatically).

## Test the API directly first

Before wiring up the frontend, confirm the API itself responds:

```bash
curl https://YOUR_API_DOMAIN/api/health
# → {"ok":true,"bot":"SUZANA MD"}

curl -X POST https://YOUR_API_DOMAIN/api/pair \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber":"50968570352"}'
# → {"ok":true,"code":"ABCD-1234","phoneNumber":"50968570352","validForMinutes":2}
```

If `curl` times out or is refused, the port isn't reachable publicly yet — that's
a Pterodactyl network/allocation issue, not a code issue.
