// Server side rendering ======== (DX: 개발자 경험)
// async function Home() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/albums');
//   if (!response.ok) throw new Error('Failed to fetch data');
//   const albums = await response.json();

//   return (
//     <>
//       <h1>Home</h1>
//       <ul>
//         {albums.map((album: { id: number; title: string }) => (
//           <li key={album.id}>
//             {album.id}. {album.title}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default Home;

// Client side rendering =======
// --> 로딩 상태를 명확하게 표시: loading 상태를 통해 데이터를 불러오는 중임을 사용자에게 알릴 수 있다.
// --> 데이터를 불러오는 동안 사용자에게 로딩 상태를 보여주는 것이 좋다.
'use client';

import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 2000); // 2초 지연
    return () => window.clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Albums</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg p-4">
        {data.map((album: { id: string; title: string }) => (
          <div key={album.id}>
            <p className="text-xl font-poppins mb-2">{album.title}</p>
            <p className="text-gray-600">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
