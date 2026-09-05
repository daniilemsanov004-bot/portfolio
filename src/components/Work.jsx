import { motion } from 'framer-motion'
import s from './Work.module.css'
import { useLanguage } from '../i18n/LanguageContext'
import { fadeUp, fadeUpSoft, viewportOnce } from '../motion'

const projectMeta = [
    {
        key: 'UrbanKey',
        tags: ['React', 'Supabase', 'AI', 'Telegram Bot'],
        image: 'images/urbankey.png',
        link: 'https://urbankeyy.vercel.app/',
    },
    {
        key: 'Realestatein',
        tags: ['React', 'JavaScript', 'Supabase', 'CSS Modules'],
        image: '/06edc737-9ba2-4ef9-a219-2dbbe967151e.png',
        link: 'https://realestatein.vercel.app/',
    },
]

const WorkCard = ({
    project,
    info,
    viewProjectLabel,
    reverse,
}) => {
    if (!info) return null

    return (
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
}

const Work = () => {
    const { t } = useLanguage()

    const work = t?.work

    if (!work) {
        return null
    }

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
                    <h3>{work.kicker}</h3>

                    <h1>{work.title}</h1>

                    <p>{work.description}</p>
                </motion.div>

                <div className={s.cards}>
                    {projectMeta.map((project, index) => {
                        const info =
                            work.projects?.[project.key]

                        if (!info) {
                            console.warn(
                                `Translation missing for project: ${project.key}`
                            )

                            return null
                        }

                        return (
                            <WorkCard
                                key={project.key}
                                project={project}
                                info={info}
                                viewProjectLabel={work.viewProject}
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