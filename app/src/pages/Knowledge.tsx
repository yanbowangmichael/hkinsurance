import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// Badge component
import { comprehensiveKnowledgeData } from '@/data/knowledgeData';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { BookOpen, ExternalLink, Info, AlertTriangle, Search, FileText, Link2, Gavel, Package, BarChart3 } from 'lucide-react';

const categoryLabels: Record<string, { label: string; icon: typeof BookOpen; color: string; bgColor: string }> = {
  term: { label: '专业术语', icon: BookOpen, color: 'text-blue-700', bgColor: 'bg-blue-50 border-blue-400' },
  regulation: { label: '监管新规', icon: Gavel, color: 'text-purple-700', bgColor: 'bg-purple-50 border-purple-400' },
  notice: { label: '注意事项', icon: AlertTriangle, color: 'text-amber-700', bgColor: 'bg-amber-50 border-amber-400' },
  link: { label: '官方链接', icon: Link2, color: 'text-green-700', bgColor: 'bg-green-50 border-green-400' },
  product: { label: '产品信息', icon: Package, color: 'text-red-700', bgColor: 'bg-red-50 border-red-400' },
  comparison: { label: '对比分析', icon: BarChart3, color: 'text-indigo-700', bgColor: 'bg-indigo-50 border-indigo-400' },
};

export default function Knowledge() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');

  const filteredItems = comprehensiveKnowledgeData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getItemsByCategory = (category: string) => {
    return filteredItems.filter(item => item.category === category);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <Navigation />

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="搜索知识库内容..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                >
                  全部
                </Button>
                {Object.entries(categoryLabels).map(([key, { label }]) => (
                  <Button
                    key={key}
                    variant={selectedCategory === key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(key)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Section */}
        {(selectedCategory === 'all' || selectedCategory === 'term') && getItemsByCategory('term').length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                专业术语解释 ({getItemsByCategory('term').length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {getItemsByCategory('term').map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500"
                  >
                    <h4 className="font-semibold text-blue-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Products Section */}
        {(selectedCategory === 'all' || selectedCategory === 'product') && getItemsByCategory('product').length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Package className="w-5 h-5" />
                主力产品 ({getItemsByCategory('product').length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {getItemsByCategory('product').map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500"
                  >
                    <h4 className="font-semibold text-red-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Comparisons Section */}
        {(selectedCategory === 'all' || selectedCategory === 'comparison') && getItemsByCategory('comparison').length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                对比分析 ({getItemsByCategory('comparison').length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {getItemsByCategory('comparison').map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500"
                  >
                    <h4 className="font-semibold text-indigo-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Regulations Section */}
        {(selectedCategory === 'all' || selectedCategory === 'regulation') && getItemsByCategory('regulation').length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Gavel className="w-5 h-5" />
                监管新规 ({getItemsByCategory('regulation').length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {getItemsByCategory('regulation').map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-purple-900">{item.title}：</span>
                      <span className="text-slate-600">{item.content}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Official Links Section */}
        {(selectedCategory === 'all' || selectedCategory === 'link') && getItemsByCategory('link').length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Link2 className="w-5 h-5" />
                分红实现率查询链接
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {getItemsByCategory('link').map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-white border rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-slate-500 truncate max-w-md">{item.content}</div>
                    </div>
                    <a
                      href={item.content}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      访问官网
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notices Section */}
        {(selectedCategory === 'all' || selectedCategory === 'notice') && getItemsByCategory('notice').length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                投保注意事项 ({getItemsByCategory('notice').length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                <p className="font-semibold text-amber-900 mb-3">购买前必读</p>
                <ul className="space-y-2">
                  {getItemsByCategory('notice').map((item) => (
                    <li key={item.id} className="flex items-start gap-2 text-amber-800">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{item.title}：</span>
                        <span>{item.content}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">没有找到匹配的内容</p>
              <p className="text-sm text-slate-400 mt-1">请尝试其他搜索词或分类</p>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
          {Object.entries(categoryLabels).map(([key, { label, bgColor, color }]) => {
            const count = comprehensiveKnowledgeData.filter(item => item.category === key).length;
            return (
              <div key={key} className={`p-3 rounded-lg ${bgColor} text-center`}>
                <div className={`text-2xl font-bold ${color}`}>{count}</div>
                <div className="text-xs text-slate-600">{label}</div>
              </div>
            );
          })}
        </div>

        <footer className="mt-8 text-center text-slate-500 text-sm py-4">
          © 2025 香港保险分析工具 | 数据仅供参考，投资有风险
        </footer>
      </div>
    </div>
  );
}
