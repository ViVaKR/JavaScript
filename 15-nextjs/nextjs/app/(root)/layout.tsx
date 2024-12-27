import React from 'react';
const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="text-2xl">NAVBAR</div>
      {children}
    </React.Fragment>
  );
};
export default Page;
