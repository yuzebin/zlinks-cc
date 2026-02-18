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
  { id: 'medical', icon: '🏥', title: '医院互联互通平台', tags: ['Java', 'Spring Cloud', 'HL7', '数据建模'] },
  { id: 'cdss', icon: '🩺', title: '临床智能诊断系统', tags: ['NLP', 'BERT', '知识图谱', '医疗合规'] },
  { id: 'vod', icon: '📺', title: '全球互动广告平台', tags: ['Python', 'Kafka', 'Kafka', 'Spark'] },
  { id: 'blockchain', icon: '⛓', title: '区块链交易所', tags: ['Go', '加密算法', '安全架构', '共识机制'] },
  { id: 'smartship', icon: '🚢', title: '智慧船舶系统', tags: ['IoT', '数据分析', 'Python', '大数据'] },
  { id: 'tts', icon: '🔊', title: 'TTS语音服务', tags: ['FastAPI', 'TTS', 'WebSocket', 'Python'] },
  { id: 'iot', icon: '📡', title: '工业物联网平台', tags: ['IoT', 'MQTT', '时序数据库', '边缘计算'] },
  { id: 'aigc', icon: '✨', title: 'AIGC内容平台', tags: ['AIGC', 'Stable Diffusion', 'API服务', '用户系统'] },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-8">
              {/* 标题区 */}
              <div className="flex items-start gap-6 mb-6">
                <div className="text-6xl">{project.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-[var(--accent-cyan)]">{project.title}</h3>
                  <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-mono">{t('projects.label')}</div>
                </div>
              </div>

              {/* 简短描述 */}
              <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                {t(`projects.${project.id}.desc`, { defaultValue: '' })}
              </p>

              {/* 技术标签 */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-cyan)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 详细描述 */}
              <div className="mb-6">
                <h4 className="text-sm text-[var(--accent-cyan)] font-semibold mb-3 uppercase tracking-wider">详细说明</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(`projects.${project.id}.details`, { defaultValue: '' })}
                </p>
              </div>

              {/* 核心能力 */}
              <div className="mb-6">
                <h4 className="text-sm text-[var(--accent-cyan)] font-semibold mb-3 uppercase tracking-wider">核心技能</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(`projects.${project.id}.skills`, { defaultValue: '' })}
                </p>
              </div>

              {/* 技术栈 */}
              <div>
                <h4 className="text-sm text-[var(--accent-cyan)] font-semibold mb-3 uppercase tracking-wider">技术栈</h4>
                <div className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {t(`projects.${project.id}.tech`, { defaultValue: '' })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
