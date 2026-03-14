import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { companyDividendSummary } from '@/data/dividendData';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { AlertTriangle, Check, Star, TrendingUp, Shield, Globe, Users, Clock } from 'lucide-react';

const companyBadges = {
  aia: 'bg-red-100 text-red-700 hover:bg-red-100',
  pru: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
  sun: 'bg-orange-100 text-orange-700 hover:bg-orange-100',
  man: 'bg-green-100 text-green-700 hover:bg-green-100',
};

const companyBorderColors = {
  aia: 'border-red-400',
  pru: 'border-blue-400',
  sun: 'border-orange-400',
  man: 'border-green-400',
};

const companyBgColors = {
  aia: 'bg-red-50',
  pru: 'bg-blue-50',
  sun: 'bg-orange-50',
  man: 'bg-green-50',
};

// Company names mapping

export default function Compare() {
// Product and comparison data

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

        {/* Company Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              四家公司综合评分
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {companyDividendSummary.map((company) => (
                <div 
                  key={company.company}
                  className={`p-4 rounded-lg border-2 ${companyBorderColors[company.company as keyof typeof companyBorderColors]} ${companyBgColors[company.company as keyof typeof companyBgColors]}`}
                >
                  <div className="font-bold text-lg mb-2">{company.companyName}</div>
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(company.rating)}
                  </div>
                  <div className="text-2xl font-bold mb-1">
                    {company.averageRatio}%
                  </div>
                  <div className="text-sm text-slate-500">平均分红实现率</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Product Comparison */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-blue-900">主力产品对比</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">对比项</th>
                    {companyDividendSummary.map((company) => (
                      <th key={company.company} className="text-left py-3 px-4">
                        <Badge className={companyBadges[company.company as keyof typeof companyBadges]}>
                          {company.companyName}
                        </Badge>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">主力产品</td>
                    <td className="py-3 px-4">环宇盈活 (GG)</td>
                    <td className="py-3 px-4">信守明天 (TRST/SH)</td>
                    <td className="py-3 px-4">宏挚传承</td>
                    <td className="py-3 px-4">星河传承 (EG)</td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="py-3 px-4 font-medium">上市时间</td>
                    <td className="py-3 px-4">2024年</td>
                    <td className="py-3 px-4">2025年升级</td>
                    <td className="py-3 px-4">2023年</td>
                    <td className="py-3 px-4">2024年</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">缴费期</td>
                    <td className="py-3 px-4">5年/整付</td>
                    <td className="py-3 px-4">5年/10年</td>
                    <td className="py-3 px-4">整付/3/5/10/15年</td>
                    <td className="py-3 px-4">2年/5年/10年</td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="py-3 px-4 font-medium">货币选择</td>
                    <td className="py-3 px-4">2种</td>
                    <td className="py-3 px-4">8种</td>
                    <td className="py-3 px-4">7种</td>
                    <td className="py-3 px-4">6种</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">20年IRR</td>
                    <td className="py-3 px-4 font-semibold">6.05%</td>
                    <td className="py-3 px-4 font-semibold">6.35%</td>
                    <td className="py-3 px-4 font-semibold">6.00%</td>
                    <td className="py-3 px-4 font-semibold">6.50%</td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="py-3 px-4 font-medium">分红实现率</td>
                    <td className="py-3 px-4">93.1% 最稳健</td>
                    <td className="py-3 px-4">84% 波动大</td>
                    <td className="py-3 px-4">94.6% 较稳健</td>
                    <td className="py-3 px-4">101.3% 最强</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">适合人群</td>
                    <td className="py-3 px-4">追求长期稳健收益</td>
                    <td className="py-3 px-4">能承受高波动</td>
                    <td className="py-3 px-4">追求前期高收益</td>
                    <td className="py-3 px-4">富裕银发族、隔代传承</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-800">
                <p className="font-semibold mb-1">重要提示</p>
                <p>保诚约40-50%资产配置在权益类资产，波动相对较大。过往分红实现率可能有较大差异（部分产品低于40%），建议按60-70%的平均实现率进行估算。</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Comparison */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-blue-900">特色功能对比</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">功能</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">友邦 AIA</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">保诚</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">宏利</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">永明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      无限次更改受保人
                    </td>
                    <td className="py-3 px-4"><Check className="w-5 h-5 text-green-600" /></td>
                    <td className="py-3 px-4"><Check className="w-5 h-5 text-green-600" /></td>
                    <td className="py-3 px-4"><Check className="w-5 h-5 text-green-600" /></td>
                    <td className="py-3 px-4"><Check className="w-5 h-5 text-green-600" /></td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="py-3 px-4 font-medium flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      保单分拆
                    </td>
                    <td className="py-3 px-4">第1年起</td>
                    <td className="py-3 px-4">支持</td>
                    <td className="py-3 px-4">支持</td>
                    <td className="py-3 px-4">支持</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      后备受保人
                    </td>
                    <td className="py-3 px-4 text-slate-400">-</td>
                    <td className="py-3 px-4 text-slate-400">-</td>
                    <td className="py-3 px-4"><Check className="w-5 h-5 text-green-600" /></td>
                    <td className="py-3 px-4"><Check className="w-5 h-5 text-green-600" /></td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="py-3 px-4 font-medium flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      货币转换
                    </td>
                    <td className="py-3 px-4">2种</td>
                    <td className="py-3 px-4">8种（最灵活）</td>
                    <td className="py-3 px-4">7种</td>
                    <td className="py-3 px-4">6种（提取时17种）</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      类信托功能
                    </td>
                    <td className="py-3 px-4">延缴保费惠益</td>
                    <td className="py-3 px-4">自主入息/传承</td>
                    <td className="py-3 px-4">身心守护预支</td>
                    <td className="py-3 px-4">56种支付组合（最强）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Product Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">产品特色详解</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {companyDividendSummary.map((company) => (
                <div
                  key={company.company}
                  className={`p-6 rounded-lg border-l-4 ${companyBorderColors[company.company as keyof typeof companyBorderColors]} ${companyBgColors[company.company as keyof typeof companyBgColors]}`}
                >
                  <h4 className={`font-bold mb-4 ${
                    company.company === 'aia' ? 'text-red-700' :
                    company.company === 'pru' ? 'text-blue-700' :
                    company.company === 'sun' ? 'text-orange-700' :
                    'text-green-700'
                  }`}>
                    {company.companyName}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {company.company === 'aia' && (
                      <>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>30年IRR达6.5%全港首款</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>75%股票+25%债券配置</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>核保宽松，177年历史背书</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>卓越成绩奖（学业优异可获奖金）</span>
                        </li>
                      </>
                    )}
                    {company.company === 'pru' && (
                      <>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>「固收+」平滑机制</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>8种货币转换最灵活</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>「自主入息/传承」类信托功能</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>癌症保障最多赔3次</span>
                        </li>
                      </>
                    )}
                    {company.company === 'man' && (
                      <>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>2025年业务爆发式增长（+172%）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>与贝莱德、黑石等50家顶级资管合作</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>14年本金翻倍</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>强积金市占率香港第一(27.6%)</span>
                        </li>
                      </>
                    )}
                    {company.company === 'sun' && (
                      <>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>历史平均分红实现率101.3%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>归原红利一经公布即变为保证</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>56种支付组合类信托功能</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>保证内部回报率1%市场最高</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <footer className="mt-8 text-center text-slate-500 text-sm py-4">
          © 2025 香港保险分析工具 | 数据仅供参考，投资有风险
        </footer>
      </div>
    </div>
  );
}
