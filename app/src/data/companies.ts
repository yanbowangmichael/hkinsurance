import type { CompanyData, CompanyKey, BlogArticle, KnowledgeItem } from '@/types';

export const companiesData: Record<CompanyKey, CompanyData> = {
  aia: {
    name: '友邦',
    irr: { 10: 3.2, 20: 5.2, 30: 6.1, 50: 6.8 },
    cv: { g: 1.32, ng: 2.53 },
    fulfillmentRatio: { annual: 89, reversionary: 92, terminal: 102 },
    product: '盈御多元货币3',
    currencies: 9,
    guaranteeRatio: 42,
    style: '稳健型',
    suitableFor: '追求稳定分红',
    solvency: '350%',
    spRating: 'AA-',
    moodyRating: 'Aa2',
    founded: '1919年',
    hkHistory: '90+年'
  },
  pru: {
    name: '保诚',
    irr: { 10: 3.0, 20: 5.0, 30: 6.0, 50: 6.7 },
    cv: { g: 1.45, ng: 2.23 },
    fulfillmentRatio: { annual: 80, reversionary: 81, terminal: 78 },
    product: '信守明天',
    currencies: 6,
    guaranteeRatio: 48,
    style: '均衡偏积极',
    suitableFor: '希望尽早锁定红利',
    solvency: '320%',
    spRating: 'A+',
    moodyRating: 'A1',
    founded: '1848年',
    hkHistory: '170+年'
  },
  sun: {
    name: '永明',
    irr: { 10: 2.8, 20: 4.8, 30: 5.9, 50: 6.9 },
    cv: { g: 1.65, ng: 1.87 },
    fulfillmentRatio: { annual: 83, reversionary: 95, terminal: 84 },
    product: '万年青星河',
    currencies: 6,
    guaranteeRatio: 45,
    style: '稳健型',
    suitableFor: '长期持有者',
    solvency: '340%',
    spRating: 'AA-',
    moodyRating: 'Aa3',
    founded: '1865年',
    hkHistory: '130+年'
  },
  man: {
    name: '宏利',
    irr: { 10: 3.5, 20: 4.9, 30: 5.8, 50: 6.6 },
    cv: { g: 1.20, ng: 2.25 },
    fulfillmentRatio: { annual: 77, reversionary: 0, terminal: 107 },
    product: '宏挚传承',
    currencies: 7,
    guaranteeRatio: 35,
    style: '积极型',
    suitableFor: '短期回本需求',
    solvency: '310%',
    spRating: 'A+',
    moodyRating: 'A1',
    founded: '1887年',
    hkHistory: '125+年'
  }
};

// Blog articles from Zhihu column
export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: '谈谈保记的分红机制和实现率',
    summary: '香港保险市场作为全球成熟的保险市场之一，其分红型储蓄产品一直备受内地及亚太地区投资者关注。保诚（Prudential）作为香港保险市场的龙头险企之一，其分红机制和实现率表现更是市场关注的焦点。',
    url: 'https://zhuanlan.zhihu.com/p/2014757170701420076',
    publishDate: '2025'
  },
  {
    id: '2',
    title: '从俄罗斯违约到LTCM崩盘的历史镜鉴',
    summary: '1998年8月17日，俄罗斯政府宣布了一项震惊世界的决定：卢布贬值、延期偿付外债、暂停国债交易。这一被称为"八一七联合声明"的措施，不仅将俄罗斯推向了金融危机的深渊，更在全球金融市场引发了连锁反应。',
    url: 'https://zhuanlan.zhihu.com/p/2014089290183910932',
    publishDate: '2025'
  },
  {
    id: '3',
    title: 'CRS交换新时代｜谈内地居民海外收入的征税动态',
    summary: '随着经济全球化的深入发展，跨境资产配置已成为高净值人群财富管理的重要组成部分。在这一背景下，香港保险凭借其独特的税务优势和完善的法律体系，正成为越来越多内地居民进行跨境财富管理与税务筹划的重要工具。',
    url: 'https://zhuanlan.zhihu.com/p/2013363363103668007',
    publishDate: '2025'
  },
  {
    id: '4',
    title: '当战争与暴跌同时来袭，普通人的安全感从何而来？',
    summary: '2026年3月初，当霍尔木兹海峡的炮火声传到香港，当恒生科技指数跌破5000点的心理关口，许多投资者看着账户里缩水的资产，第一次真切地感受到了不确定性这四个字的分量。',
    url: 'https://zhuanlan.zhihu.com/p/2013363363103668008',
    publishDate: '2026-03'
  },
  {
    id: '5',
    title: '律保阁动态｜CRS新规与海外收入征税实务研讨',
    summary: '2026年1月30日下午，律保阁围绕"CRS新规与海外收入征税"在团队内部组织了一场线下+线上结合的闭门研讨会。本次分享是律保阁近期"合规与风险"系列活动的一部分。',
    url: 'https://zhuanlan.zhihu.com/p/2013363363103668009',
    publishDate: '2026-01'
  },
  {
    id: '6',
    title: '香港保险或引入加密货币新规',
    summary: '根据Bloomberg的最新报道，香港保险业监管局（IA) 正在提议新的规则，允许该市的158家授权保险公司将资金投入包括加密货币在内的资产。新的草案允许保险公司投资加密货币及相关基础设施。',
    url: 'https://zhuanlan.zhihu.com/p/1987484481075045261',
    publishDate: '2025'
  },
  {
    id: '7',
    title: '如何在积金易（eMPF）平台供款MPF',
    summary: '简单的介绍一下，积金易平台（eMPF）是一个电子平台，未来在香港工作，肯定要交MPF，因此在港工作的大部分人需要知晓这个平台，并且要和这个平台打交道。',
    url: 'https://zhuanlan.zhihu.com/p/1978506954755289129',
    publishDate: '2025'
  },
  {
    id: '8',
    title: '大湾区保险通来了？一些常识要清楚。',
    summary: '最近关于"大湾区保险通"的文章遍地飞，很多人会问，是不是未来香港保险的理赔可以在内地直接入账了？这里先辟个谣，"大湾区保险通"还在探索研究，未来的落地应该还需时日。',
    url: 'https://zhuanlan.zhihu.com/p/1972271770246545622',
    publishDate: '2025'
  }
];

// Default knowledge base items
export const defaultKnowledgeItems: KnowledgeItem[] = [
  {
    id: '1',
    title: '分红实现率',
    content: '实际派发红利与预期红利的比率。100%表示完全达标，超过100%表示超预期，低于100%表示未达标。',
    category: 'term',
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '2',
    title: '复归/归原红利',
    content: '英式分红核心，每年公布面值，一旦公布即成为保证，不会减少。适合追求稳定收益的投资者。',
    category: 'term',
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '3',
    title: '终期红利',
    content: '保单终止时（退保、理赔或期满）一次性发放，波动较大，每年重新宣告，可能上升或下降。',
    category: 'term',
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '4',
    title: 'IRR (内部收益率)',
    content: '考虑时间价值的年化复合收益率，是评估保险产品真实回报的最佳指标。',
    category: 'term',
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '5',
    title: '保证部分 vs 非保证部分',
    content: '保证部分：写入合同，100%确定给付。非保证部分：取决于分红实现率，存在不确定性。',
    category: 'term',
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '6',
    title: '平滑机制',
    content: '保险公司设立分红储备账户，在投资收益好的年份储备盈余，在低迷年份释放储备以稳定分红。',
    category: 'term',
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '7',
    title: '2025年演示利率上限',
    content: '港元产品6%，非港元产品6.5%',
    category: 'regulation',
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '8',
    title: '披露要求',
    content: '每年6月30日前统一公布分红实现率',
    category: 'regulation',
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '9',
    title: '透明度要求',
    content: '需披露投资策略、资产类别、地域组合',
    category: 'regulation',
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '10',
    title: '冷静期',
    content: '投保后21天内可无条件退保，全额退款',
    category: 'regulation',
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
];

// Official website links
export const officialLinks = [
  {
    name: '友邦 AIA',
    description: '官方分红实现率查询页面',
    url: 'https://www.aia.com.hk/zh-hk/products/further-product-information/participating-products/fulfillment-ratio'
  },
  {
    name: '保诚 Prudential',
    description: '官方分红实现率查询页面',
    url: 'https://www.prudential.com.hk/performance/fulfillment-ratio/tc/'
  },
  {
    name: '宏利 Manulife',
    description: '官方分红实现率查询页面',
    url: 'https://www.manulife.com.hk/zh-hk/individual/products/understanding-your-participating-policy/fulfillment-ratio.html'
  },
  {
    name: '永明 Sun Life',
    description: '永明金融香港官网',
    url: 'https://www.sunlife.com.hk/HK/Insurance/Savings+and+life+insurance/Savings+and+life+insurance.htm?vgnLocale=zh_TW'
  }
];
