This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


npm install axios react-query
```

## 클라이언트/서버 컴포넌트 사용원칙

1. 클라이언트 컴포넌트 사용이 필요한 경우
   - useState, useEffect 같은 React hooks 사용시
   - onClick 같은 브라우저 이벤트 핸들러 사용시
   - 브라우저 API 사용시 (localStroage, window 등)
2. 서버 컴포넌트를 기본으로 사용해야 하는 경우
   - 데이터 페칭
   - 백엔드 리소스 직접 접근
   - 민감한 정보 유지 (API keys, tokens 등)
   - 대용량 의존성 유지

<pre>
app/
├── (dashboard)/         # 관련된 기능을 논리적으로 그룹화
│   ├── layout.tsx      # 대시보드 공통 레이아웃
│   ├── page.tsx        # /dashboard
│   ├── users/          # /dashboard/users
│   └── settings/       # /dashboard/settings
└── (marketing)/        # 마케팅 관련 페이지 그룹
    ├── about/          # /about
    └── contact/        # /contact
</pre>

## 장점

- 코드 구조화 : 관련 기능끼리 폴더로 구분
- 레이아웃공유: 같은 그룹 내 페이지들이 레이아웃 공유
- URL 구조 영향없음: 괄호() 는 실제 URL 에 포함되지 않음
- 권한 관리 : 그룹별로 미들웨 적용 용이

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard-layout">
      <nav>대시보드 네비게이션</nav>
      {children}
    </div>
  )
}



```

<pre>
app/
├── page.tsx            # URL: /  (루트 URL)
├── (dashboard)/
│   └── dashboard/      # 실제 URL에 포함될 경로
│       └── page.tsx    # URL: /dashboard
└── (marketing)/
    └── about/
        └── page.tsx    # URL: /about
</pre>

### URL 경로 구조 설명

1. **수정된 경로 구조**

```bash
app/
├── page.tsx            # URL: /  (루트 URL)
├── (dashboard)/
│   └── dashboard/      # 실제 URL에 포함될 경로
│       └── page.tsx    # URL: /dashboard
└── (marketing)/
    └── about/
        └── page.tsx    # URL: /about
```

2. **올바른 구현 방법**

```tsx


export default function HomePage() {
  return <div>홈페이지</div>
}
```

```tsx


export default function DashboardPage() {
  return <div>대시보드 페이지</div>
}
```

### 핵심

- 루트 URL(`/`)은

page.tsx

가 담당
- 대시보드 URL(`/dashboard`)은 `/app/(dashboard)/dashboard/page.tsx`가 담당
- 그룹핑 폴더와 실제 URL 경로는 분리해서 구성

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
