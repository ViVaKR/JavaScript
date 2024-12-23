import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import React, { Suspense } from 'react';
import App from './App';

// 전역 스타일 임포트
import '@/scss/global.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Router>
    <Layout>
      <Suspense fallback={<div>Loading...</div>} />
      <App />
    </Layout>
  </Router>
);
