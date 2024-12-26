import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>회원</h1>
      </header>
      <main className="h-screen">{children}</main>
    </div>
  );
};

export default Layout;
