import s from './Build.module.css'
import { useLanguage } from '../i18n/LanguageContext'

const skillKeys = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'React Router',
    'Supabase',
    'REST API',
    'Git',
    'Figma',
]

const Build = () => {
    const { t, lang } = useLanguage()

    return (
        <section className={s.build} id="home">
            <div className={s.block}>
                <div className={s.texts}>
                    <div className={s.frontend}>
                        <span></span>
                        {t.build.badge}
                    </div>

                    <h1 className={lang === 'ru' ? s.ru : ''}>
                        {t.build.titleLine1}
                        <br />
                        {t.build.titleLine2}
                    </h1>

                    <p>
                        {t.build.description}
                    </p>

                    <div className={s.btns}>
                        <a href="#projects" className={s.btn1}>
                            {t.build.viewProjects}
                        </a>

                        <a href="#contact" className={s.btn2}>
                            {t.build.letsTalk}
                        </a>
                    </div>

                    <div className={s.frlnc}>
                        <span></span>
                        {t.build.freelance}
                        <i></i>
                    </div>

                    <div className={s.skills}>
                        <div className={s.skillsTop}>
                            <span>{t.build.techStackLabel}</span>
                            <span>01 — 09</span>
                        </div>

                        <div className={s.skillsList}>
                            {skillKeys.map((skill, index) => (
                                <div className={s.skill} key={skill}>
                                    <span className={s.skillNumber}>
                                        0{index + 1}
                                    </span>

                                    <span className={s.skillName}>
                                        {skill}
                                    </span>

                                    <span className={s.arrow}>↗</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={s.visual}>
                    <img src="/preview (1).webp" alt="Daniil — Frontend Developer" />
                    <div className={s.visualGlow}></div>
                </div>
            </div>
        </section>
    )
}

export default Build
