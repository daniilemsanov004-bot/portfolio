import { useState } from 'react'
import { motion } from 'framer-motion'
import s from './Connect.module.css'
import { useLanguage } from '../i18n/LanguageContext'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../motion'

const channelMeta = [
    {
        key: 'Telegram',
        href: 'https://t.me/dleaR1',
        className: s.telegram,
    },
    {
        key: 'Email',
        href: 'mailto:daniiemsanov004@gmail.com',
        className: '',
    },
    {
        key: 'GitHub',
        href: 'https://github.com/daniilyemshanov',
        className: '',
    },
]

const Connect = () => {
    const { t } = useLanguage()
    const [form, setForm] = useState({
        name: '',
        contact: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(form)
    }

    return (
        <section className={s.connect} id="contact">
            <div className={s.glow} />
            <div className={s.glowSecond} />

            <div className={s.block}>
                <motion.div
                    className={s.heading}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <span className={s.label}>
                        {t.connect.label}
                    </span>

                    <h2>
                        {t.connect.titleLine1}
                        <span>{t.connect.titleLine2}</span>
                    </h2>

                    <p>
                        {t.connect.description}
                    </p>
                </motion.div>

                <motion.div
                    className={s.channels}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    {channelMeta.map((channel) => (
                        <motion.a
                            key={channel.key}
                            href={channel.href}
                            target={
                                channel.key === 'Email'
                                    ? undefined
                                    : '_blank'
                            }
                            rel={
                                channel.key === 'Email'
                                    ? undefined
                                    : 'noreferrer'
                            }
                            className={`${s.channel} ${channel.className}`}
                            variants={staggerItem}
                        >
                            <span>{t.connect.channels[channel.key]}</span>
                            <span className={s.arrow}>↗</span>
                        </motion.a>
                    ))}
                </motion.div>

                <div className={s.divider}>
                    <span />
                </div>

                <motion.div
                    className={s.formWrapper}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <div className={s.formGlow} />

                    <div className={s.formInfo}>
                        <span className={s.formNumber}>
                            {t.connect.formNumber}
                        </span>

                        <h3>
                            {t.connect.formTitleLine1}
                            <br />
                            <span>{t.connect.formTitleLine2}</span>
                        </h3>

                        <p>
                            {t.connect.formDescription}
                        </p>

                        <div className={s.available}>
                            <span className={s.status} />
                            <span>{t.connect.available}</span>
                        </div>
                    </div>

                    <form
                        className={s.form}
                        onSubmit={handleSubmit}
                    >
                        <div className={s.inputGroup}>
                            <label htmlFor="name">
                                {t.connect.labelName}
                            </label>

                            <div className={s.inputWrapper}>
                                <span className={s.inputNumber}>
                                    01
                                </span>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder={t.connect.placeholderName}
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={s.inputGroup}>
                            <label htmlFor="contact">
                                {t.connect.labelContact}
                            </label>

                            <div className={s.inputWrapper}>
                                <span className={s.inputNumber}>
                                    02
                                </span>

                                <input
                                    id="contact"
                                    name="contact"
                                    type="text"
                                    placeholder={t.connect.placeholderContact}
                                    value={form.contact}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={s.inputGroup}>
                            <label htmlFor="message">
                                {t.connect.labelMessage}
                            </label>

                            <div className={s.inputWrapper}>
                                <span className={s.inputNumber}>
                                    03
                                </span>

                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={t.connect.placeholderMessage}
                                    rows="5"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={s.submit}
                        >
                            <span>{t.connect.submit}</span>

                            <span className={s.submitArrow}>
                                ↗
                            </span>
                        </button>
                    </form>
                </motion.div>

                <div className={s.bottom}>
                    <span>© {new Date().getFullYear()} Daniil</span>

                    <span>{t.connect.builtWith}</span>
                </div>
            </div>
        </section>
    )
}

export default Connect
