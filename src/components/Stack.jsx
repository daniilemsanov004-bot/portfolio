import { motion } from 'framer-motion'
import {
    Code2,
    Database,
    GitBranch,
    Globe,
    Monitor,
    Route,
} from 'lucide-react'

import s from './Stack.module.css'
import { useLanguage } from '../i18n/LanguageContext'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../motion'

const technologyKeys = [
    { key: 'React', icon: <Code2 /> },
    { key: 'JavaScript', icon: <Code2 /> },
    { key: 'CSS Modules', icon: <Monitor /> },
    { key: 'React Router', icon: <Route /> },
    { key: 'Supabase', icon: <Database /> },
    { key: 'REST API', icon: <Globe /> },
    { key: 'Responsive UI', icon: <Monitor /> },
    { key: 'Git', icon: <GitBranch /> },
]

const Stack = () => {
    const { t } = useLanguage()

    return (
        <section className={s.stack}>
            <div className={s.block}>
                <motion.div
                    className={s.text}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <h2>{t.stack.kicker}</h2>

                    <h1>{t.stack.title}</h1>

                    <p>
                        {t.stack.description}
                    </p>
                </motion.div>

                <motion.div
                    className={s.techn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    {technologyKeys.map((technology) => (
                        <motion.div
                            className={s.card}
                            key={technology.key}
                            variants={staggerItem}
                        >
                            <div className={s.icon}>
                                {technology.icon}
                            </div>

                            <h3>{t.stack.technologies[technology.key]}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Stack
