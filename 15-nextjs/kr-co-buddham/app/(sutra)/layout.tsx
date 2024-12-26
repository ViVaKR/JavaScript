import React from 'react';
import SutraNavigation from './SutraNavigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <div
        className="!w-44
                    h-screen
                    bg-gradient-to-b
                    from-sky-800
                    to-sky-200">
        <SutraNavigation />
      </div>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default Layout;
