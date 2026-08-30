import { motion } from 'framer-motion'
import s from './Footer.module.css'
import logo from '/public/logo.png'
import { useLanguage } from '../i18n/LanguageContext'
import { fade, viewportOnce } from '../motion'

const Footer = () => {
    const { t } = useLanguage()

    return (
        <footer className={s.footer}>
            <motion.div
                className={s.block}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={fade}
            >
                <div className={s.main}>
                    <a href="#home" className={s.brand}>
                        <img
                            src={logo}
                            alt="Daniil"
                            className={s.logo}
                        />

                        <div className={s.brandText}>
                            <span>Daniil</span>
                            <small>{t.footer.role}</small>
                        </div>
                    </a>

                    <p className={s.text}>
                        {t.footer.description}
                    </p>

                    <a
                        href="mailto:daniiemsanov004@gmail.com"
                        className={s.email}
                    >
                        daniiemsanov004@gmail.com
                    </a>
                </div>

                <div className={s.line} />

                <div className={s.bottom}>
                    <span className={s.copy}>
                        © {new Date().getFullYear()} Daniil
                    </span>

                    <nav className={s.nav}>
                        <a href="#home">{t.footer.nav.home}</a>
                        <a href="#projects">{t.footer.nav.projects}</a>
                        <a href="#services">{t.footer.nav.services}</a>
                        <a href="#about">{t.footer.nav.about}</a>
                        <a href="#contact">{t.footer.nav.contact}</a>
                    </nav>

                    <div className={s.socials}>
                        <a
                            href="https://t.me/dleaR1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t.footer.socials.Telegram}
                        </a>

                        <a href="mailto:daniiemsanov004@gmail.com">
                            {t.footer.socials.Email}
                        </a>

                        <a
                            href="https://github.com/daniilyemshanov"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t.footer.socials.GitHub}
                        </a>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer
