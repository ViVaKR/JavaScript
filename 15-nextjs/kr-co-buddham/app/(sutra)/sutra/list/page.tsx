'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchSutras } from '@/app/services/sutra.service';
import { ISutra } from '@/app/interfaces/sutra';

// 클라이언트 컴포넌트
export default function SutraList() {
  const {
    data: sutras,
    isLoading,
    isError,
  } = useQuery<ISutra[]>({
    queryKey: ['sutras'],
    queryFn: fetchSutras,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <h1 className="font-dongle">경전 목록</h1>
      <ul>
        {sutras?.map((sutra) => (
          <li key={sutra.id}>{sutra.title}</li>
        ))}
      </ul>
    </div>
  );
}
