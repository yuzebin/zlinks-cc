import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  zh: {
    translation: {
      nav: { about: '关于', projects: '作品', services: '服务', contact: '联系' },
      hero: {
        badge: '开放接洽项目',
        title: '全栈开发者 / AI解决方案架构师',
        description: '20年+研发管理经验，精通Java/Python/Go等多语言，深耕医疗AI、物联网、大数据、区块链等领域。从LLM应用开发到生成式AI，专注于将前沿技术落地为可扩展的产品方案。',
      },
      stats: { years: '年开发经验', projects: '交付项目', innovation: '行业覆盖' },
      projects: {
        label: 'Selected Works',
        title: '主要作品',
        subtitle: '医疗AI、物联网、大数据、区块链等多行业项目经验',
        wetalk: {
          desc: '实时语音翻译系统，支持50+语言互译，端到端延迟低于300ms',
          details: '基于WebRTC实时通信技术，集成SenseVoice语音识别与TTS语音合成。支持多端同时在线会议，端到端延迟控制在300ms以内，实现流畅的跨语言沟通体验。',
          skills: 'WebRTC实时通信、语音识别与合成、低延迟优化',
          tech: 'WebRTC, FastAPI, React, SenseVoice, WebSocket, Python'
        },
        vr: {
          desc: 'VR英语教学平台，集成智能AI对话，沉浸式语言学习体验',
          details: '基于Unity 3D引擎构建沉浸式VR英语教学环境，集成大语言模型实现智能对话系统。支持虚拟教室场景、实时语音交互、个性化学习路径推荐，为用户提供身临其境的语言学习体验。',
          skills: 'VR/AR开发、3D场景构建、AI对话集成',
          tech: 'Unity, C#, OpenAI API, WebSocket, Oculus SDK, Blender'
        },
        comfy: {
          desc: 'ComfyUI生态集成方案，支持自定义节点与工作流编排',
          details: '深度集成ComfyUI开源生态，提供自定义节点开发接口与可视化工作流编排功能。支持模型热加载、批量处理、API服务化，为AIGC创作者提供高效的图像生成解决方案。',
          skills: '工作流编排、节点开发、AIGC集成',
          tech: 'ComfyUI, Python, Stable Diffusion, WebSocket, FastAPI, Vue.js'
        },
        ecom: {
          desc: '智慧电商系统，集成微信生态、商品管理、订单处理与营销工具',
          details: '完整的电商解决方案，深度集成微信支付、小程序、公众号等生态。支持多端商城、分销系统、秒杀活动、会员管理、数据分析等核心功能，帮助企业快速搭建线上销售平台。',
          skills: '电商系统架构、微信生态集成、支付系统',
          tech: 'SpringCloud, MySQL, Redis, WeChat SDK, Vue.js, Uni-app'
        },
        irank: {
          desc: 'App Store排行榜查询工具，支持多国榜单实时追踪与分析',
          details: '实时抓取全球主要国家的App Store排行榜数据，提供应用排名变化趋势分析。支持历史数据查询、竞品对比、搜索排名监控等功能，帮助开发者了解市场动态并优化ASO策略。',
          skills: '数据爬取、实时监控、数据分析',
          tech: 'Python, Scrapy, PostgreSQL, Redis, React, Node.js'
        },
        appsniff: {
          desc: 'iOS应用逆向分析工具，帮助开发者理解应用结构',
          details: '专业的iOS应用逆向分析平台，支持应用解密、资源提取、类方法分析等功能。帮助开发者学习优秀应用的架构设计，也支持安全测试与漏洞分析，为iOS开发提供深度技术支持。',
          skills: 'iOS逆向工程、应用解密、资源分析',
          tech: 'Python, Frida, MachO, Swift, Objective-C, Flask'
        },
        dify: {
          desc: '开源LLM应用开发平台，可视化编排RAG与Agent工作流',
          details: '参与开源LLM应用开发平台Dify的生态建设，提供可视化工作流编排功能。支持RAG知识库管理、Agent智能体配置、多模型集成，为企业快速搭建AI应用提供低代码解决方案。',
          skills: 'RAG架构、Agent开发、工作流编排',
          tech: 'React, Python, LangChain, Vector Database, LLM API, Docker'
        },
        ragflow: {
          desc: '企业级文档处理引擎，基于深度文档解析的RAG解决方案',
          details: '企业级文档处理与知识管理系统，基于深度文档解析技术实现精准的RAG解决方案。支持PDF、Word、Excel等多格式文档解析，提供语义搜索、知识图谱构建、智能问答等功能。',
          skills: '文档解析、知识图谱、RAG系统',
          tech: 'Python, Elasticsearch, Vector Database, LangChain, FastAPI, OCR'
        },
        medical: {
          desc: '医院互联互通集成平台，支持HL7标准，整合全院上百个系统与数据中心',
          details: '大型医院互联互通集成平台，基于HL7/FHIR标准实现医院各系统间的数据交换。整合HIS、LIS、PACS、EMR等上百个业务系统，建立统一的数据中心，实现患者信息共享与业务协同。',
          skills: '医疗系统集成、HL7/FHIR标准、数据中心',
          tech: 'Java, SpringCloud, HL7, FHIR, Oracle, MySQL, Redis'
        },
        cdss: {
          desc: '临床智能辅助诊断决策系统CDSS，利用NLP建立智能客服与疾病风险预测',
          details: '临床智能辅助诊断决策系统（CDSS），基于NLP技术建立智能客服系统与疾病风险预测模型。支持病历分析、诊断建议、用药提醒等功能，辅助医生提高诊疗质量，降低医疗风险。',
          skills: 'NLP技术、临床决策支持、风险预测',
          tech: 'Python, BERT, TensorFlow, FastAPI, MySQL, Medical NLP'
        },
        vod: {
          desc: '全球互动广告平台，覆盖移动端与OTT电视端，已在美国、欧洲、斯洛文尼亚等国部署',
          details: '全球互动视频广告平台，支持移动端与OTT电视端的广告投放与投放效果分析。在美国、欧洲、斯洛文尼亚等多个国家部署，提供精准广告定向、实时竞价、数据分析等核心功能。',
          skills: '视频广告系统、全球部署、数据分析',
          tech: 'Java, Go, Redis, Kafka, Elasticsearch, AWS, Docker, Kubernetes'
        },
        blockchain: {
          desc: '区块链交易所研发，支持加密算法与安全架构，完成私密社交APP后端开发',
          details: '参与区块链交易所核心系统研发，负责交易撮合、钱包管理、安全风控等模块。同时完成私密社交APP的后端开发，集成端到端加密通信、隐私保护等技术，保障用户数据安全。',
          skills: '区块链技术、加密算法、安全架构',
          tech: 'Go, Solidity, Ethereum, PostgreSQL, Redis, Web3.js, Docker'
        },
        smartship: {
          desc: '工业互联网智能船舶电厂，基于IoT与大数据技术，提供实时数据分析与决策支持',
          details: '工业互联网智能船舶电厂管理系统，基于IoT与大数据技术实现船舶设备的实时监控与数据分析。提供故障预警、能效优化、维护决策等智能化服务，帮助企业提升运营效率，降低运维成本。',
          skills: '工业IoT、大数据分析、实时监控',
          tech: 'Python, InfluxDB, MQTT, Kafka, FastAPI, React, Grafana'
        },
        tts: {
          desc: 'TTS语音合成服务，支持多音色、情感合成与流式输出，应用于智能客服系统',
          details: '高性能TTS语音合成服务，支持多音色、情感合成、流式输出等功能。应用于智能客服、语音播报、有声读物等场景，提供自然流畅的语音体验，支持中英日韩等多种语言的语音合成。',
          skills: '语音合成、流式输出、情感控制',
          tech: 'Python, VITS, FastAPI, WebSocket, Redis, React'
        },
        iot: {
          desc: '工业物联网平台，支持MQTT协议、时序数据库与边缘计算，实现设备连接与数据采集',
          details: '工业级物联网平台，支持MQTT协议、时序数据库与边缘计算能力。实现海量设备连接、实时数据采集、设备管理等核心功能，为工业4.0场景提供稳定可靠的数据基础设施。',
          skills: 'IoT平台、边缘计算、时序数据库',
          tech: 'Python, MQTT, InfluxDB, Edge Computing, FastAPI, React, Docker'
        },
        aigc: {
          desc: 'AIGC内容生成平台，整合图像、语音、文本多模态创作能力，支持AI图像生成',
          details: '多模态AIGC内容生成平台，整合图像、语音、文本等多种创作能力。支持AI图像生成、语音合成、文本创作等功能，为用户提供一站式的AI创作工具，支持工作流编排与批量处理。',
          skills: '多模态AI、图像生成、内容创作',
          tech: 'Python, Stable Diffusion, TTS, LLM, FastAPI, React, ComfyUI'
        },
      },
      services: {
        label: 'What I Offer',
        title: '提供服务',
        subtitle: '20+年研发经验，8+行业领域专业能力',
        architecture: {
          desc: '精通Linux体系架构，10+年Java/Python开发经验。擅长高并发、负载均衡与分布式系统设计，熟悉Django、Flask、FastAPI、SpringCloud等主流框架。',
          details: '20+年系统架构经验，精通Linux内核级优化与系统调优。擅长设计高可用、高并发的分布式系统架构，熟悉微服务、服务网格、容器化部署等现代化架构模式。能够根据业务需求提供从单体应用到分布式系统的架构演进方案。',
          tech: 'Linux, Docker, Kubernetes, Nginx, HAProxy, Redis, RabbitMQ, Elasticsearch, Prometheus, Grafana'
        },
        backend: {
          desc: '20年专业开发经验，精通PHP、Python、Java、JavaScript、Go等多语言。熟悉MySQL、PostgreSQL、Oracle、MongoDB、Redis等存储技术及分布式云数据库应用。',
          details: '20年全栈后端开发经验，精通PHP、Python、Java、JavaScript、Go等主流编程语言。深度掌握MySQL、PostgreSQL、Oracle等关系型数据库，以及MongoDB、Redis等NoSQL数据库。熟悉分布式云数据库应用，能够设计高性能、高可用的数据存储方案。',
          tech: 'Python, Java, Go, PHP, JavaScript, MySQL, PostgreSQL, Oracle, MongoDB, Redis, DynamoDB, SpringCloud, FastAPI'
        },
        bigdata: {
          desc: '熟悉Hadoop、Spark、Kafka、Flink等大数据技术栈。构建基于PostgreSQL的综合分析平台和数据仓库，熟练掌握ETL、CDC等数据处理方法。',
          details: '深入掌握Hadoop、Spark、Kafka、Flink等主流大数据技术栈。具备从数据采集、存储、处理到分析的全链路大数据项目经验。成功构建基于PostgreSQL的综合分析平台和数据仓库，熟练掌握ETL、CDC等数据处理方法，能够为企业提供完整的大数据解决方案。',
          tech: 'Hadoop, Spark, Kafka, Flink, HBase, Hive, PostgreSQL, Airflow, ETL, CDC, Data Warehousing'
        },
        ai: {
          desc: '利用机器学习进行音频相似度计算、文字互转。基于NLP建立自动应答与智能客服系统，使用BERT语言模型解决临床智能诊断、疾病风险预测等问题。',
          details: '10+年AI技术研发经验，涵盖机器学习、深度学习、NLP等多个领域。利用机器学习技术实现音频相似度计算、文字转语音等功能。基于NLP技术构建自动应答与智能客服系统，使用BERT等预训练语言模型解决临床智能诊断、疾病风险预测等实际业务问题。',
          tech: 'Python, TensorFlow, PyTorch, BERT, GPT, NLP, Machine Learning, Deep Learning, OpenAI API, LangChain'
        },
        management: {
          desc: '10+年研发管理经验，多年Scrum敏捷开发实践。带团队50-200人，拥有大型项目全局操盘经验，既有全局视野又能深入一线技术。',
          details: '10+年研发管理经验，精通Scrum敏捷开发方法论与实践。带领50-200人的研发团队，具备大型项目的全局操盘经验。既能从战略层面进行项目规划与资源调配，又能深入一线技术细节进行指导。擅长团队建设、人员培养、绩效管理，能够有效提升团队整体战斗力。',
          tech: 'Agile, Scrum, Kanban, Project Management, Team Leadership, Product Planning, Resource Allocation'
        },
        consulting: {
          desc: '为多家企业提供行业前沿技术指导、产品战略规划、研发团队管理、技术架构审核、人员成长辅导等专业咨询服务。',
          details: '为多家知名企业提供专业技术咨询服务，涵盖行业前沿技术指导、产品战略规划、研发团队管理、技术架构审核、人员成长辅导等多个方面。凭借丰富的行业经验和技术积累，能够帮助企业识别技术机遇、规避技术风险、提升研发效率，实现技术与业务的协同发展。',
          tech: 'Technical Consulting, Architecture Review, Product Strategy, Team Management, Talent Development, Technology Assessment'
        },
        security: {
          desc: '软件安全与合规解决方案，提供代码审计、模型安全检测、行业安全标准建设，医疗AI产品合规性要求保障。',
          details: '提供全面的软件安全与合规解决方案，涵盖代码安全审计、AI模型安全检测、行业安全标准建设等多个维度。特别擅长医疗AI产品的合规性保障，熟悉国内外医疗行业标准与法规要求，能够帮助企业构建安全可靠的AI产品体系。',
          tech: 'Security Audit, Penetration Testing, OWASP, ISO 27001, HIPAA, Model Security, Medical AI Compliance'
        },
        industry: {
          desc: '深耕医疗AI、物联网IoT、大数据、数字孪生、区块链等多个行业，成功交付智慧电厂、智慧船舶、智慧码头等企业级产品。',
          details: '深耕医疗AI、物联网IoT、大数据、数字孪生、区块链等多个行业领域，具备丰富的行业知识与技术积累。成功交付智慧电厂、智慧船舶、智慧码头等大型企业级产品，能够深入理解行业痛点，提供针对性的技术解决方案。',
          tech: 'Medical AI, IoT, Big Data, Digital Twins, Blockchain, Industrial Internet, Smart Manufacturing, Edge Computing'
        },
      },
      footer: { slogan: '用代码连接创意，用技术实现想象', rights: '版权所有' },
      theme: {
        toggle: '切换主题',
        select: '选择主题',
        dark: '暗夜',
        light: '白昼',
        ocean: '深海',
        forest: '森林',
        sunset: '日落',
        aurora: '极光',
        mono: '黑白',
        cherry: '樱桃',
        lavender: '薰衣草',
        amber: '琥珀',
        emerald: '翡翠',
        sky: '天空',
        rose: '玫瑰',
        midnight: '午夜',
      }
    }
  },
  en: {
    translation: {
      nav: { about: 'About', projects: 'Works', services: 'Services', contact: 'Contact' },
      hero: {
        badge: 'Open for Projects',
        title: 'Full Stack Developer / AI Solutions Architect',
        description: '20+ years of R&D management experience. Proficient in Java/Python/Go, deep expertise in Medical AI, IoT, Big Data, and Blockchain. From LLM applications to generative AI, specializing in deploying cutting-edge technologies into scalable solutions.',
      },
      stats: { years: 'Years Exp.', projects: 'Projects Delivered', innovation: 'Industries' },
      projects: {
        label: 'Selected Works',
        title: 'Featured Projects',
        subtitle: 'Medical AI, IoT, Big Data, Blockchain across 8+ industries',
        wetalk: {
          desc: 'Real-time voice translation system supporting 50+ languages with <300ms end-to-end latency',
          details: 'Built on WebRTC real-time communication technology, integrated with SenseVoice speech recognition and TTS synthesis. Supports multi-party online meetings with end-to-end latency controlled under 300ms, delivering smooth cross-language communication experience.',
          skills: 'WebRTC real-time communication, speech recognition and synthesis, low-latency optimization',
          tech: 'WebRTC, FastAPI, React, SenseVoice, WebSocket, Python'
        },
        vr: {
          desc: 'VR English learning platform with AI-powered conversations for immersive language experience',
          details: 'Immersive VR English learning environment built on Unity 3D engine, integrated with LLM for intelligent dialogue system. Supports virtual classroom scenarios, real-time voice interaction, and personalized learning path recommendations, providing users with an immersive language learning experience.',
          skills: 'VR/AR development, 3D scene building, AI dialogue integration',
          tech: 'Unity, C#, OpenAI API, WebSocket, Oculus SDK, Blender'
        },
        comfy: {
          desc: 'ComfyUI ecosystem integration solution supporting custom nodes and workflow orchestration',
          details: 'Deep integration with the ComfyUI open-source ecosystem, providing custom node development interfaces and visual workflow orchestration capabilities. Supports hot model loading, batch processing, and API service deployment, providing efficient image generation solutions for AIGC creators.',
          skills: 'Workflow orchestration, node development, AIGC integration',
          tech: 'ComfyUI, Python, Stable Diffusion, WebSocket, FastAPI, Vue.js'
        },
        ecom: {
          desc: 'Smart e-commerce system with WeChat integration, product management, and marketing tools',
          details: 'Complete e-commerce solution deeply integrated with WeChat ecosystem including WeChat Pay, Mini Programs, and Official Accounts. Supports multi-terminal stores, distribution systems, flash sales, membership management, and data analytics, helping enterprises quickly build online sales platforms.',
          skills: 'E-commerce system architecture, WeChat ecosystem integration, payment systems',
          tech: 'SpringCloud, MySQL, Redis, WeChat SDK, Vue.js, Uni-app'
        },
        irank: {
          desc: 'App Store ranking tracker supporting real-time analysis across multiple countries',
          details: 'Real-time crawler for App Store rankings from major countries worldwide, providing trend analysis of app ranking changes. Supports historical data queries, competitor comparisons, and search ranking monitoring, helping developers understand market dynamics and optimize ASO strategies.',
          skills: 'Data scraping, real-time monitoring, data analytics',
          tech: 'Python, Scrapy, PostgreSQL, Redis, React, Node.js'
        },
        appsniff: {
          desc: 'iOS app reverse engineering tool helping developers understand app structure',
          details: 'Professional iOS app reverse engineering platform supporting app decryption, resource extraction, and class method analysis. Helps developers learn architecture design from excellent apps, also supports security testing and vulnerability analysis, providing deep technical support for iOS development.',
          skills: 'iOS reverse engineering, app decryption, resource analysis',
          tech: 'Python, Frida, MachO, Swift, Objective-C, Flask'
        },
        dify: {
          desc: 'Open-source LLM application development platform for visual RAG and Agent workflows',
          details: 'Contributed to the open-source LLM application development platform Dify ecosystem, providing visual workflow orchestration capabilities. Supports RAG knowledge base management, Agent configuration, and multi-model integration, offering low-code solutions for enterprises to quickly build AI applications.',
          skills: 'RAG architecture, Agent development, workflow orchestration',
          tech: 'React, Python, LangChain, Vector Database, LLM API, Docker'
        },
        ragflow: {
          desc: 'Enterprise document processing engine with deep document parsing for RAG solutions',
          details: 'Enterprise-grade document processing and knowledge management system based on deep document parsing technology for precise RAG solutions. Supports parsing PDF, Word, Excel and other document formats, providing semantic search, knowledge graph construction, and intelligent Q&A capabilities.',
          skills: 'Document parsing, knowledge graphs, RAG systems',
          tech: 'Python, Elasticsearch, Vector Database, LangChain, FastAPI, OCR'
        },
        medical: {
          desc: 'Hospital interoperability platform supporting HL7 standards, integrating 100+ hospital systems and data centers',
          details: 'Large-scale hospital interoperability integration platform based on HL7/FHIR standards for data exchange between hospital systems. Integrates 100+ business systems including HIS, LIS, PACS, EMR, establishes a unified data center, enabling patient information sharing and business collaboration.',
          skills: 'Medical system integration, HL7/FHIR standards, data center',
          tech: 'Java, SpringCloud, HL7, FHIR, Oracle, MySQL, Redis'
        },
        cdss: {
          desc: 'Clinical Decision Support System (CDSS) using NLP for intelligent customer service and disease risk prediction',
          details: 'Clinical Decision Support System (CDSS) using NLP technology to build intelligent customer service systems and disease risk prediction models. Supports medical record analysis, diagnostic suggestions, and medication reminders, assisting doctors in improving diagnosis quality and reducing medical risks.',
          skills: 'NLP technology, clinical decision support, risk prediction',
          tech: 'Python, BERT, TensorFlow, FastAPI, MySQL, Medical NLP'
        },
        vod: {
          desc: 'Global interactive advertising platform covering mobile and OTT TV, deployed in US, Europe, Slovenia',
          details: 'Global interactive video advertising platform supporting mobile and OTT TV ad placement and performance analytics. Deployed in multiple countries including the US, Europe, and Slovenia, providing core features such as precision ad targeting, real-time bidding, and data analytics.',
          skills: 'Video advertising systems, global deployment, data analytics',
          tech: 'Java, Go, Redis, Kafka, Elasticsearch, AWS, Docker, Kubernetes'
        },
        blockchain: {
          desc: 'Blockchain exchange development with encryption algorithms and security architecture, completed private social app backend',
          details: 'Participated in blockchain exchange core system development, responsible for trading matching, wallet management, and security risk control modules. Also completed backend development for private social app, integrating end-to-end encrypted communication and privacy protection technologies to ensure user data security.',
          skills: 'Blockchain technology, encryption algorithms, security architecture',
          tech: 'Go, Solidity, Ethereum, PostgreSQL, Redis, Web3.js, Docker'
        },
        smartship: {
          desc: 'Industrial IoT smart power plant using IoT and Big Data for real-time analysis and decision support',
          details: 'Industrial IoT smart ship power plant management system based on IoT and Big Data technologies for real-time monitoring and data analysis of ship equipment. Provides intelligent services such as fault warning, energy efficiency optimization, and maintenance decision support, helping enterprises improve operational efficiency and reduce maintenance costs.',
          skills: 'Industrial IoT, big data analytics, real-time monitoring',
          tech: 'Python, InfluxDB, MQTT, Kafka, FastAPI, React, Grafana'
        },
        tts: {
          desc: 'TTS speech synthesis service with multi-voice, emotional synthesis, and streaming for intelligent customer service',
          details: 'High-performance TTS speech synthesis service supporting multi-voice, emotional synthesis, and streaming output. Applied to intelligent customer service, voice broadcasting, audiobooks and other scenarios, providing natural and smooth voice experience, supporting speech synthesis in multiple languages including Chinese, English, Japanese, and Korean.',
          skills: 'Speech synthesis, streaming output, emotional control',
          tech: 'Python, VITS, FastAPI, WebSocket, Redis, React'
        },
        iot: {
          desc: 'Industrial IoT platform supporting MQTT, time-series databases, and edge computing for device connectivity',
          details: 'Industrial-grade IoT platform supporting MQTT protocol, time-series databases, and edge computing capabilities. Implements core functions including massive device connectivity, real-time data acquisition, and device management, providing stable and reliable data infrastructure for Industry 4.0 scenarios.',
          skills: 'IoT platforms, edge computing, time-series databases',
          tech: 'Python, MQTT, InfluxDB, Edge Computing, FastAPI, React, Docker'
        },
        aigc: {
          desc: 'AIGC content generation platform with image, voice, and text multimodal creation capabilities, supporting AI image generation',
          details: 'Multimodal AIGC content generation platform integrating image, voice, and text creation capabilities. Supports AI image generation, voice synthesis, and text creation, providing users with a one-stop AI creation tool that supports workflow orchestration and batch processing.',
          skills: 'Multimodal AI, image generation, content creation',
          tech: 'Python, Stable Diffusion, TTS, LLM, FastAPI, React, ComfyUI'
        },
      },
      services: {
        label: 'What I Offer',
        title: 'Services',
        subtitle: '20+ years R&D experience, 8+ industry expertise',
        architecture: {
          desc: 'Expert in Linux system architecture with 10+ years of Java/Python development. Skilled in high concurrency, load balancing, and distributed system design. Proficient in Django, Flask, FastAPI, SpringCloud frameworks.',
          details: '20+ years of system architecture experience, expert in Linux kernel-level optimization and system tuning. Specialized in designing high-availability, high-concurrency distributed system architectures, familiar with microservices, service mesh, containerized deployment and other modern architecture patterns. Able to provide architecture evolution solutions from monolithic applications to distributed systems based on business requirements.',
          tech: 'Linux, Docker, Kubernetes, Nginx, HAProxy, Redis, RabbitMQ, Elasticsearch, Prometheus, Grafana'
        },
        backend: {
          desc: '20 years of professional development experience. Expert in PHP, Python, Java, JavaScript, Go, and other languages. Familiar with MySQL, PostgreSQL, Oracle, MongoDB, Redis storage technologies and distributed cloud database applications.',
          details: '20 years of full-stack backend development experience, proficient in PHP, Python, Java, JavaScript, Go and other mainstream programming languages. Deep mastery of MySQL, PostgreSQL, Oracle relational databases and MongoDB, Redis NoSQL databases. Familiar with distributed cloud database applications, able to design high-performance, high-availability data storage solutions.',
          tech: 'Python, Java, Go, PHP, JavaScript, MySQL, PostgreSQL, Oracle, MongoDB, Redis, DynamoDB, SpringCloud, FastAPI'
        },
        bigdata: {
          desc: 'Familiar with Hadoop, Spark, Kafka, Flink big data stack. Built comprehensive analysis platforms and data warehouses based on PostgreSQL. Mastered ETL, CDC data processing methods.',
          details: 'Deep mastery of mainstream big data technology stack including Hadoop, Spark, Kafka, Flink. Possess full-link big data project experience from data collection, storage, processing to analytics. Successfully built comprehensive analysis platforms and data warehouses based on PostgreSQL, mastered ETL, CDC and other data processing methods, able to provide complete big data solutions for enterprises.',
          tech: 'Hadoop, Spark, Kafka, Flink, HBase, Hive, PostgreSQL, Airflow, ETL, CDC, Data Warehousing'
        },
        ai: {
          desc: 'Using machine learning for audio similarity calculation, text-to-speech conversion. Built automatic response and intelligent customer service systems based on NLP. Using BERT language models to solve clinical diagnosis and disease risk prediction.',
          details: '10+ years of AI technology R&D experience covering machine learning, deep learning, NLP and other fields. Using machine learning technology to implement audio similarity calculation, text-to-speech conversion and other functions. Built automatic response and intelligent customer service systems based on NLP technology, using BERT and other pre-trained language models to solve clinical diagnosis and disease risk prediction problems.',
          tech: 'Python, TensorFlow, PyTorch, BERT, GPT, NLP, Machine Learning, Deep Learning, OpenAI API, LangChain'
        },
        management: {
          desc: '10+ years of R&D management experience with Scrum agile development practice. Led teams of 50-200 people. Possess global project management experience with both strategic vision and hands-on technical expertise.',
          details: '10+ years of R&D management experience, expert in Scrum agile development methodology and practice. Led R&D teams of 50-200 people, possessing global project management experience for large-scale projects. Capable of project planning and resource allocation from a strategic level, while also diving into detailed technical guidance. Skilled in team building, personnel development, and performance management, effectively improving overall team战斗力.',
          tech: 'Agile, Scrum, Kanban, Project Management, Team Leadership, Product Planning, Resource Allocation'
        },
        consulting: {
          desc: 'Providing cutting-edge technical guidance, product strategic planning, R&D team management, technical architecture review, and personnel growth coaching for multiple enterprises.',
          details: 'Providing professional technical consulting services for multiple well-known enterprises, covering cutting-edge technical guidance, product strategic planning, R&D team management, technical architecture review, personnel development coaching and other aspects. With rich industry experience and technical accumulation, able to help enterprises identify technical opportunities, avoid technical risks, improve R&D efficiency, and achieve collaborative development of technology and business.',
          tech: 'Technical Consulting, Architecture Review, Product Strategy, Team Management, Talent Development, Technology Assessment'
        },
        security: {
          desc: 'Software security and compliance solutions, including code audits, model security detection, industry security standard construction, and medical AI product compliance assurance.',
          details: 'Providing comprehensive software security and compliance solutions, covering code security audits, AI model security detection, industry security standard construction and other dimensions. Specialized in compliance assurance for medical AI products, familiar with domestic and international medical industry standards and regulatory requirements, able to help enterprises build secure and reliable AI product systems.',
          tech: 'Security Audit, Penetration Testing, OWASP, ISO 27001, HIPAA, Model Security, Medical AI Compliance'
        },
        industry: {
          desc: 'Deep expertise in Medical AI, IoT, Big Data, Digital Twins, Blockchain, and other industries. Successfully delivered enterprise products for smart power plants, smart shipping, smart ports, etc.',
          details: 'Deep expertise in Medical AI, IoT, Big Data, Digital Twins, Blockchain and other industry fields, with rich industry knowledge and technical accumulation. Successfully delivered large-scale enterprise products including smart power plants, smart shipping, smart ports, able to deeply understand industry pain points and provide targeted technical solutions.',
          tech: 'Medical AI, IoT, Big Data, Digital Twins, Blockchain, Industrial Internet, Smart Manufacturing, Edge Computing'
        },
      },
      footer: { slogan: 'Connecting creativity with code', rights: 'All rights reserved' },
      theme: {
        toggle: 'Toggle theme',
        select: 'Select theme',
        dark: 'Dark',
        light: 'Light',
        ocean: 'Ocean',
        forest: 'Forest',
        sunset: 'Sunset',
        aurora: 'Aurora',
        mono: 'Mono',
        cherry: 'Cherry',
        lavender: 'Lavender',
        amber: 'Amber',
        emerald: 'Emerald',
        sky: 'Sky',
        rose: 'Rose',
        midnight: 'Midnight',
      }
    }
  },
  es: {
    translation: {
      nav: { about: 'Acerca de', projects: 'Proyectos', services: 'Servicios', contact: 'Contacto' },
      hero: {
        badge: 'Disponible para Proyectos',
        title: 'Desarrollador Full Stack / Arquitecto de Soluciones IA',
        description: 'Desde el desarrollo de aplicaciones LLM hasta la IA generativa, especializándome en implementar tecnologías de IA de vanguardia en soluciones escalables.',
      },
      stats: { years: 'Años Exp.', projects: 'Proyectos', innovation: 'Innovación' },
      projects: {
        label: 'Trabajos Seleccionados',
        title: 'Proyectos Destacados',
        subtitle: 'Desde la traducción en tiempo real hasta la educación con IA',
        wetalk: { desc: 'Sistema de traducción de voz en tiempo real que soporta 50+ idiomas con latencia <300ms' },
        vr: { desc: 'Plataforma de aprendizaje de inglés VR con conversaciones potenciadas por IA para una experiencia inmersiva' },
        comfy: { desc: 'Solución de integración del ecosistema ComfyUI que soporta nodos personalizados y orquestación de flujos de trabajo' },
        ecom: { desc: 'Sistema de comercio electrónico inteligente con integración WeChat, gestión de productos y herramientas de marketing' },
        irank: { desc: 'Rastreador de clasificaciones de App Store con análisis en tiempo real en múltiples países' },
        appsniff: { desc: 'Herramienta de ingeniería inversa de aplicaciones iOS que ayuda a los desarrolladores a entender la estructura de la aplicación' },
        dify: { desc: 'Plataforma de desarrollo de aplicaciones LLM de código abierto para flujos de trabajo RAG y Agent visuales' },
        ragflow: { desc: 'Motor de procesamiento de documentos empresariales con análisis profundo de documentos para soluciones RAG' },
        ttsservice: { desc: 'Servicio TTS de alto rendimiento con múltiples voces, síntesis emocional y salida en streaming' },
        fastelm: { desc: 'Motor de inferencia ELM basado en ONNX eficiente con optimización de CPU y implementación de baja latencia' },
        medicalai: { desc: 'Asistente de IA médica con base de conocimientos profesional y cumplimiento para soporte de decisiones clínicas' },
        onnxguard: { desc: 'Herramienta de seguridad de modelos ONNX que detecta ataques adversarios y puertas traseras de modelos' },
        contract: { desc: 'Sistema de gestión de contratos inteligentes con OCR, extracción de cláusulas y alertas de riesgo' },
        saas: { desc: 'Solución de plataforma SaaS con facturación de suscripción, arquitectura multi-tenant y control de acceso' },
        codeaudit: { desc: 'Herramienta de análisis de código estático que detecta automáticamente vulnerabilidades comunes y riesgos de seguridad' },
        aigc: { desc: 'Plataforma de generación de contenido AIGC que integra capacidades de creación multimodal de imagen, voz y texto' },
      },
      services: {
        label: 'Lo Que Ofrezco',
        title: 'Servicios',
        subtitle: 'Basado en la experiencia de 18+ proyectos',
        llm: 'Desarrollo de aplicaciones inteligentes potenciadas por LLM, incluyendo bases de conocimiento RAG, Agentes de IA y orquestación de flujos de trabajo.',
        genai: 'Soluciones de generación de contenido AIGC, incluyendo generación de imágenes con IA, TTS y plataformas de creación de contenido multimodal.',
        enterprise: 'Desarrollo empresarial full-stack, enfocado en comercio electrónico, plataformas SaaS y arquitectura de alta disponibilidad.',
        security: 'Soluciones de seguridad y cumplimiento de software, incluyendo auditorías de código, seguridad de modelos y consultoría de cumplimiento de la industria.',
        consulting: 'Consultoría de arquitectura y técnica de IA, ayudando a los equipos a evaluar opciones tecnológicas, optimizar la arquitectura y mejorar la eficiencia.',
        optimization: 'Ajuste de rendimiento y refactorización del sistema, incluyendo optimización de código, optimización de bases de datos, estrategias de caché y aceleración CDN.',
        training: 'Capacitación técnica corporativa que cubre el desarrollo de aplicaciones LLM, frontend React/Vue y backend Python.',
        maintenance: 'Servicios de operaciones y alojamiento de aplicaciones, incluyendo CI/CD, monitoreo, análisis de registros y autoescalado.',
      },
      footer: { slogan: 'Conectando la creatividad con código', rights: 'Todos los derechos reservados' },
      theme: {
        toggle: 'Cambiar tema',
        select: 'Seleccionar tema',
        dark: 'Oscuro',
        light: 'Claro',
        ocean: 'Océano',
        forest: 'Bosque',
        sunset: 'Atardecer',
        aurora: 'Aurora',
        mono: 'Mono',
        cherry: 'Cereza',
        lavender: 'Lavanda',
        amber: 'Ámbar',
        emerald: 'Esmeralda',
        sky: 'Cielo',
        rose: 'Rosa',
        midnight: 'Medianoche',
      }
    }
  },
  ar: {
    translation: {
      nav: { about: 'حول', projects: 'مشاريع', services: 'خدمات', contact: 'اتصل' },
      hero: {
        badge: 'متاح للمشاريع',
        title: 'مطور كامل المكدس / مهندس حلول الذكاء الاصطناعي',
        description: 'من تطوير تطبيقات LLM إلى الذكاء الاصطناعي التوليدي، متخصص في نشر تقنيات الذكاء الاصطناعي الرائدة في حلول قابلة للتوسع.',
      },
      stats: { years: 'سنوات خبرة', projects: 'مشاريع', innovation: 'الابتكار' },
      projects: {
        label: 'أعمال مختارة',
        title: 'مشاريع مميزة',
        subtitle: 'من الترجمة الفورية إلى التعليم بالذكاء الاصطناعي',
        wetalk: { desc: 'نظام ترجمة صوتية فورية يدعم 50+ لغة بزمن استجابة أقل من 300 مللي ثانية' },
        vr: { desc: 'منصة تعلم اللغة الإنجليزية VR مع محادثات مدعومة بالذكاء الاصطناعي لتجربة لغوية غامرة' },
        comfy: { desc: 'حل تكامل نظام ComfyUI يدعم العقد المخصصة وتنسيق سير العمل' },
        ecom: { desc: 'نظام تجارة إلكترونية ذكي مع تكامل WeChat وإدارة المنتجات وأدوات التسويق' },
        irank: { desc: 'أداة تتبع تصنيفات App Store مع تحليل فوري عبر دول متعددة' },
        appsniff: { desc: 'أداة الهندسة العكسية لتطبيقات iOS تساعد المطورين على فهم بنية التطبيق' },
        dify: { desc: 'منصة تطوير تطبيقات LLM مفتوحة المصدر لسير عمل RAG و Agent المرئي' },
        ragflow: { desc: 'محرك معالجة المستندات للمؤسسات مع تحليل عميق للمستندات لحلول RAG' },
        ttsservice: { desc: 'خدمة TTS عالية الأداء مع أصوات متعددة وتوليد عاطفي وإخراج متدفق' },
        fastelm: { desc: 'محرك استنتاج ELM فعال يعتمد على ONNX مع تحسين وحدة المعالجة المركزية ونشر منخفض الكمون' },
        medicalai: { desc: 'مساعد ذكاء اصطناعي طبي مع قاعدة معرفة مهنية والامتثال لدعم القرارات السريرية' },
        onnxguard: { desc: 'أداة أمان نماذج ONNX تكتشف الهجمات العدائية والأبواب الخلفية للنماذج' },
        contract: { desc: 'نظام إدارة عقود ذكي مع OCR واستخراج البنود وتنبيهات المخاطر' },
        saas: { desc: 'حل منصة SaaS مع فوترة اشتراك وبنية متعددة المستأجرين والتحكم في الوصول' },
        codeaudit: { desc: 'أداة تحليل كود ثابت تكتشف تلقائيًا الثغرات الشائعة والمخاطر الأمنية' },
        aigc: { desc: 'منصة إنشاء محتوى AIGC تدمج قدرات إنشاء متعددة الوسائط للصوت والصوت والنص' },
      },
      services: {
        label: 'ما أقدمه',
        title: 'الخدمات',
        subtitle: 'بناءً على خبرة 18+ مشروع',
        llm: 'تطوير تطبيقات ذكية مدعومة بـ LLM، بما في ذلك قواعد المعرفة RAG ووكلاء الذكاء الاصطناعي وتنسيق سير العمل.',
        genai: 'حلول إنشاء محتوى AIGC، بما في ذلك إنشاء صور بالذكاء الاصطناعي وTTS ومنصات إنشاء محتوى متعدد الوسائط.',
        enterprise: 'تطوير مؤسسي كامل المكدس، يركز على التجارة الإلكترونية ومنصات SaaS وبنية توفر عالية.',
        security: 'حلول أمان وامتثال البرمجيات، بما في ذلك تدقيقات الكود وأمان النماذج واستشارات الامتثال الصناعي.',
        consulting: 'استشارات البنية والتقنية للذكاء الاصطناعي، تساعد الفرق على تقييم الخيارات التقنية وتحسين البنية وزيادة الكفاءة.',
        optimization: 'ضبط الأداء وإعادة هيكلة النظام، بما في ذلك تحسين الكود وتحسين قواعد البيانات واستراتيجيات التخزين المؤقت وتسريع CDN.',
        training: 'تدريب تقني مؤسسي يغطي تطوير تطبيقات LLM وواجهة React/Vue والواجهة الخلفية Python.',
        maintenance: 'خدمات التشغيل والاستضافة للتطبيقات، بما في ذلك CI/CD والمراقبة وتحليل السجلات والتوسع التلقائي.',
      },
      footer: { slogan: 'ربط الإبداع بالكود', rights: 'جميع الحقوق محفوظة' },
      theme: {
        toggle: 'تبديل المظهر',
        select: 'اختر المظهر',
        dark: 'داكن',
        light: 'فاتح',
        ocean: 'المحيط',
        forest: 'الغابة',
        sunset: 'الغروب',
        aurora: 'الشفق القطبي',
        mono: 'أحادي',
        cherry: 'الكرز',
        lavender: 'الخزامى',
        amber: 'العنبر',
        emerald: 'الزمرد',
        sky: 'السماء',
        rose: 'الوردة',
        midnight: 'منتصف الليل',
      }
    }
  },
  ru: {
    translation: {
      nav: { about: 'О нас', projects: 'Проекты', services: 'Услуги', contact: 'Контакты' },
      hero: {
        badge: 'Доступен для проектов',
        title: 'Full Stack разработчик / Архитектор AI-решений',
        description: 'От разработки LLM-приложений до генеративного ИИ, специализируюсь на внедрении передовых ИИ-технологий в масштабируемые решения.',
      },
      stats: { years: 'Лет опыта', projects: 'Проектов', innovation: 'Инновации' },
      projects: {
        label: 'Избранные работы',
        title: 'Избранные проекты',
        subtitle: 'От синхронного перевода до ИИ-образования',
        wetalk: { desc: 'Система синхронного голосового перевода с поддержкой 50+ языков и задержкой <300мс' },
        vr: { desc: 'VR-платформа для изучения английского с ИИ-диалогами для погружения в языковую среду' },
        comfy: { desc: 'Решение для интеграции экосистемы ComfyUI с поддержкой пользовательских узлов и оркестрации рабочих процессов' },
        ecom: { desc: 'Умная система электронной коммерции с интеграцией WeChat, управлением продуктами и маркетинговыми инструментами' },
        irank: { desc: 'Трекер рейтингов App Store с анализом в реальном времени по нескольким странам' },
        appsniff: { desc: 'Инструмент реверс-инжиниринга iOS-приложений, помогающий разработчикам понять структуру приложения' },
        dify: { desc: 'Открытая платформа разработки LLM-приложений для визуального RAG и Agent' },
        ragflow: { desc: 'Корпоративный движок обработки документов с глубоким анализом для RAG-решений' },
        ttsservice: { desc: 'Высокопроизводительный сервис TTS с множеством голосов, эмоциональным синтезом и потоковым выводом' },
        fastelm: { desc: 'Эффективный движок вывода ELM на основе ONNX с оптимизацией CPU и низким временем отклика' },
        medicalai: { desc: 'Медицинский ИИ-ассистент с профессиональной базой знаний и соблюдением стандартов для поддержки клинических решений' },
        onnxguard: { desc: 'Инструмент безопасности моделей ONNX, обнаруживающий состязательные атаки и бэкдоры моделей' },
        contract: { desc: 'Система умного управления контрактами с OCR, извлечением пунктов и предупреждениями о рисках' },
        saas: { desc: 'Решение SaaS-платформы с подпиской, мультитенантной архитектурой и контролем доступа' },
        codeaudit: { desc: 'Инструмент статического анализа кода, автоматически обнаруживающий общие уязвимости и риски безопасности' },
        aigc: { desc: 'Платформа генерации контента AIGC, интегрирующая возможности мультимодального создания изображений, голоса и текста' },
      },
      services: {
        label: 'Что я предлагаю',
        title: 'Услуги',
        subtitle: 'На основе опыта 18+ проектов',
        llm: 'Разработка интеллектуальных приложений на базе LLM, включая базы знаний RAG, AI-агентов и оркестрацию рабочих процессов.',
        genai: 'Решения для генерации контента AIGC, включая генерацию изображений ИИ, TTS и платформы мультимодального создания контента.',
        enterprise: 'Полнофункциональная корпоративная разработка, фокус на электронной коммерции, SaaS-платформах и высокодоступной архитектуре.',
        security: 'Решения по безопасности и соответствию, включая аудит кода, безопасность моделей и консультации по отраслевым стандартам.',
        consulting: 'Консультации по архитектуре и технологиям ИИ, помощь командам в выборе технологий, оптимизации архитектуры и повышении эффективности.',
        optimization: 'Настройка производительности и рефакторинг систем, включая оптимизацию кода, оптимизацию баз данных, стратегии кэширования и ускорение CDN.',
        training: 'Корпоративное техническое обучение, охватывающее разработку LLM-приложений, frontend React/Vue и backend Python.',
        maintenance: 'Службы эксплуатации и хостинга приложений, включая CI/CD, мониторинг, анализ журналов и автомасштабирование.',
      },
      footer: { slogan: 'Соединяя креативность с кодом', rights: 'Все права защищены' },
      theme: {
        toggle: 'Переключить тему',
        select: 'Выбрать тему',
        dark: 'Темная',
        light: 'Светлая',
        ocean: 'Океан',
        forest: 'Лес',
        sunset: 'Закат',
        aurora: 'Сияние',
        mono: 'Моно',
        cherry: 'Вишня',
        lavender: 'Лаванда',
        amber: 'Янтарь',
        emerald: 'Изумруд',
        sky: 'Небо',
        rose: 'Роза',
        midnight: 'Полночь',
      }
    }
  },
  ja: {
    translation: {
      nav: { about: 'について', projects: 'プロジェクト', services: 'サービス', contact: 'お問い合わせ' },
      hero: {
        badge: 'プロジェクト受付中',
        title: 'フルスタック開発者 / AIソリューションアーキテクト',
        description: 'LLMアプリケーション開発から生成AIまで、最先端のAI技術をスケーラブルなソリューションとして展開することに特化しています。',
      },
      stats: { years: '年の経験', projects: 'プロジェクト', innovation: 'イノベーション' },
      projects: {
        label: '選択された作品',
        title: '注目プロジェクト',
        subtitle: 'リアルタイム翻訳からAI教育まで',
        wetalk: { desc: '50以上の言語をサポートし、エンドツーエンド遅延300ミリ秒未満のリアルタイム音声翻訳システム' },
        vr: { desc: 'AI対話を搭載した没入型言語学習体験のためのVR英語学習プラットフォーム' },
        comfy: { desc: 'カスタムノードとワークフローオーケストレーションをサポートするComfyUIエコシステム統合ソリューション' },
        ecom: { desc: 'WeChat統合、商品管理、マーケティングツールを備えたスマートECシステム' },
        irank: { desc: '複数の国でのリアルタイム分析をサポートするApp Storeランキングトラッカー' },
        appsniff: { desc: '開発者がアプリ構造を理解するのを助けるiOSアプリリバースエンジニアリングツール' },
        dify: { desc: '視覚的なRAGとエージェントワークフローのためのオープンソースLLMアプリケーション開発プラットフォーム' },
        ragflow: { desc: 'RAGソリューションのためのディープドキュメント解析を備えたエンタープライズドキュメント処理エンジン' },
        ttsservice: { desc: '複数の音声、感情合成、ストリーミング出力をサポートする高性能TTSサービス' },
        fastelm: { desc: 'CPU最適化と低レイテンシデプロイメントを備えたONNXベースの効率的なELM推論エンジン' },
        medicalai: { desc: '臨床意思決定サポートのための専門知識ベースとコンプライアンスを備えた医療AIアシスタント' },
        onnxguard: { desc: '敵対的攻撃とモデルバックドアを検出するONNXモデルセキュリティツール' },
        contract: { desc: 'OCR、条項抽出、リスクアラートを備えたスマート契約管理システム' },
        saas: { desc: 'サブスクリプション課金、マルチテナントアーキテクチャ、アクセス制御を備えたSaaSプラットフォームソリューション' },
        codeaudit: { desc: '一般的な脆弱性とセキュリティリスクを自動検出する静的コード分析ツール' },
        aigc: { desc: '画像、音声、テキストのマルチモーダル作成機能を統合したAIGCコンテンツ生成プラットフォーム' },
      },
      services: {
        label: '提供するもの',
        title: 'サービス',
        subtitle: '18以上のプロジェクトの経験に基づいて',
        llm: 'RAGナレッジベース、AIエージェント、ワークフローオーケストレーションを含む、LLMを活用したインテリジェントアプリケーション開発。',
        genai: 'AI画像生成、TTS、マルチモーダルコンテンツ作成プラットフォームを含むAIGCコンテンツ生成ソリューション。',
        enterprise: 'Eコマース、SaaSプラットフォーム、高可用性アーキテクチャに焦点を当てたフルスタックエンタープライズ開発。',
        security: 'コード監査、モデルセキュリティ、業界コンプライアンスコンサルティングを含むソフトウェアセキュリティとコンプライアンスソリューション。',
        consulting: 'AIアーキテクチャと技術コンサルティング。技術選択の評価、アーキテクチャの最適化、効率の向上を支援します。',
        optimization: 'コード最適化、データベース最適化、キャッシュ戦略、CDNアクセラレーションを含むシステムパフォーマンスチューニングとリファクタリング。',
        training: 'LLMアプリケーション開発、React/Vueフロントエンド、Pythonバックエンドをカバーする企業向け技術トレーニング。',
        maintenance: 'CI/CD、モニタリング、ログ分析、自動スケーリングを含むアプリケーション運用とホスティングサービス。',
      },
      footer: { slogan: '創造性をコードでつなぐ', rights: 'すべての権利を保有' },
      theme: {
        toggle: 'テーマを切り替え',
        select: 'テーマを選択',
        dark: 'ダーク',
        light: 'ライト',
        ocean: 'オーシャン',
        forest: 'フォレスト',
        sunset: 'サンセット',
        aurora: 'オーロラ',
        mono: 'モノ',
        cherry: 'チェリー',
        lavender: 'ラベンダー',
        amber: 'アンバー',
        emerald: 'エメラルド',
        sky: 'スカイ',
        rose: 'ローズ',
        midnight: 'ミッドナイト',
      }
    }
  },
  fr: {
    translation: {
      nav: { about: 'À propos', projects: 'Projets', services: 'Services', contact: 'Contact' },
      hero: {
        badge: 'Disponible pour les projets',
        title: 'Développeur Full Stack / Architecte de solutions IA',
        description: 'Du développement d\'applications LLM à l\'IA générative, spécialisé dans le déploiement de technologies IA de pointe dans des solutions évolutives.',
      },
      stats: { years: 'Années d\'expérience', projects: 'Projets', innovation: 'Innovation' },
      projects: {
        label: 'Travaux sélectionnés',
        title: 'Projets en vedette',
        subtitle: 'De la traduction en temps réel à l\'éducation IA',
        wetalk: { desc: 'Système de traduction vocale en temps réel supportant 50+ langues avec une latence <300ms' },
        vr: { desc: 'Plateforme d\'apprentissage de l\'anglais VR avec conversations alimentées par l\'IA pour une expérience linguistique immersive' },
        comfy: { desc: 'Solution d\'intégration de l\'écosystème ComfyUI supportant les nœuds personnalisés et l\'orchestration de flux de travail' },
        ecom: { desc: 'Système de commerce électronique intelligent avec intégration WeChat, gestion des produits et outils marketing' },
        irank: { desc: 'Suiveur des classements App Store avec analyse en temps réel sur plusieurs pays' },
        appsniff: { desc: 'Outil d\'ingénierie inverse d\'applications iOS aidant les développeurs à comprendre la structure des applications' },
        dify: { desc: 'Plateforme de développement d\'applications LLM open source pour les flux de travail RAG et Agent visuels' },
        ragflow: { desc: 'Moteur de traitement de documents d\'entreprise avec analyse approfondie de documents pour les solutions RAG' },
        ttsservice: { desc: 'Service TTS haute performance avec multi-voix, synthèse émotionnelle et sortie en continu' },
        fastelm: { desc: 'Moteur d\'inférence ELM efficace basé sur ONNX avec optimisation CPU et déploiement à faible latence' },
        medicalai: { desc: 'Assistant IA médicale avec base de connaissances professionnelle et conformité pour le support des décisions cliniques' },
        onnxguard: { desc: 'Outil de sécurité de modèles ONNX détectant les attaques adverses et les portes dérobées de modèles' },
        contract: { desc: 'Système de gestion de contrats intelligents avec OCR, extraction de clauses et alertes de risque' },
        saas: { desc: 'Solution de plateforme SaaS avec facturation d\'abonnement, architecture multi-tenant et contrôle d\'accès' },
        codeaudit: { desc: 'Outil d\'analyse de code statique détectant automatiquement les vulnérabilités courantes et les risques de sécurité' },
        aigc: { desc: 'Plateforme de génération de contenu AIGC intégrant des capacités de création multimodales d\'image, de voix et de texte' },
      },
      services: {
        label: 'Ce que j\'offre',
        title: 'Services',
        subtitle: 'Basé sur l\'expérience de 18+ projets',
        llm: 'Développement d\'applications intelligentes alimentées par LLM, y compris les bases de connaissances RAG, les Agents IA et l\'orchestration de flux de travail.',
        genai: 'Solutions de génération de contenu AIGC, y compris la génération d\'images IA, TTS et les plateformes de création de contenu multimodal.',
        enterprise: 'Développement d\'entreprise full-stack, axé sur le commerce électronique, les plateformes SaaS et l\'architecture haute disponibilité.',
        security: 'Solutions de sécurité et de conformité logicielles, y compris les audits de code, la sécurité des modèles et les conseils de conformité industrielle.',
        consulting: 'Conseil en architecture et technique IA, aidant les équipes à évaluer les choix technologiques, optimiser l\'architecture et améliorer l\'efficacité.',
        optimization: 'Réglage des performances et refactorisation du système, y compris l\'optimisation du code, l\'optimisation de base de données, les stratégies de cache et l\'accélération CDN.',
        training: 'Formation technique corporative couvrant le développement d\'applications LLM, le frontend React/Vue et le backend Python.',
        maintenance: 'Services d\'opérations et d\'hébergement d\'applications, y compris CI/CD, surveillance, analyse de logs et mise à l\'échelle automatique.',
      },
      footer: { slogan: 'Connecter la créativité avec le code', rights: 'Tous droits réservés' },
      theme: {
        toggle: 'Changer de thème',
        select: 'Sélectionner le thème',
        dark: 'Sombre',
        light: 'Clair',
        ocean: 'Océan',
        forest: 'Forêt',
        sunset: 'Coucher de soleil',
        aurora: 'Aurore',
        mono: 'Mono',
        cherry: 'Cerise',
        lavender: 'Lavande',
        amber: 'Ambre',
        emerald: 'Émeraude',
        sky: 'Ciel',
        rose: 'Rose',
        midnight: 'Minuit',
      }
    }
  },
  de: {
    translation: {
      nav: { about: 'Über', projects: 'Projekte', services: 'Dienstleistungen', contact: 'Kontakt' },
      hero: {
        badge: 'Verfügbar für Projekte',
        title: 'Full Stack Entwickler / AI-Lösungsarchitekt',
        description: 'Von LLM-Anwendungsentwicklung bis generativer KI, spezialisiert auf die Bereitstellung modernster KI-Technologien in skalierbaren Lösungen.',
      },
      stats: { years: 'Jahre Erfahrung', projects: 'Projekte', innovation: 'Innovation' },
      projects: {
        label: 'Ausgewählte Arbeiten',
        title: 'Ausgewählte Projekte',
        subtitle: 'Von Echtzeitübersetzung bis KI-Bildung',
        wetalk: { desc: 'Echtzeit-Sprachübersetzungssystem, das 50+ Sprachen mit <300ms End-zu-End-Latenz unterstützt' },
        vr: { desc: 'VR-Englisch-Lernplattform mit KI-gestützten Gesprächen für ein immersives Spracherlebnis' },
        comfy: { desc: 'ComfyUI-Ökosystem-Integrationslösung, die benutzerdefinierte Knoten und Workflow-Orchestrierung unterstützt' },
        ecom: { desc: 'Intelligentes E-Commerce-System mit WeChat-Integration, Produktmanagement und Marketing-Tools' },
        irank: { desc: 'App Store-Ranking-Tracker mit Echtzeitanalyse in mehreren Ländern' },
        appsniff: { desc: 'iOS-App-Reverse-Engineering-Tool, das Entwicklern hilft, die App-Struktur zu verstehen' },
        dify: { desc: 'Open-Source-LLM-Anwendungsentwicklungsplattform für visuelle RAG- und Agent-Workflows' },
        ragflow: { desc: 'Unternehmens-Dokumentenverarbeitungs-Engine mit tiefer Dokumentenanalyse für RAG-Lösungen' },
        ttsservice: { desc: 'Hochleistungs-TTS-Service mit mehreren Stimmen, emotionaler Synthese und Streaming-Ausgabe' },
        fastelm: { desc: 'Effizienter ONNX-basierter ELM-Inferenz-Engine mit CPU-Optimierung und geringer Latenz' },
        medicalai: { desc: 'Medizinischer KI-Assistent mit professioneller Wissensbasis und Compliance für klinische Entscheidungsunterstützung' },
        onnxguard: { desc: 'ONNX-Modell-Sicherheits-Tool, das Adversarial-Angriffe und Modell-Backdoors erkennt' },
        contract: { desc: 'Intelligentes Vertragsmanagementsystem mit OCR, Klauselauszug und Risikowarnungen' },
        saas: { desc: 'SaaS-Plattformlösung mit Abrechnung, Multi-Tenant-Architektur und Zugriffssteuerung' },
        codeaudit: { desc: 'Statisches Code-Analyse-Tool, das automatisch häufige Schwachstellen und Sicherheitsrisiken erkennt' },
        aigc: { desc: 'AIGC-Inhaltserstellungsplattform, die Bild-, Sprach- und Text-Multimodal-Erstellungsfunktionen integriert' },
      },
      services: {
        label: 'Was ich biete',
        title: 'Dienstleistungen',
        subtitle: 'Basierend auf 18+ Projekterfahrung',
        llm: 'KI-gestützte intelligente Anwendungsentwicklung, einschließlich RAG-Wissensdatenbanken, KI-Agenten und Workflow-Orchestrierung.',
        genai: 'AIGC-Inhaltserstellungslösungen, einschließlich KI-Bildgenerierung, TTS und multimodale Inhalterstellungsplattformen.',
        enterprise: 'Full-Stack-Unternehmensentwicklung, Fokus auf E-Commerce, SaaS-Plattformen und Hochverfügbarkeitsarchitektur.',
        security: 'Software-Sicherheits- und Compliance-Lösungen, einschließlich Code-Audits, Modellsicherheit und Industriestandard-Compliance-Beratung.',
        consulting: 'KI-Architektur- und Technologieberatung, hilft Teams bei der Bewertung von Technologieentscheidungen, Optimierung der Architektur und Verbesserung der Effizienz.',
        optimization: 'Systemleistungsoptimierung und Refactoring, einschließlich Code-Optimierung, Datenbankoptimierung, Caching-Strategien und CDN-Beschleunigung.',
        training: 'Unternehmens-Technikschulung, die LLM-Anwendungsentwicklung, React/Vue-Frontend und Python-Backend abdeckt.',
        maintenance: 'Anwendungs- und Hosting-Services, einschließlich CI/CD, Überwachung, Protokollanalyse und automatisches Skalieren.',
      },
      footer: { slogan: 'Kreativität mit Code verbinden', rights: 'Alle Rechte vorbehalten' },
      theme: {
        toggle: 'Design ändern',
        select: 'Design auswählen',
        dark: 'Dunkel',
        light: 'Hell',
        ocean: 'Ozean',
        forest: 'Wald',
        sunset: 'Sonnenuntergang',
        aurora: 'Polarlicht',
        mono: 'Mono',
        cherry: 'Kirsche',
        lavender: 'Lavendel',
        amber: 'Bernstein',
        emerald: 'Smaragd',
        sky: 'Himmel',
        rose: 'Rose',
        midnight: 'Mitternacht',
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
