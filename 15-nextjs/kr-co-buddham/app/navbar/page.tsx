'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book'; // Add this import
import { useRouter } from 'next/navigation'; // useRouter import 추가
import ClientOnly from '@/components/ClientOnly';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';

const pages = [
  {
    key: 1,
    title: '경전읽기',
    href: '/sutra',
  },
  {
    key: 2,
    title: '경전쓰기',
    href: '/sutra/create',
  },
  {
    key: 3,
    title: '나의명상',
    href: '/meditation',
  },
];
const settings = ['맴버십', '회원가입', '로그인', '', '로그아웃'];

const ResponsiveAppBar = () => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = React.useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavigation = (href: string) => {
    setIsNavigating(true);
    handleCloseNavMenu();
    router.push(href);
    setTimeout(() => setIsNavigating(false), 500);
  };
  const handleLogoClick = () => {
    router.push('/');
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const title = 'Sutra';

  return (
    <ClientOnly>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <BookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            {/* 데스크톱 로고 */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleLogoClick}
              className="font-poppins"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}>
              {title}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}>
                {pages.map((page) => (
                  <MenuItem
                    key={page.key}
                    onClick={() => handleNavigation(page.href)}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {isNavigating ? '이동 중...' : page.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <BookIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            {/* 모바일 로고 */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={handleLogoClick}
              className="font-poppins"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}>
              {title}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                // <Button
                //   onClick={handleCloseNavMenu}
                //   key={page.key}
                //   sx={{ my: 2, color: "white", display: "block" }}
                // >
                //   {page.title}
                // </Button>

                <Link
                  key={page.key}
                  href={page.href}
                  className="nav-link text-white mx-2 hover:text-rose-500">
                  {page.title}
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/avata.png"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ClientOnly>
  );
};
export default ResponsiveAppBar;
