import React from 'react';
const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="text-xl text-teal-500">Dashboard</div>
      {children}
    </React.Fragment>
  );
};
export default Page;
