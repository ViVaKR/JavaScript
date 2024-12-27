import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <React.Fragment>
      <h1 className="font-dongle">Dashboard Users</h1>
      <ul>
        <li>
          <Link href="/dashboard/users/1">item 1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">item 2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">item 3</Link>
        </li>
        <li>
          <Link href="/dashboard/users/4">item 4</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Page;
