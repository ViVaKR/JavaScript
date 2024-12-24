import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import React, { Suspense } from 'react';
import App from './App';

// 전역 스타일 임포트
import '@/scss/global.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const container = document.getElementById('root');
const root = createRoot(container!);
const queryClient = new QueryClient();

root.render(
  <Router>
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>} />
        <App />
      </QueryClientProvider>
    </Layout>
  </Router>
);
