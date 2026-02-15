import { useTranslation } from 'react-i18next';

const services = [
  { id: 'llm', num: '01', title: 'LLM应用开发', desc: '基于大语言模型的智能应用开发，涵盖RAG知识库、AI Agent、工作流编排等企业级解决方案。' },
  { id: 'genai', num: '02', title: '生成式AI', desc: 'AIGC内容生成解决方案，包括AI图像生成、语音合成、多模态内容创作平台搭建。' },
  { id: 'enterprise', num: '03', title: '企业级开发', desc: '全栈企业应用开发，专注电商系统、SaaS平台、业务中台等高并发、高可用架构设计。' },
  { id: 'security', num: '04', title: '安全与合规', desc: '软件安全与合规解决方案，提供代码审计、模型安全检测、行业标准合规咨询服务。' },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 px-6 bg-[var(--bg-secondary)]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-[var(--accent-cyan)] uppercase tracking-wider mb-4">{t('services.label')}</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/30 transition-all duration-300 group"
            >
              <div className="text-6xl font-bold text-[var(--text-muted)]/20 mb-4 font-mono">{service.num}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent-cyan)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--text-secondary)]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
