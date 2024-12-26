import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  /* config options here */
};

// 이 부분은 여전히 nextConfig를 export 하고 있습니다
// 단지 withBundleAnalyzer로 감싸진 형태로 내보내는 것입니다
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true
})(nextConfig);
