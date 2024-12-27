'use client';

import Loading from '@/app/loading';
import React, { useEffect, useState } from 'react';

const Paage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2000); // 2초 지연

    return () => window.clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h1>Analytics</h1>
    </>
  );
};

export default Paage;
