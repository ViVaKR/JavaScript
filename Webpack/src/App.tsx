import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Code from './components/code/Code';
import Camp from './components/camp/Camp';
import Chat from './components/chat/Chat';
import Member from './components/member/Member';
import Profile from './components/member/profile/Profile';
import Signup from './components/member/signup/Signup';
import Signin from './components/member/signin/Signin';
import Signout from './components/member/signout/Signout';
import Demo from './components/utils/Demo';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/Code', element: <Code /> },
  { path: '/Camp', element: <Camp /> },
  { path: '/Chat', element: <Chat /> },
  { path: '/Demo', element: <Demo /> },
  {
    path: '/Member',
    element: <Member />,
    children: [
      { path: 'Profile', element: <Profile /> },
      { path: 'Signup', element: <Signup /> },
      { path: 'Signin', element: <Signin /> },
      { path: 'Signout', element: <Signout /> },
    ],
  },

  // { path: '/Member/Profile', element: <Profile /> },
  // { path: '/Member/Signup', element: <Signup /> },
  // { path: '/Member/Signin', element: <Signin /> },
  // { path: '/Member/Signout', element: <Signout /> },
];

const App: React.FC = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={route.element}>
        {route.children?.map((childRoute, childIndex) => (
          <Route
            key={`${index}-${childIndex}`}
            path={childRoute.path}
            element={childRoute.element}
          />
        ))}
      </Route>
    ))}
  </Routes>
);

export default App;
