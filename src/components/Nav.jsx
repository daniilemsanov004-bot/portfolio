import { useEffect, useRef, useState } from 'react'
import s from './Nav.module.css'
import { useLanguage } from '../i18n/LanguageContext'

const HIDE_AFTER = 80 // px scrolled before hiding is allowed
const SCROLL_DELTA = 5 // px of movement needed to trigger a change

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
    const { lang, setLang, t } = useLanguage()

    const closeMenu = () => setMenuOpen(false)

    useEffect(() => {
        // Never hide the nav while the mobile menu is open.
        if (menuOpen) {
            setHidden(false)
            return
        }

        const handleScroll = () => {
            const currentY = window.scrollY
            const diff = currentY - lastScrollY.current

            if (currentY < HIDE_AFTER) {
                setHidden(false)
            } else if (diff > SCROLL_DELTA) {
                setHidden(true) // scrolling down
            } else if (diff < -SCROLL_DELTA) {
                setHidden(false) // scrolling up
            }

            lastScrollY.current = currentY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [menuOpen])

    const LangSwitch = ({ className }) => (
        <div className={className}>
            <button
                type="button"
                className={s.btn}
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
            >
                EN
            </button>
            <span>/</span>
            <button
                type="button"
                className={s.btn}
                aria-pressed={lang === 'ru'}
                onClick={() => setLang('ru')}
            >
                RU
            </button>
        </div>
    )

    return (
        <nav className={`${s.Navbar} ${hidden ? s.hidden : ''}`}>
            <header className={s.nav}>

                <a href="#home" className={s.logo} onClick={closeMenu}>
                    <img
                        src="/ChatGPT Image 28 авг. 2026 г., 18_25_57.png"
                        alt="Daniil"
                    />
                </a>

                <div className={`${s.links} ${menuOpen ? s.open : ''}`}>
                    <a href="#home" className={s.link} onClick={closeMenu}>
                        {t.nav.home}
                    </a>

                    <a href="#projects" className={s.link} onClick={closeMenu}>
                        {t.nav.projects}
                    </a>

                    <a href="#services" className={s.link} onClick={closeMenu}>
                        {t.nav.services}
                    </a>

                    <a href="#about" className={s.link} onClick={closeMenu}>
                        {t.nav.about}
                    </a>

                    <a href="#contact" className={s.link} onClick={closeMenu}>
                        {t.nav.contact}
                    </a>

                    <div className={s.mobileActions}>
                        <LangSwitch className={s.btns} />

                        <a
                            className={s.talkButton}
                            href="#contact"
                            onClick={closeMenu}
                        >
                            {t.nav.talk} <span>→</span>
                        </a>
                    </div>
                </div>

                <LangSwitch className={s.btns} />

                <a className={s.talkButton} href="#contact">
                    {t.nav.talk} <span>→</span>
                </a>

                <button
                    className={`${s.burger} ${menuOpen ? s.active : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                </button>

            </header>

            {menuOpen && (
                <div
                    className={s.overlay}
                    onClick={closeMenu}
                />
            )}
        </nav>
    )
}

export default Nav
