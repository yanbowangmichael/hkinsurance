// Comprehensive knowledge base data from Feishu document and HTML template

export interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  category: 'term' | 'regulation' | 'notice' | 'link' | 'product' | 'comparison';
}

export const comprehensiveKnowledgeData: KnowledgeItem[] = [
  // ========== 专业术语 (Terms) ==========
  {
    id: 'term-1',
    title: '分红实现率',
    content: '实际派发红利与预期红利的比率。计算公式：分红实现率 = 实际派发红利 ÷ 建议书预期红利 × 100%。100%表示完全达标，超过100%表示超预期，低于100%表示未达标。参考标准：80%-100%为第一梯队水平。',
    category: 'term'
  },
  {
    id: 'term-2',
    title: '复归红利（Reversionary Bonus）',
    content: '英式分红核心，每年公布面值，一旦公布即成为保证，不会减少。退保时按现金价值支付（可能低于面值）。友邦的复归红利属于面值保证型红利。',
    category: 'term'
  },
  {
    id: 'term-3',
    title: '归原红利（Original Bonus）',
    content: '保诚产品的特色，同样为面值保证型红利，公布后终身锁定。保诚的优势在于归原红利累积更快，可以更早锁定红利。30年面值可达25.8万（vs友邦9.9万）。',
    category: 'term'
  },
  {
    id: 'term-4',
    title: '终期红利（Terminal Bonus）',
    content: '保单终止时（退保、理赔或期满）一次性发放，增强长期持有收益。终期红利波动较大，每年重新宣告，更看重保险公司过往的分红实现率。',
    category: 'term'
  },
  {
    id: 'term-5',
    title: 'IRR (内部收益率)',
    content: '考虑时间价值的年化复合收益率，是评估保险产品真实回报的最佳指标。香港储蓄险长期IRR通常在6-7%之间。',
    category: 'term'
  },
  {
    id: 'term-6',
    title: '保证现金价值',
    content: '100%保证兑现，写入合同，无风险。香港储蓄险保证收益较低（约0.5%以下），主要收益来自非保证部分。',
    category: 'term'
  },
  {
    id: 'term-7',
    title: '英式分红 vs 美式分红',
    content: '英式分红：复归红利/归原红利（面值保证），增加保单面值，复利效应更强，流动性较低。美式分红：现金红利，可灵活领取，相对稳定。代表公司：友邦、保诚为英式分红。',
    category: 'term'
  },
  {
    id: 'term-8',
    title: '平滑分红机制',
    content: '保险公司在投资收益较好的年份，将部分收益资金存入「分红特别储备账户」。市场回报不佳时，从储备账户调用资金补充分红。确保红利派发的连续性和稳定性，有效减少保单价值的剧烈波动。',
    category: 'term'
  },
  {
    id: 'term-9',
    title: 'RBC风险为本资本制度',
    content: '2024年7月1日正式实施，香港保险业监管的重要里程碑。三支柱监管框架：第一支柱（量化方面）- 订明资本要求；第二支柱（素质方面）- 企业风险管理；第三支柱（披露方面）- 信息披露。偿付能力充足率不得低于100%。',
    category: 'term'
  },
  {
    id: 'term-10',
    title: 'GN16指引',
    content: '《承保长期保险业务（类别C业务除外）指引》。2015年首次出台，2024年1月新GN16生效。核心要求：2010年后发出的新保单需披露分红实现率；每年6月30日前统一公布；需披露投资策略、资产类别、地域组合、币种组合。',
    category: 'term'
  },
  {
    id: 'term-11',
    title: 'AUM (资产管理规模)',
    content: '保险公司管理的资产总规模。永明AUM约1.54万亿美元，保诚约1,600亿美元，反映保险公司资金实力。',
    category: 'term'
  },
  {
    id: 'term-12',
    title: '偿付能力充足率',
    content: '资本基础 ÷ 订明资本额 × 100%。监管要求不得低于100%，当低于150%时监管部门有权采取监管措施。友邦350%、保诚320%、永明340%、宏利310%。',
    category: 'term'
  },
  {
    id: 'term-13',
    title: '保单分拆',
    content: '将一份保单拆分为多份，便于财富传承和资产配置。友邦第1年起可申请，保诚、宏利、永明均支持。',
    category: 'term'
  },
  {
    id: 'term-14',
    title: '更换受保人',
    content: '香港储蓄险特色功能，可无限次更改受保人，实现财富跨代传承。友邦、保诚、宏利、永明均支持。',
    category: 'term'
  },
  {
    id: 'term-15',
    title: '后备受保人',
    content: '指定后备受保人，原受保人身故后自动接管保单。宏利、永明支持，友邦、保诚不支持。',
    category: 'term'
  },
  {
    id: 'term-16',
    title: '类信托功能',
    content: '模拟信托的提取和传承方案。保诚「自主入息/传承」、永明「56种支付组合」为市场最强。',
    category: 'term'
  },
  {
    id: 'term-17',
    title: '货币转换',
    content: '将保单货币转换为其他货币。保诚支持8种货币最灵活，宏利7种，永明6种，友邦仅2种（美元/港元）。',
    category: 'term'
  },
  {
    id: 'term-18',
    title: '保费豁免',
    content: '受保人发生特定情况（如重疾）后免缴后续保费。永明为自带功能，友邦、保诚需附加契约。',
    category: 'term'
  },

  // ========== 监管新规 (Regulations) ==========
  {
    id: 'reg-1',
    title: '2025年演示利率上限',
    content: '港元产品6%，非港元产品6.5%。',
    category: 'regulation'
  },
  {
    id: 'reg-2',
    title: '分红实现率披露时间',
    content: '每年6月30日前统一公布分红实现率或过往派息率。',
    category: 'regulation'
  },
  {
    id: 'reg-3',
    title: '透明度要求',
    content: '产品说明书需明示投资资产的投资策略、资产类别组合、地域组合、币种组合；保险公司需在公司网站上公布分红策略。',
    category: 'regulation'
  },
  {
    id: 'reg-4',
    title: '责任主体明确',
    content: '董事局、控权人和精算师对非保证利益负最终责任。',
    category: 'regulation'
  },
  {
    id: 'reg-5',
    title: '冷静期',
    content: '投保后21天内可无条件退保，全额退款。',
    category: 'regulation'
  },
  {
    id: 'reg-6',
    title: '香港保险十大安全机制',
    content: '1. 授权要求严格；2. 实缴股本门槛高（最低1,000万港元）；3. 偿付准备金；4. 适当人选规定；5. 再保险安排；6. 在港资产要求；7. 审慎估值标准；8. 妥善管理监察；9. RBC制度；10. 严格清盘标准。',
    category: 'regulation'
  },

  // ========== 注意事项 (Notices) ==========
  {
    id: 'notice-1',
    title: '非保证收益风险',
    content: '以上信息基于公开搜索整理，非保证收益部分需以保险公司实际经营情况为准。',
    category: 'notice'
  },
  {
    id: 'notice-2',
    title: '保诚产品波动风险',
    content: '保诚约40-50%资产配置在权益类资产，波动相对较大。过往分红实现率可能有较大差异（部分产品低于40%），建议按60-70%的平均实现率进行估算。',
    category: 'notice'
  },
  {
    id: 'notice-3',
    title: '宏利产品风险',
    content: '宏挚产品无任何保证型红利，完全依赖非保证终期红利。悲观情景下（如投资回报-1.7%），第30年非保证部分可能缩水40%以上。',
    category: 'notice'
  },
  {
    id: 'notice-4',
    title: '永明前期收益',
    content: '永明前期现金价值较低，需承担较大非保证风险。香港不是永明的重点市场，业务占比相对较低。',
    category: 'notice'
  },
  {
    id: 'notice-5',
    title: '提前退保损失',
    content: '香港储蓄险提前退保损失严重，鼓励长期持有。前5年IRR通常为负值，一般8-10年才能回本。',
    category: 'notice'
  },
  {
    id: 'notice-6',
    title: '汇率风险',
    content: '美元保单需考虑汇率波动风险，但可分散单一货币风险。',
    category: 'notice'
  },

  // ========== 产品信息 (Products) ==========
  {
    id: 'product-1',
    title: '友邦环宇盈活 (GG)',
    content: '上市时间：2024年 | 缴费期：5年/整付 | 货币：美元、港元（2种）| 10年IRR：5.05% | 20年IRR：6.05% | 30年IRR：6.5% | 特点：30年IRR达6.5%全港首款，75%股票+25%债券配置，核保宽松，177年历史背书。适合：追求长期稳健收益、看重前期收益和快速回本。',
    category: 'product'
  },
  {
    id: 'product-2',
    title: '保诚信守明天 (TRST/SH)',
    content: '上市时间：2025年升级 | 缴费期：5年/10年 | 货币：8种（USD/HKD/CNY/GBP等）| 25年IRR：6.35% | 特点：「固收+」平滑机制，8种货币转换最灵活，「自主入息/传承」类信托功能，癌症最多赔3次。适合：能承受高波动、追求最高长期回报、需要多币种配置。',
    category: 'product'
  },
  {
    id: 'product-3',
    title: '宏利宏挚传承',
    content: '上市时间：2023年 | 缴费期：整付/3/5/10/15年 | 货币：7种 | 10年IRR：4.29% | 20年IRR：6% | 特点：2025年业务爆发式增长（销售额+172%），与贝莱德、黑石等50家顶级资管合作，14年本金翻倍，强积金市占率香港第一(27.6%)。适合：追求前期高收益、有强积金需求。',
    category: 'product'
  },
  {
    id: 'product-4',
    title: '永明星河传承 (EG)',
    content: '上市时间：2024年 | 缴费期：2年/5年/10年 | 货币：6种（提取时17种）| 35年IRR：6.5% | 特点：历史平均分红实现率101.3%，6款产品归原红利率上调6%-10%，归原红利一经公布即变为保证（市场独有），56种支付组合类信托功能，保证内部回报率1%市场最高。适合：富裕银发族、隔代传承需求、追求分红确定性。',
    category: 'product'
  },

  // ========== 对比分析 (Comparisons) ==========
  {
    id: 'compare-1',
    title: '香港 vs 内地储蓄保险',
    content: '保单货币：香港美元为主多元货币，内地人民币为主 | 保证收益：香港约0.5%以下，内地预定利率3.0% | 预期收益：香港6-7%，内地3-3.48% | 被保险人变更：香港可更换，内地一般不可 | 货币转换：香港部分产品支持，内地不支持 | 财务核保：香港宽松适合大额保单，内地严格',
    category: 'comparison'
  },
  {
    id: 'compare-2',
    title: '四家公司分红实现率对比',
    content: '永明：101.3%（最强，100%+稳定）| 宏利：94.6%（较稳健，32%-109%）| 友邦：93.1%（最稳健，71%-169%）| 保诚：84%（波动大，3%-1044%）',
    category: 'comparison'
  },
  {
    id: 'compare-3',
    title: '财富传承功能对比',
    content: '无限次更改受保人：四家均支持 | 保单分拆：友邦第1年起，其他支持 | 后备受保人：宏利、永明支持 | 类信托功能：永明56种组合最强，保诚自主入息/传承 | 后补保单主权人：永明支持（最多3位）| 保单暂托人：永明支持（最多3位）',
    category: 'comparison'
  },
  {
    id: 'compare-4',
    title: '特色保障功能对比',
    content: '友邦：卓越成绩奖（学业优异可获奖金）、延缴保费惠益（可暂缓365天）| 保诚：癌症保障（最多赔3次）| 宏利：身心守护预支保障（确诊指定疾病可锁定100%终期红利）| 永明：双重锁定（第5年起可锁定10%-50%）、归原红利公布即保证',
    category: 'comparison'
  },

  // ========== 官方链接 (Links) ==========
  {
    id: 'link-1',
    title: '友邦 AIA 分红实现率查询',
    content: 'https://www.aia.com.hk/zh-hk/products/further-product-information/participating-products/fulfillment-ratio',
    category: 'link'
  },
  {
    id: 'link-2',
    title: '保诚 Prudential 分红实现率查询',
    content: 'https://www.prudential.com.hk/performance/fulfillment-ratio/tc/',
    category: 'link'
  },
  {
    id: 'link-3',
    title: '宏利 Manulife 分红实现率查询',
    content: 'https://www.manulife.com.hk/zh-hk/individual/products/understanding-your-participating-policy/fulfillment-ratio.html',
    category: 'link'
  },
  {
    id: 'link-4',
    title: '永明 Sun Life 香港官网',
    content: 'https://www.sunlife.com.hk/HK/Insurance/Savings+and+life+insurance/Savings+and+life+insurance.htm?vgnLocale=zh_TW',
    category: 'link'
  }
];

// Default knowledge items for initialization
export const defaultKnowledgeItems = comprehensiveKnowledgeData;
