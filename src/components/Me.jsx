import { motion } from 'framer-motion'
import s from './Me.module.css'
import { useLanguage } from '../i18n/LanguageContext'
import { fadeUp, fadeUpSoft, viewportOnce } from '../motion'

const fieldOrder = ['name', 'role', 'stack', 'database', 'focus', 'status']

const Me = () => {
    const { t } = useLanguage()

    return (
        <section className={s.me} id="about">
            <div className={s.block}>
                <motion.div
                    className={s.content}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <span className={s.label}>{t.me.label}</span>

                    <h1>
                        {t.me.name}
                        <span>{t.me.role}</span>
                    </h1>

                    <p>
                        {t.me.description}
                    </p>

                    <div className={s.buttons}>
                        <a href="#projects" className={s.primary}>
                            {t.me.viewWork}
                            <span>↗</span>
                        </a>

                        <a href="#contact" className={s.secondary}>
                            {t.me.contactMe}
                        </a>
                    </div>

                    <div className={s.stack}>
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>Supabase</span>
                    </div>
                </motion.div>

                <motion.div
                    className={s.visual}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUpSoft}
                >
                    <div className={s.window}>
                        <div className={s.windowHeader}>
                            <div className={s.dots}>
                                <span />
                                <span />
                                <span />
                            </div>

                            <span className={s.fileName}>
                                {t.me.fileName}
                            </span>

                            <span className={s.windowNumber}>
                                01
                            </span>
                        </div>

                        <div className={s.code}>
                            <div className={s.bracket}>{'{'}</div>

                            {fieldOrder.map((key, index) => (
                                <div className={s.codeRow} key={key}>
                                    <span className={s.key}>
                                        "{t.me.fields[key]}"
                                    </span>

                                    <span className={s.colon}>:</span>

                                    <span className={s.value}>
                                        "{t.me.values[key]}"
                                    </span>

                                    {index !== fieldOrder.length - 1 && (
                                        <span className={s.comma}>,</span>
                                    )}
                                </div>
                            ))}

                            <div className={s.bracket}>{'}'}</div>
                        </div>
                    </div>

                    <div className={s.floating}>
                        <span className={s.floatingDot} />
                        <span>{t.me.building}</span>
                    </div>

                    <div className={s.year}>
                        2026
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Me
