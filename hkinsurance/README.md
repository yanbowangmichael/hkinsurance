# 香港保险分析工具

一个用于分析和比较香港保险产品的静态网站工具。

## 功能特点

- 📊 **收益计算器**：根据保费、年期、分红实现率计算预期收益
- 📈 **产品对比**：四大保险公司（友邦、保诚、永明、宏利）产品对比
- 🏢 **公司分析**：分红实现率数据、情景模拟、财务实力对比
- 📚 **知识库**：专业术语解释、监管新规、查询链接

## 技术栈

- 纯 HTML + CSS + JavaScript
- 响应式设计，支持移动端
- 无需后端，完全离线可用

## 部署到 Netlify

### 方法一：拖拽部署（最简单）

1. 将整个 `hkinsurance` 文件夹压缩成 ZIP 文件
2. 访问 [Netlify Drop](https://app.netlify.com/drop)
3. 拖拽 ZIP 文件到页面上
4. 完成！获得一个在线链接

### 方法二：Git 部署（推荐）

1. 创建 GitHub/GitLab 仓库
2. 上传这些文件到仓库
3. 在 Netlify 选择 "Import from Git"
4. 连接仓库并部署

### 方法三：Netlify CLI

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy --prod --dir=hkinsurance
```

## 文件结构

```
hkinsurance/
├── index.html          # 首页/收益计算器
├── compare.html        # 产品对比
├── analysis.html       # 公司分析
├── knowledge.html      # 知识库
├── _redirects          # Netlify 路由配置
└── README.md           # 本文件
```

## 数据来源

- 2025年各保险公司分红实现率公开数据
- 产品说明书和利益说明文件
- 香港保险业监管局（IA）公开信息

## 免责声明

本工具仅供参考，数据来源于公开信息，不构成任何投资建议。投保前请咨询专业理财顾问，并仔细阅读产品说明书。

## 更新记录

- 2025年：初始版本发布
