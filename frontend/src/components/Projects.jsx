import { useTranslation } from 'react-i18next';

const projects = [
  { id: 'wetalk', icon: '🎙️', title: 'weLinks Talk', tags: ['WebRTC', 'FastAPI', 'React', 'SenseVoice'] },
  { id: 'vr', icon: '🥽', title: 'VR English', tags: ['Zhipu AI', 'Zustand', 'TypeScript', 'WebSocket'] },
  { id: 'comfy', icon: '🎨', title: 'ComfyUI/SwarmUI', tags: ['Python', 'Stable Diffusion', 'Docker', 'Vue'] },
  { id: 'ecom', icon: '🛒', title: '智慧电商系统', tags: ['Spring Cloud', 'WeChat', 'Microservices', 'Redis'] },
  { id: 'irank', icon: '📊', title: 'iRank', tags: ['Go', 'App Store API', 'CLI', 'SQLite'] },
  { id: 'appsniff', icon: '🔍', title: 'AppSniff', tags: ['iOS', 'Reverse Engineering', 'Python'] },
  { id: 'dify', icon: '🤖', title: 'Dify LLM平台', tags: ['Python', 'Flask', 'PostgreSQL', 'RAG'] },
  { id: 'ragflow', icon: '📚', title: 'RAGFlow文档引擎', tags: ['DeepDoc', 'Elasticsearch', 'LLM'] },
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-[var(--accent-cyan)] uppercase tracking-wider mb-4">{t('projects.label')}</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">{t('projects.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                {t(`projects.${project.id}.desc`, { defaultValue: '' })}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
