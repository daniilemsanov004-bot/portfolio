import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Award, Calendar, X, ZoomIn } from 'lucide-react'

import s from './Certificates.module.css'
import { useLanguage } from '../i18n/LanguageContext'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../motion'

const certificateMeta = [
    {
        key: 'cefr',
        image: '/images/certificates/cefr-b1-english.png',
        alt: 'CEFR B1 English Proficiency Certificate',
    },
    {
        key: 'itAcademy',
        image: '/images/certificates/it-academy-frontend.png',
        alt: 'IT-Academy Front-end Development Certificate',
    },
]

const Certificates = () => {
    const { t } = useLanguage()
    const [active, setActive] = useState(null)

    // Close on Escape + lock page scroll while the lightbox is open.
    useEffect(() => {
        if (!active) return

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setActive(null)
        }

        document.addEventListener('keydown', handleKeyDown)
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = previousOverflow
        }
    }, [active])

    return (
        <section className={s.certificates} id="certificates">
            <div className={s.block}>
                <motion.div
                    className={s.heading}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <span className={s.label}>
                        <Award size={13} />
                        {t.certificates.label}
                    </span>

                    <h2>{t.certificates.title}</h2>

                    <p>{t.certificates.description}</p>
                </motion.div>

                <motion.div
                    className={s.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    {certificateMeta.map((cert) => {
                        const info = t.certificates.items[cert.key]

                        return (
                            <motion.article className={s.card} key={cert.key} variants={staggerItem}>
                                <button
                                    type="button"
                                    className={s.preview}
                                    onClick={() => setActive({ ...cert, info })}
                                    aria-label={`${t.certificates.viewFull} — ${info.title}`}
                                >
                                    <img src={cert.image} alt={cert.alt} loading="lazy" />

                                    <span className={s.zoomHint}>
                                        <ZoomIn size={15} />
                                        {t.certificates.viewFull}
                                    </span>
                                </button>

                                <div className={s.content}>
                                    <h3>{info.title}</h3>

                                    <p className={s.issuer}>{info.issuer}</p>

                                    <div className={s.meta}>
                                        <span>
                                            <Calendar size={12} />
                                            {info.date}
                                        </span>
                                    </div>

                                    <p className={s.detail}>{info.meta}</p>
                                </div>
                            </motion.article>
                        )
                    })}
                </motion.div>
            </div>

            <AnimatePresence>
                {active && (
                    <motion.div
                        className={s.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        onClick={() => setActive(null)}
                    >
                        <motion.div
                            className={s.modal}
                            initial={{ opacity: 0, scale: 0.94, y: 18 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 10 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                className={s.close}
                                onClick={() => setActive(null)}
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>

                            <div className={s.modalImage}>
                                <img src={active.image} alt={active.alt} />
                            </div>

                            <div className={s.modalInfo}>
                                <h3>{active.info.title}</h3>
                                <p>
                                    {active.info.issuer}
                                    <span className={s.dot}>·</span>
                                    {active.info.date}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Certificates
