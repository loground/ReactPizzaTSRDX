import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Cart from './pages/Cart';
import FullPizza from './pages/Fullpizza';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';

import './scss/app.scss';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
