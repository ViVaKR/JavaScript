'use client';

import React, { useEffect, useState } from 'react';
import { Props } from '@/app/types/types';

const Page: React.FC<Props> = ({ params }) => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await params; // 비동기 작업 처리
      setData(result.id);
    };

    fetchData();
  }, [params]);

  /*
  --> useEffect : 렌더링이 완료된 후에 실행되는 함수이다.
  1. React

  */

  return <div>{data ? `ID: ${data}` : 'Loading...'}</div>;
};

export default Page;
