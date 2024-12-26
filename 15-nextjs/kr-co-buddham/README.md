## Getting Started

```bash
npm run dev

# Material UI
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/icons-material


#
npm install --save-dev @next/bundle-analyzer


# API
npm install @tanstack/react-query axios
```

<pre>
✅ 올바른 네이밍:
/app/page.tsx - 페이지 컴포넌트
/app/layout.tsx - 레이아웃 컴포넌트
/app/template.tsx -
/app/loading.ts - 로딩 컴포넌트
/app/error.tsx  - 에러 처리
/app/not-found.tsx - 404 페이지

❌ 잘못된 네이밍:
/app/Page.tsx
/app/Layout.tsx
/app/Template.tsx
/app/Loading.tsx
/app/Error.tsx
/app/Not-found.tsx

-> 일반 컴포넌트 파일 네이밍
/components/Button.tsx
/components/NavBar.tsx
/components/UserProfile.tsx
</pre>

---

## ClientOnly

- 하이드레이션 오류 방지
- 서버/클라이언트 렌더링 불일치 해결
- 더 예측 가능한 렌더링 동작

```jsx

# 브라우저 API 를 사용하는 경우
"use client";

const BrowserComponent = () => {
  return (
    <ClientOnly>
      {/* window, document 등의 브라우저 API 사용 */}
      <div>{window.innerWidth}</div>
    </ClientOnly>
  );
};

# Material-UI 같은 클라이언트 사이드 라이브러리 사용시
"use client";

const MaterialComponent = () => {
  return (
    <ClientOnly>
      <Stack>
        <Button>Click me</Button>
        <TextField />
      </Stack>
    </ClientOnly>
  );
};

# React hooks 사용
"use client";

const HooksComponent = () => {
  const [state, setState] = useState(false);

  return (
    <ClientOnly>
      <div onClick={() => setState(!state)}>
        {state ? "On" : "Off"}
      </div>
    </ClientOnly>
  );
};

#
```
