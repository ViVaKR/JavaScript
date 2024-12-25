import Link from 'next/link';
import './menus.css';

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
        bg-slate-800"
        data-bs-theme="dark">
        <div className="container-fluid">
          <Link
            key={'0'}
            href={'/'}
            className="navbar-brand tracking-widest text-white ml-4">
            ViV
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuItems"
            aria-controls="menuItems"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse
                      navbar-collapse flex
                      justify-end
                      items-center"
            id="menuItems">
            <div className="navbar-nav">
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
              <li className="nav-item dropdown">
                <button
                  id="dropdownInformationButton"
                  data-dropdown-toggle="dropdownInformation"
                  className="text-white"
                  type="button">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menus;
