import { motion } from 'framer-motion'
import s from './What.module.css'
import { useLanguage } from '../i18n/LanguageContext'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../motion'

const serviceKeys = ['landing', 'business', 'webapps', 'custom']

const What = () => {
    const { t } = useLanguage()

    return (
        <section className={s.what} id="services">
            <div className={s.block}>
                <motion.div
                    className={s.heading}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <span className={s.label}>{t.what.label}</span>

                    <h2>{t.what.title}</h2>
                </motion.div>

                <motion.div
                    className={s.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    {serviceKeys.map((key, index) => {
                        const service = t.what.services[key]

                        return (
                            <motion.article
                                className={s.card}
                                key={key}
                                variants={staggerItem}
                            >
                                <div className={s.cardTop}>
                                    <span className={s.number}>
                                        0{index + 1}
                                    </span>

                                    <span className={s.arrow}>↗</span>
                                </div>

                                <h3>{service.title}</h3>

                                <p>{service.description}</p>

                                <span className={s.technologies}>
                                    {service.technologies}
                                </span>
                            </motion.article>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default What
