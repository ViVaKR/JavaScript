import React from 'react';
import NavMenu from './Navmenu';
import Footer from './footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <NavMenu />

    <div className="h-screen">
      <div className="col">{children}</div>
    </div>

    <div className="h-24">
      <Footer />
    </div>
  </>
);

export default Layout;
