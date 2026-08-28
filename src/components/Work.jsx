import { motion } from 'framer-motion'
import s from './Work.module.css'
import { useLanguage } from '../i18n/LanguageContext'
import { fadeUp, fadeUpSoft, viewportOnce } from '../motion'

const projectMeta = [
    {
        key: 'UrbanKey',
        tags: ['React', 'Supabase', 'AI', 'Telegram Bot'],
        image: '/images/Urbankey.png',
        link: 'https://urbankeyy.vercel.app/',
    },
    {
        key: 'Estatein',
        tags: ['React', 'JavaScript', 'Supabase', 'CSS Modules'],
        image: '/images/estatein.png',
        link: 'https://realestatein.vercel.app/',
    },
]

const WorkCard = ({ project, info, viewProjectLabel, reverse }) => (
    <motion.article
        className={`${s.card} ${reverse ? s.reverse : ''}`}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUpSoft}
    >
        <div className={s.preview}>
            <img
                src={project.image}
                alt={`${info.title} preview`}
            />
        </div>

        <div className={s.content}>
            <span className={s.type}>
                {info.type}
            </span>

            <h2>{info.title}</h2>

            <p>{info.description}</p>

            <div className={s.tags}>
                {project.tags.map((tag) => (
                    <span key={tag}>
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
            >
                {viewProjectLabel}
                <span>→</span>
            </a>
        </div>
    </motion.article>
)

const Work = () => {
    const { t } = useLanguage()

    return (
        <section className={s.work} id="projects">
            <div className={s.block}>
                <motion.div
                    className={s.texts}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <h3>{t.work.kicker}</h3>

                    <h1>{t.work.title}</h1>

                    <p>
                        {t.work.description}
                    </p>
                </motion.div>

                <div className={s.cards}>
                    {projectMeta.map((project, index) => {
                        const info = t.work.projects[project.key]

                        return (
                            <WorkCard
                                key={project.key}
                                project={project}
                                info={info}
                                viewProjectLabel={t.work.viewProject}
                                reverse={index % 2 !== 0}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Work
