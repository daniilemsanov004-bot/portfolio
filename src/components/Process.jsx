import { motion } from 'framer-motion'
import s from './Process.module.css'
import { useLanguage } from '../i18n/LanguageContext'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../motion'

const stepKeys = ['discovery', 'design', 'development', 'launch']

const Process = () => {
    const { t } = useLanguage()

    return (
        <section className={s.process}>
            <div className={s.block}>
                <motion.div
                    className={s.heading}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <span className={s.label}>{t.process.label}</span>

                    <h2>{t.process.title}</h2>
                </motion.div>

                <motion.div
                    className={s.timeline}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    {stepKeys.map((key, index) => {
                        const step = t.process.steps[key]

                        return (
                            <motion.article
                                className={s.step}
                                key={key}
                                variants={staggerItem}
                            >
                                <div className={s.top}>
                                    <span className={s.number}>
                                        0{index + 1}
                                    </span>

                                    {index !== stepKeys.length - 1 && (
                                        <span className={s.line} />
                                    )}
                                </div>

                                <div className={s.content}>
                                    <h3>{step.title}</h3>

                                    <p>{step.description}</p>
                                </div>
                            </motion.article>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Process
