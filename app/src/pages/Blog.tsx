import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogArticles } from '@/data/companies';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { ExternalLink, Search, Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { useState } from 'react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = blogArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <Navigation />

        {/* Blog Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                  <Newspaper className="w-6 h-6" />
                  律保阁专栏
                </h2>
                <p className="text-slate-500 mt-1">保险法研究，财富管理，商事仲裁</p>
              </div>
              <a
                href="https://www.zhihu.com/column/hkfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  访问知乎专栏
                </Button>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                律
              </div>
              <div>
                <div className="font-semibold text-lg">律保阁</div>
                <div className="text-sm text-slate-500">持牌中介人，法务咨询，资深区域总监，贝壳店东</div>
                <div className="flex gap-4 mt-2 text-sm text-slate-400">
                  <span>497 篇内容</span>
                  <span>·</span>
                  <span>1670 赞同</span>
                  <span>·</span>
                  <span>1728 订阅</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="搜索文章..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-slate-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span>{article.publishDate || '2025'}</span>
                      </div>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm" className="gap-1 text-blue-600 hover:text-blue-800">
                          阅读全文
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">没有找到匹配的文章</p>
            </CardContent>
          </Card>
        )}

        {/* View More */}
        <div className="mt-8 text-center">
          <a
            href="https://www.zhihu.com/column/hkfinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2">
              查看更多文章
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>

        <footer className="mt-8 text-center text-slate-500 text-sm py-4">
          © 2025 香港保险分析工具 | 数据仅供参考，投资有风险
        </footer>
      </div>
    </div>
  );
}
