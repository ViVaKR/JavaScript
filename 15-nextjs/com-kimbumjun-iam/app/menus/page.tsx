'use client';
import Link from 'next/link';
import './menus.css';
import MenuBar from '../menubar/page';

const menuData = [
  {
    key: 1,
    title: '홈',
    href: '/home',
  },
  {
    key: 2,
    title: '코드조각',
    href: '/code',
  },
  {
    key: 3,
    title: '능선따라',
    href: '/chat',
  },
  {
    key: 4,
    title: '캠프',
    href: '/camp',
  },
  {
    key: 5,
    title: '회원',
    href: '/member/signin',
  },
];

const Menus = () => {
  return (
    <>
      <nav
        className="navbar
        navbar-expand-sm
        border-b-4
        border-rose-500
        h-20
        bg-slate-800"
        data-bs-theme="dark">
        <div className="container-fluid">
          {/* <Link
            key={'0'}
            href={'/'}
            className="navbar-brand tracking-widest text-white ml-4">
            ViV
          </Link> */}
          <div className="h-full w-full">
            <button
              className="navbar-toggler ml-[calc(100%_-_3.5rem)]"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menuItems">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse
                      navbar-collapse
                      bg-slate-800
                      w-full
                      z-50"
            id="menuItems">
            <div className="navbar-nav flex justify-end items-center w-full bg-slate-800/95">
              {menuData.map((menu) => {
                return (
                  <Link
                    key={menu.key}
                    href={menu.href}
                    className="nav-link text-slate-50 hover:text-rose-500">
                    {menu.title}
                  </Link>
                );
              })}
              <MenuBar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menus;
