import SutraList from '@/app/(sutra)/sutra/list/page';

// 서버 컴포넌트
export default async function SutraPage() {
  return <SutraList />;
}
/*
페이지 컴포넌트는 서버 컴포넌트로 유지
React Query 로직은 클라이언트 컴포넌트로 분리
컴포넌트로 책임 분리로 성능 최적화

*/
