import { NavLink } from 'react-router-dom';
import { Calculator, BarChart3, Building2, BookOpen, Newspaper, Settings } from 'lucide-react';

const navItems = [
  { path: '/', label: '收益计算器', icon: Calculator },
  { path: '/compare', label: '产品对比', icon: BarChart3 },
  { path: '/analysis', label: '公司分析', icon: Building2 },
  { path: '/knowledge', label: '知识库', icon: BookOpen },
  { path: '/blog', label: '博客', icon: Newspaper },
];

export function Navigation() {
  return (
    <nav className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex flex-wrap gap-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-900 text-white'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-blue-900'
              }`
            }
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export function AdminLink() {
  return (
    <NavLink
      to="/admin"
      className={({ isActive }) =>
        `fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-200 z-50 ${
          isActive
            ? 'bg-blue-900 text-white'
            : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-900'
        }`
      }
    >
      <Settings className="w-5 h-5" />
      <span className="text-sm font-medium">后台管理</span>
    </NavLink>
  );
}
