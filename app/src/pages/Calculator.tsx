import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { Info, TrendingUp, DollarSign, Calculator as CalcIcon, BarChart3, PieChart } from 'lucide-react';

interface YearlyInput {
  year: number;
  guaranteedValue: string;
  reversionaryBonus: string;
  terminalBonus: string;
}

interface CalculationResult {
  year: number;
  totalPremium: number;
  guaranteedValue: number;
  reversionaryBonus: number;
  terminalBonus: number;
  totalValue: number;
  netProfit: number;
  irr: number;
}

const defaultYearlyInputs: YearlyInput[] = [
  { year: 5, guaranteedValue: '', reversionaryBonus: '', terminalBonus: '' },
  { year: 10, guaranteedValue: '', reversionaryBonus: '', terminalBonus: '' },
  { year: 15, guaranteedValue: '', reversionaryBonus: '', terminalBonus: '' },
  { year: 20, guaranteedValue: '', reversionaryBonus: '', terminalBonus: '' },
  { year: 30, guaranteedValue: '', reversionaryBonus: '', terminalBonus: '' },
  { year: 40, guaranteedValue: '', reversionaryBonus: '', terminalBonus: '' },
];

// Calculate IRR using Newton-Raphson method
function calculateIRR(cashFlows: number[]): number {
  const maxIterations = 100;
  const precision = 0.0001;
  let rate = 0.1; // Initial guess
  
  for (let i = 0; i < maxIterations; i++) {
    let npv = 0;
    let derivative = 0;
    
    for (let j = 0; j < cashFlows.length; j++) {
      const factor = Math.pow(1 + rate, j);
      npv += cashFlows[j] / factor;
      derivative -= j * cashFlows[j] / (factor * (1 + rate));
    }
    
    if (Math.abs(npv) < precision) return rate;
    
    const newRate = rate - npv / derivative;
    if (Math.abs(newRate - rate) < precision) return newRate;
    rate = newRate;
  }
  
  return rate;
}

export default function Calculator() {
  const [paymentYears, setPaymentYears] = useState<string>('5');
  const [annualPremium, setAnnualPremium] = useState<string>('100000');
  const [yearlyInputs, setYearlyInputs] = useState<YearlyInput[]>(defaultYearlyInputs);
  const [showResults, setShowResults] = useState(false);

  const totalPremium = useMemo(() => {
    return Number(annualPremium) * Number(paymentYears);
  }, [annualPremium, paymentYears]);

  const results: CalculationResult[] = useMemo(() => {
    if (!showResults) return [];
    
    return yearlyInputs.map((input) => {
      const guaranteedValue = Number(input.guaranteedValue) || 0;
      const reversionaryBonus = Number(input.reversionaryBonus) || 0;
      const terminalBonus = Number(input.terminalBonus) || 0;
      const totalValue = guaranteedValue + reversionaryBonus + terminalBonus;
      const netProfit = totalValue - totalPremium;
      
      // Calculate IRR
      const cashFlows: number[] = [];
      for (let i = 0; i < Number(paymentYears); i++) {
        cashFlows.push(-Number(annualPremium));
      }
      for (let i = Number(paymentYears); i < input.year; i++) {
        cashFlows.push(0);
      }
      cashFlows.push(totalValue);
      
      const irr = calculateIRR(cashFlows) * 100;
      
      return {
        year: input.year,
        totalPremium,
        guaranteedValue,
        reversionaryBonus,
        terminalBonus,
        totalValue,
        netProfit,
        irr: isNaN(irr) ? 0 : irr,
      };
    });
  }, [yearlyInputs, totalPremium, annualPremium, paymentYears, showResults]);

  const handleInputChange = (index: number, field: keyof YearlyInput, value: string) => {
    const newInputs = [...yearlyInputs];
    newInputs[index] = { ...newInputs[index], [field]: value };
    setYearlyInputs(newInputs);
  };

  const formatNumber = (num: number) => {
    if (num === 0) return '-';
    return num.toLocaleString('zh-HK');
  };

  const formatIRR = (irr: number) => {
    if (irr === 0) return '-';
    return `${irr.toFixed(2)}%`;
  };

  // Calculate max value for chart scaling
  const maxValue = useMemo(() => {
    if (results.length === 0) return 1;
    return Math.max(...results.map(r => r.totalValue), totalPremium);
  }, [results, totalPremium]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <Navigation />

        {/* Premium Settings */}
        <Card className="mb-6 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              保费设置
            </CardTitle>
            <p className="text-slate-500 text-sm">请输入总保费金额（港币）</p>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>缴费年期</Label>
                <Select value={paymentYears} onValueChange={setPaymentYears}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3年缴</SelectItem>
                    <SelectItem value="5">5年缴</SelectItem>
                    <SelectItem value="10">10年缴</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>每年缴费金额 (HKD)</Label>
                <Input
                  type="number"
                  value={annualPremium}
                  onChange={(e) => setAnnualPremium(e.target.value)}
                  placeholder="例如: 100000"
                />
              </div>
            </div>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">总保费:</span>
                <span className="text-xl font-bold text-blue-900">
                  HKD {formatNumber(totalPremium)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cash Value Input */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <CalcIcon className="w-5 h-5" />
              现金价值及红利数据输入
            </CardTitle>
            <p className="text-slate-500 text-sm">请输入各年度的保证现金价值、归原红利/周年红利、终期红利（港币）</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="py-3 px-4 text-left font-semibold text-slate-700">保单年度</th>
                    <th className="py-3 px-4 text-left font-semibold text-slate-700">保证现金价值</th>
                    <th className="py-3 px-4 text-left font-semibold text-slate-700">归原红利 / 周年红利</th>
                    <th className="py-3 px-4 text-left font-semibold text-slate-700">终期红利</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlyInputs.map((input, index) => (
                    <tr key={input.year} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-3 px-4 font-medium">第{input.year}年</td>
                      <td className="py-3 px-4">
                        <Input
                          type="number"
                          value={input.guaranteedValue}
                          onChange={(e) => handleInputChange(index, 'guaranteedValue', e.target.value)}
                          placeholder="0"
                          className="w-32"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <Input
                          type="number"
                          value={input.reversionaryBonus}
                          onChange={(e) => handleInputChange(index, 'reversionaryBonus', e.target.value)}
                          placeholder="0"
                          className="w-32"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <Input
                          type="number"
                          value={input.terminalBonus}
                          onChange={(e) => handleInputChange(index, 'terminalBonus', e.target.value)}
                          placeholder="0"
                          className="w-32"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <Button 
                size="lg" 
                onClick={() => setShowResults(true)}
                className="gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                计算收益
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {showResults && results.length > 0 && (
          <>
            {/* Results Table */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  收益计算结果
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="py-3 px-4 text-left font-semibold text-slate-700">保单年度</th>
                        <th className="py-3 px-4 text-right font-semibold text-slate-700">保证价值</th>
                        <th className="py-3 px-4 text-right font-semibold text-slate-700">归原红利</th>
                        <th className="py-3 px-4 text-right font-semibold text-slate-700">终期红利</th>
                        <th className="py-3 px-4 text-right font-semibold text-slate-700">预期总价值</th>
                        <th className="py-3 px-4 text-right font-semibold text-slate-700">净收益</th>
                        <th className="py-3 px-4 text-right font-semibold text-slate-700">IRR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, index) => (
                        <tr key={result.year} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="py-3 px-4 font-medium">第{result.year}年</td>
                          <td className="py-3 px-4 text-right">{formatNumber(result.guaranteedValue)}</td>
                          <td className="py-3 px-4 text-right">{formatNumber(result.reversionaryBonus)}</td>
                          <td className="py-3 px-4 text-right">{formatNumber(result.terminalBonus)}</td>
                          <td className="py-3 px-4 text-right font-bold text-blue-900">
                            {formatNumber(result.totalValue)}
                          </td>
                          <td className={`py-3 px-4 text-right font-semibold ${
                            result.netProfit >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {formatNumber(result.netProfit)}
                          </td>
                          <td className={`py-3 px-4 text-right font-bold ${
                            result.irr >= 5 ? 'text-green-600' : result.irr >= 0 ? 'text-blue-600' : 'text-red-600'
                          }`}>
                            {formatIRR(result.irr)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Visual Charts */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  收益可视化分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Value Growth Chart */}
                  <div>
                    <h4 className="font-semibold mb-4 text-slate-700">价值增长趋势</h4>
                    <div className="space-y-3">
                      {results.map((result) => (
                        <div key={result.year}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>第{result.year}年</span>
                            <span className="font-medium">HKD {formatNumber(result.totalValue)}</span>
                          </div>
                          <div className="h-6 bg-slate-200 rounded-full overflow-hidden relative">
                            {/* Premium bar */}
                            <div 
                              className="h-full bg-slate-400 absolute"
                              style={{ width: `${(totalPremium / maxValue) * 100}%` }}
                            />
                            {/* Total value bar */}
                            <div 
                              className="h-full bg-blue-500 absolute"
                              style={{ width: `${(result.totalValue / maxValue) * 100}%` }}
                            />
                          </div>
                          <div className="flex gap-4 mt-1 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 bg-slate-400 rounded-full" />
                              总保费 HKD {formatNumber(totalPremium)}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 bg-blue-500 rounded-full" />
                              总价值
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* IRR Chart */}
                  <div>
                    <h4 className="font-semibold mb-4 text-slate-700">IRR 收益率</h4>
                    <div className="space-y-3">
                      {results.map((result) => (
                        <div key={result.year}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>第{result.year}年</span>
                            <span className={`font-medium ${
                              result.irr >= 5 ? 'text-green-600' : result.irr >= 0 ? 'text-blue-600' : 'text-red-600'
                            }`}>
                              {formatIRR(result.irr)}
                            </span>
                          </div>
                          <div className="h-6 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                result.irr >= 5 ? 'bg-green-500' : result.irr >= 0 ? 'bg-blue-500' : 'bg-red-500'
                              }`}
                              style={{ 
                                width: `${Math.min(Math.max((result.irr + 10) / 20 * 100, 0), 100)}%` 
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-slate-50 rounded-lg text-sm text-slate-600">
                      <p>参考标准：</p>
                      <div className="flex gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full" />
                          ≥5% 优秀
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-blue-500 rounded-full" />
                          0-5% 正常
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-red-500 rounded-full" />
                          &lt;0% 亏损
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {results.filter(r => r.totalValue > 0).slice(-1).map((latest) => (
                    <>
                      <div className="p-4 bg-blue-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-900">
                          HKD {formatNumber(latest.totalValue)}
                        </div>
                        <div className="text-sm text-slate-500 mt-1">预期总价值</div>
                      </div>
                      <div className={`p-4 rounded-lg text-center ${
                        latest.netProfit >= 0 ? 'bg-green-50' : 'bg-red-50'
                      }`}>
                        <div className={`text-2xl font-bold ${
                          latest.netProfit >= 0 ? 'text-green-700' : 'text-red-700'
                        }`}>
                          HKD {formatNumber(latest.netProfit)}
                        </div>
                        <div className="text-sm text-slate-500 mt-1">净收益</div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-700">
                          {formatIRR(latest.irr)}
                        </div>
                        <div className="text-sm text-slate-500 mt-1">IRR收益率</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-700">
                          {latest.totalValue > 0 ? ((latest.totalValue / totalPremium - 1) * 100).toFixed(1) : 0}%
                        </div>
                        <div className="text-sm text-slate-500 mt-1">总回报率</div>
                      </div>
                    </>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Important Notice */}
        <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg flex gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-semibold mb-1">重要提示</p>
            <p>以上计算结果仅供参考，实际收益以保险公司公布的分红实现率为准。非保证收益部分存在不确定性，投保前请仔细阅读产品说明书。</p>
          </div>
        </div>

        <footer className="mt-8 text-center text-slate-500 text-sm py-4">
          © 2025 香港保险分析工具 | 数据仅供参考，投资有风险
        </footer>
      </div>
    </div>
  );
}
