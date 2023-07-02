import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const Header = React.lazy(() => import('../Components/Header'));

  return (
    <div className="wrapper">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
      </React.Suspense>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
