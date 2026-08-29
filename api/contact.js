// Vercel Serverless Function: POST /api/contact
//
// Receives the contact form submission and forwards it to a Telegram chat
// via the Bot API. The bot token and chat id are read from server-side
// environment variables — they are never sent to the browser, unlike a
// VITE_-prefixed variable would be.
//
// Required environment variables (set in Vercel → Project → Settings →
// Environment Variables, or in a local .env file for `vercel dev`):
//   TELEGRAM_BOT_TOKEN  – token from @BotFather
//   TELEGRAM_CHAT_ID    – the chat/user id the bot should message

const MAX_FIELD_LENGTH = 2000

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return res.status(405).json({ ok: false, error: 'Method not allowed' })
    }

    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars')
        return res.status(500).json({ ok: false, error: 'Server is not configured yet' })
    }

    let body = req.body

    // On some runtimes req.body arrives as a raw string.
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body)
        } catch {
            return res.status(400).json({ ok: false, error: 'Invalid JSON' })
        }
    }

    const { name, contact, message, website } = body || {}

    // Honeypot: a real visitor never fills this hidden field in.
    if (website) {
        return res.status(200).json({ ok: true })
    }

    if (!name || !contact || !message) {
        return res.status(400).json({ ok: false, error: 'Missing required fields' })
    }

    if (
        String(name).length > MAX_FIELD_LENGTH ||
        String(contact).length > MAX_FIELD_LENGTH ||
        String(message).length > MAX_FIELD_LENGTH
    ) {
        return res.status(400).json({ ok: false, error: 'Field too long' })
    }

    const submittedAt = new Date().toLocaleString('ru-RU', {
        timeZone: 'Asia/Tashkent',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })

    const text = [
        '📬 <b>Новая заявка с сайта</b>',
        '',
        `👤 <b>Имя:</b> ${escapeHtml(name)}`,
        `📞 <b>Контакт:</b> ${escapeHtml(contact)}`,
        `🕒 <b>Время:</b> ${submittedAt}`,
        '',
        '💬 <b>Сообщение:</b>',
        `<blockquote>${escapeHtml(message)}</blockquote>`,
    ].join('\n')

    try {
        const telegramRes = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: 'HTML',
                }),
            }
        )

        const data = await telegramRes.json()

        if (!telegramRes.ok || !data.ok) {
            console.error('Telegram API error:', data)
            return res.status(502).json({ ok: false, error: 'Failed to deliver message' })
        }

        return res.status(200).json({ ok: true })
    } catch (err) {
        console.error('Failed to reach Telegram:', err)
        return res.status(502).json({ ok: false, error: 'Failed to deliver message' })
    }
}
