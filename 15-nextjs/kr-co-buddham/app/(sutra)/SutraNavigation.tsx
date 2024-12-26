'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SutraNavigation() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/sutra', label: '목록' },
    { href: '/sutra/create', label: '생성' },
    { href: '/sutra/read/1', label: '읽기' },
    { href: '/sutra/update/1', label: '수정' },
  ];

  return (
    <nav className="p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block p-2 rounded ${
                pathname === item.href
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
