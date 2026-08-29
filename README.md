# Portfolio — Personal Frontend Developer Website

A personal portfolio website built with **React + Vite**.

The project is a single-page application (SPA) with animations, RU/EN language switching, a project showcase, technology stack, services, certificates, work process and a contact form that sends messages directly to Telegram.

The website is designed to present the author's frontend development skills, projects and experience in a clean modern interface.

## Features

- Single-page portfolio with multiple sections:
  - Hero
  - Technology Stack
  - Projects / Work
  - Services / What I Do
  - About Me
  - Certificates
  - Work Process
  - Contact / Connect
  - Footer
- Russian / English language switching
- Centralized translations through `LanguageContext`
- Smooth scroll-based reveal animations
- `framer-motion` animations
- Fully responsive layout
- CSS Modules with separate styles for components
- Project showcase
- Technology stack section
- Services section
- Certificates section
- Contact form
- Honeypot anti-spam protection
- Server-side form validation
- Telegram notifications for contact requests
- React Router routing
- Automatic fallback redirect to the home page

## Tech Stack

### Frontend

- **React 19** — UI library
- **Vite** — build tool and development server
- **React Router** — routing
- **Framer Motion** — animations
- **Lucide React** — icons
- **CSS Modules** — component-level styling
- **Oxlint** — linting

### Backend / Infrastructure

- **Vercel Serverless Functions** — backend endpoint for the contact form
- **Telegram Bot API** — delivery of contact requests
- **Vercel** — hosting and deployment

## Project Structure

```text
Portfolio/
├── api/
│   └── contact.js
│       # Serverless function for processing the contact form
│       # and sending messages to Telegram
│
├── public/
│   └── images/
│       └── certificates/
│           # Certificate images and other static assets
│
├── src/
│   ├── components/
│   │   ├── Build/
│   │   ├── Stack/
│   │   ├── Work/
│   │   ├── What/
│   │   ├── Me/
│   │   ├── Certificates/
│   │   ├── Process/
│   │   ├── Connect/
│   │   ├── Footer/
│   │   └── Nav/
│   │       # Portfolio sections and reusable UI components
│   │
│   ├── hooks/
│   │   └── useReveal.js
│   │       # Scroll reveal animation hook
│   │
│   ├── i18n/
│   │   ├── LanguageContext.jsx
│   │   └── translations.js
│   │       # RU / EN language system
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Projects/
│   │   └── Services/
│   │       # Home is the main active page;
│   │       # additional pages can be expanded in the future
│   │
│   ├── App.jsx
│   │   # Application routing
│   │
│   ├── main.jsx
│   │   # Application entry point
│   │
│   ├── motion.js
│   │   # Shared Framer Motion animation variants
│   │
│   └── index.css
│       # Global styles
│
├── index.html
├── vite.config.js
├── vercel.json
├── package.json
└── .env.example
```

## Installation

The project requires a current Node.js LTS version and npm.

Clone the repository and install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

By default, Vite runs the application at:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

The production build is generated in:

```text
dist/
```

## Preview Production Build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Environment Variables

Create a local `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Then configure the required values.

| Variable | Description |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Telegram bot token issued by `@BotFather` |
| `TELEGRAM_CHAT_ID` | Telegram chat/user ID where contact requests are delivered |

These variables are used only by:

```text
api/contact.js
```

They are **server-side secrets** and must never be exposed through frontend variables such as:

```text
VITE_TELEGRAM_BOT_TOKEN
VITE_TELEGRAM_CHAT_ID
```

Do not commit `.env` to Git.

## Contact Form

The contact form sends requests through:

```text
api/contact.js
```

The request flow is:

```text
Portfolio
    ↓
Contact Form
    ↓
Client request
    ↓
api/contact.js
    ↓
Validation
    ↓
Honeypot check
    ↓
Telegram Bot API
    ↓
Telegram Chat
```

The Telegram bot token remains on the server and is not included in the browser bundle.

## Animations

Animations are implemented with:

```text
framer-motion
```

Shared animation variants are stored in:

```text
src/motion.js
```

Scroll-based reveal behavior is handled by:

```text
src/hooks/useReveal.js
```

This keeps animation logic reusable across portfolio sections.

## Internationalization

The portfolio supports:

```text
Russian
English
```

The language system is implemented through:

```text
src/i18n/LanguageContext.jsx
src/i18n/translations.js
```

All main interface content can be switched without reloading the page.

## Routing

Routing is handled with:

```text
react-router-dom
```

The main page is:

```text
/
```

The application also contains routes prepared for future expansion:

```text
/about
/contact
/projects
/services
```

Unknown or unsupported routes are redirected back to the main page.

## Responsive Design

The interface is built with responsive layouts for:

- Desktop
- Laptop
- Tablet
- Mobile

Each major component has its own CSS Module, keeping styles isolated and reducing conflicts between sections.

## Deployment

The project is configured for **Vercel**.

Deployment flow:

```text
GitHub
   ↓
Vercel
   ↓
Vite Build
   ↓
React SPA
   ↓
Vercel Serverless Functions
```

Before deployment, add the following environment variables in:

```text
Vercel
→ Project
→ Settings
→ Environment Variables
```

```text
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
```

The file:

```text
vercel.json
```

contains the configuration required for SPA routing.

The serverless function:

```text
api/contact.js
```

is automatically deployed by Vercel.

## Security

The project keeps Telegram credentials on the server side.

Security measures include:

- Server-side form validation
- Honeypot anti-spam field
- No Telegram secrets in the frontend bundle
- Environment variables for sensitive credentials
- `.env` excluded from Git

Never commit real Telegram credentials to the repository.

## Design Goals

The portfolio focuses on:

- Modern visual design
- Clear UX
- Strong project presentation
- Smooth animations
- Responsive layout
- Minimal and readable interface
- Fast navigation
- Practical frontend architecture

The goal is to present both the visual and technical side of frontend development.

## Author

**Daniil Yemshanov**

Frontend Developer

Focus:

```text
React
JavaScript
UI / UX
Frontend Development
Animations
Web Architecture
```

## License

This project is a personal portfolio and is primarily intended for demonstration and personal use.



<details>
<summary>🇷🇺 Русская версия</summary>

# Портфолио — личный сайт Frontend Developer

Личный сайт-портфолио на **React + Vite**.

Проект представляет собой одностраничное приложение (SPA) с анимациями, переключением русского и английского языков, демонстрацией проектов, технологий, услуг, сертификатов и формой связи, которая отправляет заявки напрямую в Telegram.

Сайт создан для демонстрации навыков frontend-разработки, проектов и опыта автора.

## Возможности

### Основная страница

- Одностраничная структура с секциями:
  - Hero
  - Technology Stack
  - Projects / Work
  - Services / What I Do
  - About Me
  - Certificates
  - Work Process
  - Contact / Connect
  - Footer
- Переключение русского и английского языков
- Централизованная система переводов через `LanguageContext`
- Плавные анимации появления элементов при прокрутке
- Анимации через `framer-motion`
- Полностью адаптивная вёрстка
- CSS Modules для изолированной стилизации компонентов
- Презентация проектов
- Секция технологического стека
- Секция услуг
- Секция сертификатов
- Форма обратной связи
- Honeypot-защита от спам-ботов
- Серверная валидация формы
- Отправка заявок в Telegram
- Маршрутизация через React Router
- Автоматический редирект неизвестных маршрутов на главную

## Стек технологий

### Frontend

- **React 19** — UI-библиотека
- **Vite** — сборка и dev-сервер
- **React Router** — маршрутизация
- **Framer Motion** — анимации
- **Lucide React** — иконки
- **CSS Modules** — стилизация компонентов
- **Oxlint** — линтинг

### Backend / Infrastructure

- **Vercel Serverless Functions** — обработка формы связи
- **Telegram Bot API** — доставка заявок
- **Vercel** — хостинг и деплой

## Структура проекта

```text
Portfolio/
├── api/
│   └── contact.js
│       # Serverless-функция для обработки формы
│       # и отправки заявок в Telegram
│
├── public/
│   └── images/
│       └── certificates/
│           # Сертификаты и другие статические изображения
│
├── src/
│   ├── components/
│   │   ├── Build/
│   │   ├── Stack/
│   │   ├── Work/
│   │   ├── What/
│   │   ├── Me/
│   │   ├── Certificates/
│   │   ├── Process/
│   │   ├── Connect/
│   │   ├── Footer/
│   │   └── Nav/
│   │       # Секции портфолио и переиспользуемые компоненты
│   │
│   ├── hooks/
│   │   └── useReveal.js
│   │       # Хук анимации появления элементов при скролле
│   │
│   ├── i18n/
│   │   ├── LanguageContext.jsx
│   │   └── translations.js
│   │       # Система RU / EN
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Projects/
│   │   └── Services/
│   │       # Home — основная активная страница;
│   │       # остальные страницы подготовлены для расширения
│   │
│   ├── App.jsx
│   │   # Роутинг приложения
│   │
│   ├── main.jsx
│   │   # Точка входа
│   │
│   ├── motion.js
│   │   # Общие варианты анимаций Framer Motion
│   │
│   └── index.css
│       # Глобальные стили
│
├── index.html
├── vite.config.js
├── vercel.json
├── package.json
└── .env.example
```

## Установка

Требуется актуальная LTS-версия Node.js и npm.

```bash
npm install
```

## Запуск

```bash
npm run dev
```

По умолчанию приложение будет доступно по адресу:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

Собранная версия находится в:

```text
dist/
```

## Preview

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Переменные окружения

Создайте `.env` на основе `.env.example`:

```bash
cp .env.example .env
```

Затем заполните необходимые значения.

| Переменная | Назначение |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Токен Telegram-бота, полученный через `@BotFather` |
| `TELEGRAM_CHAT_ID` | ID Telegram-чата или пользователя, куда отправляются заявки |

Эти переменные используются только серверной функцией:

```text
api/contact.js
```

Они являются секретными и не должны попадать во frontend.

Не используйте:

```text
VITE_TELEGRAM_BOT_TOKEN
VITE_TELEGRAM_CHAT_ID
```

Не коммитьте `.env` в Git.

## Форма обратной связи

Форма отправляет заявки через:

```text
api/contact.js
```

Схема работы:

```text
Portfolio
    ↓
Contact Form
    ↓
Client Request
    ↓
api/contact.js
    ↓
Validation
    ↓
Honeypot Check
    ↓
Telegram Bot API
    ↓
Telegram Chat
```

Токен Telegram-бота остаётся на сервере и не попадает в браузерный bundle.

## Анимации

Для анимаций используется:

```text
framer-motion
```

Общие варианты анимаций:

```text
src/motion.js
```

Анимации появления элементов при прокрутке:

```text
src/hooks/useReveal.js
```

Это позволяет повторно использовать анимационную логику в разных секциях.

## Интернационализация

Портфолио поддерживает:

```text
Русский
English
```

Система языков реализована через:

```text
src/i18n/LanguageContext.jsx
src/i18n/translations.js
```

Основной контент интерфейса можно переключать без перезагрузки страницы.

## Роутинг

Для маршрутизации используется:

```text
react-router-dom
```

Основная страница:

```text
/
```

Также подготовлены маршруты:

```text
/about
/contact
/projects
/services
```

Неизвестные маршруты автоматически перенаправляются на главную страницу.

## Адаптивность

Интерфейс адаптирован под:

- Desktop
- Laptop
- Tablet
- Mobile

Каждый крупный компонент использует собственный CSS Module, что помогает изолировать стили и уменьшить количество конфликтов.

## Деплой

Проект настроен для **Vercel**.

Схема деплоя:

```text
GitHub
   ↓
Vercel
   ↓
Vite Build
   ↓
React SPA
   ↓
Vercel Serverless Functions
```

Перед деплоем необходимо добавить в:

```text
Vercel
→ Project
→ Settings
→ Environment Variables
```

следующие переменные:

```text
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
```

Файл:

```text
vercel.json
```

содержит настройки для корректной работы SPA-роутинга.

Функция:

```text
api/contact.js
```

автоматически разворачивается как Vercel Serverless Function.

## Безопасность

Проект хранит Telegram-credentials только на сервере.

Используются:

- Серверная валидация формы
- Honeypot-защита от спам-ботов
- Отсутствие Telegram-секретов во frontend bundle
- Environment Variables для секретных данных
- `.env` исключён из Git

Никогда не добавляйте реальные Telegram-токены в репозиторий.

## Цели проекта

Портфолио сфокусировано на:

- Современном визуальном дизайне
- Удобном UX
- Презентации проектов
- Плавных анимациях
- Адаптивной вёрстке
- Чистой архитектуре frontend
- Быстрой навигации
- Минималистичном интерфейсе

Цель проекта — показать одновременно визуальную и техническую сторону frontend-разработки.

## Автор

**Daniil Yemshanov**

Frontend Developer

Основные направления:

```text
React
JavaScript
UI / UX
Frontend Development
Animations
Web Architecture
```

## Лицензия

Проект является личным портфолио и предназначен преимущественно для демонстрации и личного использования.

</details>
