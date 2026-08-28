# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Contact form → Telegram bot

The contact form in the "Get in touch" section submits to a serverless
function at `api/contact.js`, which forwards the message to a Telegram chat
via the Bot API. The bot token never touches the browser.

### Setup

1. Create a bot with [@BotFather](https://t.me/BotFather) and copy the token
   it gives you.
2. Send your bot any message, then open
   `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates` in your browser and
   read the `"chat":{"id": ...}` value — that's your `TELEGRAM_CHAT_ID`.
3. Copy `.env.example` to `.env` and fill in both values:
   ```
   TELEGRAM_BOT_TOKEN=123456:ABC-your-token
   TELEGRAM_CHAT_ID=123456789
   ```
4. Run locally with the Vercel CLI so the `/api` function works in dev too:
   ```
   npm i -g vercel
   vercel dev
   ```
   (Plain `npm run dev` only serves the frontend — the `/api/contact`
   endpoint needs Vercel's dev server or an equivalent to run.)
5. When deploying on Vercel, add the same two variables under
   **Project → Settings → Environment Variables** instead of committing
   `.env` (it's already git-ignored).

The form also has a hidden honeypot field to filter out basic spam bots.

