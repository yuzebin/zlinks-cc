# 自动部署配置说明

## GitHub Actions 自动部署

本项目已配置 GitHub Actions，当代码 push 到 `main` 分支时，会自动部署到 Cloudflare Pages。

## 配置步骤

### 1. 获取 Cloudflare Account ID

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 在右侧边栏找到 **Account ID**，复制备用

### 2. 创建 Cloudflare API Token

1. 进入 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens) 页面
2. 点击 **Create Token**
3. 选择 **Custom token**
4. 配置权限：
   - **Token name**: `GitHub Actions Deploy`
   - **Permissions**:
     - `Cloudflare Pages` > `Edit`
   - **Account Resources**: Include > 你的账户
   - **Zone Resources**: All zones（或指定域名）
5. 点击 **Continue to summary** > **Create Token**
6. **复制 Token**（只显示一次）

### 3. 配置 GitHub Secrets

1. 打开 GitHub 仓库页面
2. 进入 **Settings** > **Secrets and variables** > **Actions**
3. 添加以下 Secrets：

| Secret Name | Value |
|-------------|-------|
| `CLOUDFLARE_API_TOKEN` | 步骤2创建的 API Token |
| `CLOUDFLARE_ACCOUNT_ID` | 步骤1获取的 Account ID |

### 4. 验证部署

1. 本地修改代码并 push 到 main 分支
2. 进入 GitHub 仓库的 **Actions** 标签页
3. 查看部署状态，成功后访问：`https://me.zlinks.cc`

## 手动触发部署

在 GitHub 仓库页面：
1. 进入 **Actions** 标签页
2. 选择 **Deploy to Cloudflare Pages** 工作流
3. 点击 **Run workflow**

## 常见问题

### 部署失败：API Token 无效
- 检查 Token 是否有 `Cloudflare Pages:Edit` 权限
- 确认 Token 未过期

### 部署成功但页面未更新
- Cloudflare Pages 可能有缓存，等待 1-2 分钟
- 检查 Cloudflare Dashboard 的部署日志

### 自定义域名
在 Cloudflare Pages 项目设置中配置：
1. 进入 **Pages** > **zlinks-cc** > **Custom domains**
2. 添加 `me.zlinks.cc`
3. 按提示配置 DNS
