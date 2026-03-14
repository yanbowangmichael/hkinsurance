// Insurance company data types
export interface CompanyData {
  name: string;
  irr: {
    10: number;
    20: number;
    30: number;
    50: number;
  };
  cv: {
    g: number;
    ng: number;
  };
  fulfillmentRatio: {
    annual: number;
    reversionary: number;
    terminal: number;
  };
  product: string;
  currencies: number;
  guaranteeRatio: number;
  style: string;
  suitableFor: string;
  solvency: string;
  spRating: string;
  moodyRating: string;
  founded: string;
  hkHistory: string;
}

export type CompanyKey = 'aia' | 'pru' | 'sun' | 'man';

// Knowledge base types
export interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  category: 'term' | 'regulation' | 'notice' | 'link';
  createdAt: number;
  updatedAt: number;
}

// Blog article types
export interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishDate?: string;
}

// Calculator types
export interface CalculatorParams {
  premium: number;
  paymentYears: number;
  holdingYears: number;
  fulfillmentRate: number;
  company: CompanyKey;
}

export interface CalculatorResult {
  totalPremium: number;
  guaranteedValue: number;
  nonGuaranteedValue: number;
  totalValue: number;
  netProfit: number;
  irr: number;
  guaranteeRatio: number;
  nonGuaranteeRatio: number;
}

export interface YearlyData {
  year: number;
  cumulativePremium: number;
  guaranteedValue: number;
  totalValue: number;
  irr: number;
}
