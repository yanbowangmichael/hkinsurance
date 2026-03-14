import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { dividendProducts, companyDividendSummary } from '@/data/dividendData';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { Shield, Star, AlertTriangle, BarChart3, PieChart } from 'lucide-react';

const companyColors = {
  aia: { bg: 'bg-red-500', light: 'bg-red-100', text: 'text-red-600', border: 'border-red-400' },
  pru: { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-400' },
  sun: { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-400' },
  man: { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-600', border: 'border-green-400' },
};

const companyNames: Record<string, string> = {
  aia: '友邦 AIA',
  pru: '保诚 Prudential',
  sun: '永明 Sun Life',
  man: '宏利 Manulife'
};

export default function Analysis() {
  const [selectedCompany, setSelectedCompany] = useState<string | 'all'>('all');

  const filteredProducts = selectedCompany === 'all' 
    ? dividendProducts 
    : dividendProducts.filter(p => p.company === selectedCompany);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <Navigation />

        {/* Company Summary Cards */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              2024年分红实现率概览
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {companyDividendSummary.map((company) => (
                <div 
                  key={company.company}
                  className={`p-4 rounded-lg border-2 ${companyColors[company.company as keyof typeof companyColors].border} ${companyColors[company.company as keyof typeof companyColors].light}`}
                >
                  <div className="font-bold text-lg mb-2">{company.companyName}</div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold">{company.averageRatio}%</span>
                    <span className="text-sm text-slate-500">平均</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(company.rating)}
                  </div>
                  <div className="text-sm text-slate-600">
                    <div>波动范围: {company.range}</div>
                    <div className={`font-medium ${companyColors[company.company as keyof typeof companyColors].text}`}>
                      {company.stability}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Product Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCompany === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCompany('all')}
              >
                全部产品
              </Button>
              {Object.entries(companyNames).map(([key, name]) => (
                <Button
                  key={key}
                  variant={selectedCompany === key ? 'default' : 'outline'}
                  onClick={() => setSelectedCompany(key)}
                >
                  {name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-blue-900">分红实现率详细数据</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="py-3 px-2 text-left font-semibold">保险公司</th>
                    <th className="py-3 px-2 text-left font-semibold">产品名称</th>
                    <th className="py-3 px-2 text-left font-semibold">币种</th>
                    <th className="py-3 px-2 text-left font-semibold">红利类型</th>
                    <th className="py-3 px-2 text-right font-semibold">2022</th>
                    <th className="py-3 px-2 text-right font-semibold">2021</th>
                    <th className="py-3 px-2 text-right font-semibold">2020</th>
                    <th className="py-3 px-2 text-right font-semibold">2019</th>
                    <th className="py-3 px-2 text-right font-semibold">2018</th>
                    <th className="py-3 px-2 text-right font-semibold">2017</th>
                    <th className="py-3 px-2 text-right font-semibold">2016</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr 
                      key={product.id} 
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b hover:bg-blue-50 transition-colors`}
                    >
                      <td className="py-3 px-2">
                        <Badge className={`${companyColors[product.company].light} ${companyColors[product.company].text} border-0`}>
                          {product.companyName}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 font-medium">{product.productName}</td>
                      <td className="py-3 px-2 text-slate-500">{product.currency}</td>
                      <td className="py-3 px-2 text-slate-500">{product.bonusType}</td>
                      {[
                        product.fulfillmentRatios.year2022,
                        product.fulfillmentRatios.year2021,
                        product.fulfillmentRatios.year2020,
                        product.fulfillmentRatios.year2019,
                        product.fulfillmentRatios.year2018,
                        product.fulfillmentRatios.year2017,
                        product.fulfillmentRatios.year2016,
                      ].map((ratio, i) => (
                        <td key={i} className="py-3 px-2 text-right">
                          {ratio === null ? (
                            <span className="text-slate-300">-</span>
                          ) : (
                            <span className={`font-medium ${
                              ratio && ratio >= 100 ? 'text-green-600' : 
                              ratio && ratio >= 80 ? 'text-blue-600' : 
                              ratio && ratio >= 50 ? 'text-orange-600' : 'text-red-600'
                            }`}>
                              {ratio}%
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Product Analysis */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              产品分析
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* AIA */}
              <div className="p-4 border-l-4 border-red-400 bg-red-50 rounded-r-lg">
                <h4 className="font-bold text-red-700 mb-2">友邦 AIA</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• 平均分红实现率93.1%，最稳健</li>
                  <li>• 「充裕未来」系列复归红利80-130%</li>
                  <li>• 终期红利实现率85-105%</li>
                  <li>• 波动最小，适合风险厌恶型投资者</li>
                </ul>
              </div>

              {/* Prudential */}
              <div className="p-4 border-l-4 border-blue-400 bg-blue-50 rounded-r-lg">
                <h4 className="font-bold text-blue-700 mb-2">保诚 Prudential</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• 平均分红实现率84%，波动较大</li>
                  <li>• 「理想人生」系列归原红利47-100%</li>
                  <li>• 「隽升」系列特别红利波动大（42-81%）</li>
                  <li>• 建议按60-70%平均实现率估算</li>
                </ul>
              </div>

              {/* Manulife */}
              <div className="p-4 border-l-4 border-green-400 bg-green-50 rounded-r-lg">
                <h4 className="font-bold text-green-700 mb-2">宏利 Manulife</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• 平均分红实现率94.6%，较稳健</li>
                  <li>• 赤霞珠、世纪传承终期红利92-97%</li>
                  <li>• 创富传承终期红利100%</li>
                  <li>• 2025年业务爆发式增长（+172%）</li>
                </ul>
              </div>

              {/* Sun Life */}
              <div className="p-4 border-l-4 border-orange-400 bg-orange-50 rounded-r-lg">
                <h4 className="font-bold text-orange-700 mb-2">永明 Sun Life</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• 平均分红实现率101.3%，最强</li>
                  <li>• 多款产品连续100%达标</li>
                  <li>• 「跃进」年金终期红利130-132%</li>
                  <li>• 归原红利公布即锁定为保证（市场唯一）</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Smoothing Mechanism */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              平滑分红机制
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
              <p className="text-blue-800 mb-3">
                香港各大保险公司的分红险业务都设有分红平滑机制。该机制的核心在于：
              </p>
              <ul className="space-y-2 text-blue-800">
                <li><strong>丰收年份</strong>：投资收益较好时，将部分盈余存入分红特别储备账户</li>
                <li><strong>低迷年份</strong>：市场回报不佳时，从储备账户调用资金补充分红</li>
                <li><strong>核心目标</strong>：确保红利派发的连续性和稳定性，有效减少保单价值的剧烈波动</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-semibold mb-1">重要提示</p>
            <p>以上分红实现率数据来源于各保险公司2024年公布的官方数据，仅供参考。非保证收益部分存在不确定性，实际分红以保险公司公布为准。投保前请仔细阅读产品说明书。</p>
          </div>
        </div>

        <footer className="mt-8 text-center text-slate-500 text-sm py-4">
          © 2025 香港保险分析工具 | 数据仅供参考，投资有风险
        </footer>
      </div>
    </div>
  );
}
