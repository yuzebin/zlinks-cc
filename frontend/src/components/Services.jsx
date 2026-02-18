import { useTranslation } from 'react-i18next';

const services = [
  { id: 'architecture', num: '01', title: '系统架构设计', desc: '精通Linux体系架构，10+年Java/Python开发经验。擅长高并发、负载均衡与分布式系统设计，熟悉Django、Flask、FastAPI、SpringCloud等主流框架。' },
  { id: 'backend', num: '02', title: '后端开发', desc: '20年专业开发经验，精通PHP、Python、Java、JavaScript、Go等多语言。熟悉MySQL、PostgreSQL、Oracle、MongoDB、Redis等存储技术及分布式云数据库应用。' },
  { id: 'bigdata', num: '03', title: '大数据平台', desc: '熟悉Hadoop、Spark、Kafka、Flink等大数据技术栈。构建基于PostgreSQL的综合分析平台和数据仓库，熟练掌握ETL、CDC等数据处理方法。' },
  { id: 'ai', num: '04', title: 'AI/算法', desc: '利用机器学习进行音频相似度计算、文字互转。基于NLP建立自动应答与智能客服系统，使用BERT语言模型解决临床智能诊断、疾病风险预测等问题。' },
  { id: 'management', num: '05', title: '研发管理', desc: '10+年研发管理经验，多年Scrum敏捷开发实践。带团队50-200人，拥有大型项目全局操盘经验，既有全局视野又能深入一线技术。' },
  { id: 'consulting', num: '06', title: '技术顾问', desc: '为多家企业提供行业前沿技术指导、产品战略规划、研发团队管理、技术架构审核、人员成长辅导等专业咨询服务。' },
  { id: 'security', num: '07', title: '安全与合规', desc: '软件安全与合规解决方案，提供代码审计、模型安全检测、行业安全标准建设，医疗AI产品合规性要求保障。' },
  { id: 'industry', num: '08', title: '行业解决方案', desc: '深耕医疗AI、物联网IoT、大数据、数字孪生、区块链等多个行业，成功交付智慧电厂、智慧船舶、智慧码头等企业级产品。' },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 px-6 bg-[var(--bg-secondary)]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-[var(--accent-cyan)] uppercase tracking-wider mb-3">{t('services.label')}</div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">{t('services.title')}</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div key={service.id} className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-5 hover:border-[var(--accent-cyan)]/30 transition-all duration-300">
              {/* 标题区 */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-5xl font-bold text-[var(--text-muted)]/20 font-mono">
                  {service.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[var(--accent-cyan)]">{service.title}</h3>
                  <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-mono">{t('services.label')}</div>
                </div>
              </div>

              {/* 描述 */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
