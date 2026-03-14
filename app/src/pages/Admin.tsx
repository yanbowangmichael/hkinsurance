import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { Plus, Edit2, Trash2, Download, Upload, RotateCcw, Search, Settings, BookOpen, Gavel, AlertTriangle, Link2, Package, BarChart3 } from 'lucide-react';
import { comprehensiveKnowledgeData, type KnowledgeItem } from '@/data/knowledgeData';

const categoryOptions = [
  { value: 'term', label: '专业术语', icon: BookOpen },
  { value: 'regulation', label: '监管新规', icon: Gavel },
  { value: 'notice', label: '注意事项', icon: AlertTriangle },
  { value: 'link', label: '官方链接', icon: Link2 },
  { value: 'product', label: '产品信息', icon: Package },
  { value: 'comparison', label: '对比分析', icon: BarChart3 },
];

const STORAGE_KEY = 'hk-insurance-knowledge-base-v2';

export default function Admin() {
  const [items, setItems] = useState<KnowledgeItem[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : comprehensiveKnowledgeData;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState<KnowledgeItem | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false);

  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formCategory, setFormCategory] = useState<KnowledgeItem['category']>('term');

  // Save to localStorage
  const saveItems = (newItems: KnowledgeItem[]) => {
    setItems(newItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    if (formTitle.trim() && formContent.trim()) {
      const newItem: KnowledgeItem = {
        id: Date.now().toString(),
        title: formTitle,
        content: formContent,
        category: formCategory,
      };
      saveItems([...items, newItem]);
      resetForm();
      setIsAddDialogOpen(false);
    }
  };

  const handleEdit = () => {
    if (editingItem && formTitle.trim() && formContent.trim()) {
      const updatedItems = items.map(item =>
        item.id === editingItem.id
          ? { ...item, title: formTitle, content: formContent, category: formCategory }
          : item
      );
      saveItems(updatedItems);
      resetForm();
      setIsEditDialogOpen(false);
      setEditingItem(null);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这条内容吗？')) {
      saveItems(items.filter(item => item.id !== id));
    }
  };

  const openEditDialog = (item: KnowledgeItem) => {
    setEditingItem(item);
    setFormTitle(item.title);
    setFormContent(item.content);
    setFormCategory(item.category);
    setIsEditDialogOpen(true);
  };

  const resetForm = () => {
    setFormTitle('');
    setFormContent('');
    setFormCategory('term');
  };

  const handleExport = () => {
    const data = JSON.stringify(items, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'knowledge-base-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    if (importText.trim()) {
      try {
        const parsed = JSON.parse(importText);
        if (Array.isArray(parsed)) {
          saveItems(parsed);
          setImportText('');
          setIsImportDialogOpen(false);
          alert('导入成功！');
        } else {
          alert('导入失败，数据格式不正确');
        }
      } catch {
        alert('导入失败，请检查JSON格式是否正确');
      }
    }
  };

  const handleReset = () => {
    if (confirm('确定要重置为默认数据吗？所有自定义内容将丢失！')) {
      saveItems(comprehensiveKnowledgeData);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <Navigation />

        {/* Admin Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Settings className="w-8 h-8 text-blue-900" />
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">知识库管理后台</h2>
                  <p className="text-slate-500 text-sm">管理专业术语、产品信息、对比分析等内容</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" onClick={handleExport} className="gap-2">
                  <Download className="w-4 h-4" />
                  导出数据
                </Button>
                <Button variant="outline" onClick={() => setIsImportDialogOpen(true)} className="gap-2">
                  <Upload className="w-4 h-4" />
                  导入数据
                </Button>
                <Button variant="destructive" onClick={handleReset} className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  重置默认
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Add */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="搜索知识库内容..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                添加内容
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>添加新知识</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>分类</Label>
                  <Select value={formCategory} onValueChange={(v) => setFormCategory(v as KnowledgeItem['category'])}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>标题</Label>
                  <Input
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="输入标题..."
                  />
                </div>
                <div className="space-y-2">
                  <Label>内容</Label>
                  <Textarea
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                    placeholder="输入内容..."
                    rows={4}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">取消</Button>
                </DialogClose>
                <Button onClick={handleAdd}>添加</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Items List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">
              知识库内容 ({filteredItems.length} 条)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        {categoryOptions.find(c => c.value === item.category)?.label}
                      </span>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <p className="text-sm text-slate-500 truncate">{item.content}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openEditDialog(item)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500">没有找到匹配的内容</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>编辑内容</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>分类</Label>
                <Select value={formCategory} onValueChange={(v) => setFormCategory(v as KnowledgeItem['category'])}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryOptions.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>标题</Label>
                <Input
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="输入标题..."
                />
              </div>
              <div className="space-y-2">
                <Label>内容</Label>
                <Textarea
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  placeholder="输入内容..."
                  rows={4}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">取消</Button>
              </DialogClose>
              <Button onClick={handleEdit}>保存</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Import Dialog */}
        <Dialog open={isImportDialogOpen} onOpenChange={setIsImportDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>导入数据</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-sm text-slate-500">
                请粘贴JSON格式的数据。注意：导入将覆盖现有数据。
              </p>
              <Textarea
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder="粘贴JSON数据..."
                rows={10}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">取消</Button>
              </DialogClose>
              <Button onClick={handleImport}>导入</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <footer className="mt-8 text-center text-slate-500 text-sm py-4">
          © 2025 香港保险分析工具 | 数据仅供参考，投资有风险
        </footer>
      </div>
    </div>
  );
}
