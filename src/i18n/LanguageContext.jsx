import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'site-lang'

const getInitialLang = () => {
    if (typeof window === 'undefined') return 'en'

    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'ru') return saved

    const browserLang = window.navigator.language || ''
    return browserLang.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(getInitialLang)

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, lang)
        document.documentElement.lang = lang
    }, [lang])

    const value = {
        lang,
        setLang,
        toggleLang: () => setLang((prev) => (prev === 'en' ? 'ru' : 'en')),
        t: translations[lang],
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }

    return context
}
