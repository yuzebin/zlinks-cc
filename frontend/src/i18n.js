import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  zh: {
    translation: {
      nav: { about: '关于', projects: '作品', services: '服务', contact: '联系' },
      hero: {
        badge: 'Available for Projects',
        title: '全栈开发者 / AI解决方案架构师',
        description: '从LLM应用开发到生成式AI，从实时通信到企业级系统，专注于将前沿AI技术落地为可扩展的产品方案。',
      },
      stats: { years: '年开发经验', projects: '完成项目', innovation: '创新可能' },
      projects: {
        label: 'Selected Works',
        title: '主要作品',
        subtitle: '从实时翻译到AI教育，每个项目都是技术与创意的融合',
      },
      services: {
        label: 'What I Offer',
        title: '提供服务',
        subtitle: '基于18+项目实践经验，提供全栈技术与AI解决方案',
      },
      footer: { slogan: '用代码连接创意，用技术实现想象', rights: '版权所有' },
      theme: {
        dark: '暗夜',
        light: '白昼',
        ocean: '深海',
        forest: '森林',
        sunset: '日落',
        aurora: '极光',
        mono: '黑白',
      }
    }
  },
  en: {
    translation: {
      nav: { about: 'About', projects: 'Works', services: 'Services', contact: 'Contact' },
      hero: {
        badge: 'Available for Projects',
        title: 'Full Stack Developer / AI Solutions Architect',
        description: 'From LLM application development to generative AI, specializing in deploying cutting-edge AI technologies into scalable solutions.',
      },
      stats: { years: 'Years Exp.', projects: 'Projects', innovation: 'Innovation' },
      projects: {
        label: 'Selected Works',
        title: 'Featured Projects',
        subtitle: 'From real-time translation to AI education',
      },
      services: {
        label: 'What I Offer',
        title: 'Services',
        subtitle: 'Based on 18+ projects experience',
      },
      footer: { slogan: 'Connecting creativity with code', rights: 'All rights reserved' },
      theme: {
        dark: 'Dark',
        light: 'Light',
        ocean: 'Ocean',
        forest: 'Forest',
        sunset: 'Sunset',
        aurora: 'Aurora',
        mono: 'Mono',
      }
    }
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
