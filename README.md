# zlinks.cc

个人网站 - React + Vite + Hono + Cloudflare Workers

## 技术栈

- **前端**: React 18 + Vite 5 + React Router + i18next
- **样式**: Tailwind CSS + CSS Variables（主题系统）
- **后端**: Hono 框架运行在 Cloudflare Workers
- **部署**: Cloudflare Pages + GitHub Actions CI/CD

## 特性

- 🎨 7 种主题切换（暗夜/白昼/深海/森林/日落/极光/黑白）
- 🌍 8 语言国际化支持（中/英/西/阿/俄/日/法/德）
- 📱 响应式设计，支持移动端
- ⚡ Vite 快速构建和热更新
- 🔧 Hono 轻量级后端 API
- 🚀 GitHub Actions 自动部署

## 开发

```bash
# 安装依赖
npm install

# 开发模式（前端）
npm run dev

# 构建
npm run build

# 开发模式（后端）
npm run dev:backend

# 部署
npm run deploy
```

## 项目结构

```
zlinks-cc/
├── frontend/          # React + Vite 前端
│   ├── src/
│   │   ├── components/   # React 组件
│   │   ├── hooks/        # 自定义 Hooks
│   │   ├── locales/      # i18n 配置
│   │   ├── styles/       # 全局样式
│   │   └── App.jsx       # 主应用
│   └── index.html
├── backend/           # Hono + Cloudflare Workers
│   └── src/
│       └── index.js      # API 入口
├── .github/           # GitHub Actions
├── package.json       # 根 package.json
└── wrangler.toml      # Cloudflare 配置
```

## 环境变量

在 GitHub Secrets 中设置：

- `CLOUDFLARE_API_TOKEN` - Cloudflare API Token
- `CLOUDFLARE_ACCOUNT_ID` - Cloudflare Account ID

## License

MIT
