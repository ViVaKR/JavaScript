import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: '홈', url: '/' },
  { name: '코드조각', url: '/Code' },
  { name: '능선따라', url: '/Chat' },
  { name: '캠프', url: '/Camp' },
  { name: '김범준', url: '/Member' },
  {
    name: '기타',
    url: '/Utils',
    subMenu: [
      { name: 'Bootstrap', url: '/Utils/Bootstrap' },
      { name: 'Tailwindcss', url: '/Tailwindcss' },
      { name: 'DataAPI', url: '/DataApi' },
      { name: 'Demo', url: '/Demo' },
    ],
  },
];

const NavMenu: React.FC = () => (
  <>
    <nav
      className="navbar bg-primary navbar-expand-md navbar-dark"
      data-bs-theme="dark">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand">
          ViVaKR
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav">
          <ul className="navbar-nav">
            {menuItems.map((item, index) => (
              <li
                className={`nav-item ${item.subMenu ? 'dropdown' : ''}`}
                key={index}>
                <Link
                  to={item.url}
                  className={`nav-link ${
                    item.subMenu ? 'dropdown-toggle' : ''
                  }`}
                  data-bs-toggle={item.subMenu ? 'dropdown' : undefined}
                  aria-expanded="false"
                  role={item.subMenu ? 'button' : undefined}>
                  {item.name}
                </Link>
                {item.subMenu && (
                  <ul className="dropdown-menu">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.url}
                          className="dropdown-item">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <form
            className="flex ml-auto"
            role="search">
            <input
              type="search"
              className="form-control rounded-md mr-2"
              placeholder="Search"
            />
            <button
              type="submit"
              className="btn btn-outline-light">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </>
);

export default NavMenu;
