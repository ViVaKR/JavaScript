import React from 'react';
import SutraNavigation from './SutraNavigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[200px_minmax(0,_1fr)] max-lg:grid-cols-1 gap-2">
      <div
        className=" h-screen
                    bg-gradient-to-b
                    from-sky-800
                    max-lg:h-auto
                    max-lg:shadow-md
                    to-sky-100">
        <SutraNavigation />
      </div>
      <main className="py-4 pr-8">{children}</main>
    </div>
  );
};

export default Layout;
