import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from '@/pages/Calculator';
import Compare from '@/pages/Compare';
import Analysis from '@/pages/Analysis';
import Knowledge from '@/pages/Knowledge';
import Blog from '@/pages/Blog';
import Admin from '@/pages/Admin';
import { AdminLink } from '@/components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <AdminLink />
    </BrowserRouter>
  );
}

export default App;
