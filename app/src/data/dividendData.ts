// Dividend fulfillment ratio data from PDF document
// Selected 5-6 products from each company: AIA, Prudential, Manulife, Sun Life

export interface DividendProduct {
  id: string;
  company: 'aia' | 'pru' | 'man' | 'sun';
  companyName: string;
  productName: string;
  currency: string;
  bonusType: string;
  fulfillmentRatios: {
    year2022?: number | null;
    year2021?: number | null;
    year2020?: number | null;
    year2019?: number | null;
    year2018?: number | null;
    year2017?: number | null;
    year2016?: number | null;
    year2015?: number | null;
    year2014?: number | null;
    year2013?: number | null;
    before2013?: number | null;
  };
  status?: string;
}

export const dividendProducts: DividendProduct[] = [
  // ========== 友邦 AIA (6 products) ==========
  {
    id: 'aia-1',
    company: 'aia',
    companyName: '友邦 AIA',
    productName: '「才隽之宝」终身寿险连额外保障计划',
    currency: '所有',
    bonusType: '周年红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: 127, year2019: 125, year2018: 124, year2017: 120, year2016: 116, year2015: 113, year2014: 112, year2013: 107, before2013: null }
  },
  {
    id: 'aia-2',
    company: 'aia',
    companyName: '友邦 AIA',
    productName: '「才隽之宝」终身寿险连额外保障计划',
    currency: '所有',
    bonusType: '终期红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: 95 }
  },
  {
    id: 'aia-3',
    company: 'aia',
    companyName: '友邦 AIA',
    productName: '「充裕未来」计划3',
    currency: '所有',
    bonusType: '复归红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: 96, year2019: 104, year2018: 130, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'aia-4',
    company: 'aia',
    companyName: '友邦 AIA',
    productName: '「充裕未来」计划3',
    currency: '所有',
    bonusType: '终期分红',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: 85, year2019: 85, year2018: 100, year2017: 105, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'aia-5',
    company: 'aia',
    companyName: '友邦 AIA',
    productName: '「盈御多元货币计划」',
    currency: '所有',
    bonusType: '复归红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'aia-6',
    company: 'aia',
    companyName: '友邦 AIA',
    productName: '「盈御多元货币计划」',
    currency: '所有',
    bonusType: '终期分红',
    fulfillmentRatios: { year2022: null, year2021: 100, year2020: null, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },

  // ========== 保诚 Prudential (6 products) ==========
  {
    id: 'pru-1',
    company: 'pru',
    companyName: '保诚 Prudential',
    productName: '「理想人生」保障系列III (AL3)分期缴费',
    currency: '美元',
    bonusType: '归原红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: null, year2018: null, year2017: null, year2016: 51, year2015: 50, year2014: 50, year2013: 47, before2013: null }
  },
  {
    id: 'pru-2',
    company: 'pru',
    companyName: '保诚 Prudential',
    productName: '「理想人生」保障系列III (AL3)分期缴费',
    currency: '美元',
    bonusType: '特别红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: null, year2018: null, year2017: null, year2016: 81, year2015: 93, year2014: 111, year2013: null, before2013: null }
  },
  {
    id: 'pru-3',
    company: 'pru',
    companyName: '保诚 Prudential',
    productName: '「隽升」储蓄保障计划 (EGS)分期缴费',
    currency: '美元',
    bonusType: '归原红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: null, year2018: null, year2017: 80, year2016: 87, year2015: 68, year2014: 46, year2013: 48, before2013: 57 }
  },
  {
    id: 'pru-4',
    company: 'pru',
    companyName: '保诚 Prudential',
    productName: '「隽升」储蓄保障计划 (EGS)分期缴费',
    currency: '美元',
    bonusType: '特别红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: null, year2018: null, year2017: 63, year2016: 76, year2015: 61, year2014: 42, year2013: 51, before2013: 81 }
  },
  {
    id: 'pru-5',
    company: 'pru',
    companyName: '保诚 Prudential',
    productName: '特级「隽升」储蓄保障计划 (EGSP)分期缴费',
    currency: '美元',
    bonusType: '归原红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: null, year2018: 100, year2017: 100, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'pru-6',
    company: 'pru',
    companyName: '保诚 Prudential',
    productName: '特级「隽升」储蓄保障计划 (EGSP)分期缴费',
    currency: '美元',
    bonusType: '特别红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: null, year2018: 106, year2017: 109, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },

  // ========== 宏利 Manulife (6 products) ==========
  {
    id: 'man-1',
    company: 'man',
    companyName: '宏利 Manulife',
    productName: '赤霞珠终身寿险计划',
    currency: '美元',
    bonusType: '终期红利',
    fulfillmentRatios: { year2022: null, year2021: 92, year2020: 95, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'man-2',
    company: 'man',
    companyName: '宏利 Manulife',
    productName: '世纪传承保障计划',
    currency: '美元',
    bonusType: '终期红利',
    fulfillmentRatios: { year2022: null, year2021: 93, year2020: 97, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'man-3',
    company: 'man',
    companyName: '宏利 Manulife',
    productName: '丰誉传承保障计划2',
    currency: '美元',
    bonusType: '每年红利',
    fulfillmentRatios: { year2022: null, year2021: 94, year2020: 96, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'man-4',
    company: 'man',
    companyName: '宏利 Manulife',
    productName: '丰誉传承保障计划2',
    currency: '美元',
    bonusType: '终期红利',
    fulfillmentRatios: { year2022: null, year2021: 94, year2020: 100, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'man-5',
    company: 'man',
    companyName: '宏利 Manulife',
    productName: '创富传承保障计划2',
    currency: '美元',
    bonusType: '终期红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: 100, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'man-6',
    company: 'man',
    companyName: '宏利 Manulife',
    productName: '宏达储蓄保障计划',
    currency: '美元',
    bonusType: '每年红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: 100, year2018: 96, year2017: 98, year2016: 98, year2015: null, year2014: null, year2013: null, before2013: null }
  },

  // ========== 永明 Sun Life (6 products) ==========
  {
    id: 'sun-1',
    company: 'sun',
    companyName: '永明 Sun Life',
    productName: '「跃进」延期年金人寿保险计划',
    currency: '美元',
    bonusType: '年度红利',
    fulfillmentRatios: { year2022: 100, year2021: 100, year2020: 100, year2019: 100, year2018: 100, year2017: 100, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'sun-2',
    company: 'sun',
    companyName: '永明 Sun Life',
    productName: '「跃进」延期年金人寿保险计划',
    currency: '港元',
    bonusType: '终期红利',
    fulfillmentRatios: { year2022: 132, year2021: 130, year2020: 130, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'sun-3',
    company: 'sun',
    companyName: '永明 Sun Life',
    productName: '「喜裕连连」延期年金人寿保险',
    currency: '美元',
    bonusType: '年度红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: 100, year2019: 100, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'sun-4',
    company: 'sun',
    companyName: '永明 Sun Life',
    productName: '「悦．享连连」年金人寿保险计划',
    currency: '美元',
    bonusType: '年度红利',
    fulfillmentRatios: { year2022: null, year2021: null, year2020: null, year2019: 76, year2018: 80, year2017: 84, year2016: 73, year2015: 72, year2014: 74, year2013: 74, before2013: null }
  },
  {
    id: 'sun-5',
    company: 'sun',
    companyName: '永明 Sun Life',
    productName: '「爱．人生」人寿保险计划',
    currency: '美元',
    bonusType: '年度红利',
    fulfillmentRatios: { year2022: 100, year2021: 100, year2020: 100, year2019: 100, year2018: 100, year2017: 100, year2016: 100, year2015: null, year2014: null, year2013: null, before2013: null }
  },
  {
    id: 'sun-6',
    company: 'sun',
    companyName: '永明 Sun Life',
    productName: '「伴享人生」人寿保险计划',
    currency: '美元',
    bonusType: '终期红利',
    fulfillmentRatios: { year2022: 100, year2021: 100, year2020: 100, year2019: null, year2018: null, year2017: null, year2016: null, year2015: null, year2014: null, year2013: null, before2013: null }
  }
];

// Company summary statistics
export const companyDividendSummary = [
  { company: 'aia', companyName: '友邦 AIA', averageRatio: 93.1, stability: '最稳健', rating: 5, range: '71%-169%' },
  { company: 'pru', companyName: '保诚 Prudential', averageRatio: 84, stability: '波动大', rating: 2, range: '3%-1044%' },
  { company: 'man', companyName: '宏利 Manulife', averageRatio: 94.6, stability: '较稳健', rating: 4, range: '32%-109%' },
  { company: 'sun', companyName: '永明 Sun Life', averageRatio: 101.3, stability: '最强', rating: 5, range: '100%+' }
];
