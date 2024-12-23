import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Member: React.FC = () => {
  const memberLinks = [
    { name: '프로필', path: 'Profile' },
    { name: '회원가입', path: 'Signup' },
    { name: '로그인', path: 'Signin' },
    { name: '로그아웃', path: 'Signout' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 왼쪽 사이드바 */}
      <div className="w-64 bg-white shadow-lg">
        <nav className="p-4">
          <ul className="space-y-2">
            {memberLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Member;
