// import lib
import { lazy } from 'react'

export default [
  {
    path: '/admin',
    exact: true,
    component: lazy(() => import('./pages/login')),
  },
  {
    path: '/admin/login',
    exact: true,
    component: lazy(() => import('./pages/login')),
  },
  {
    path: '/admin/register',
    exact: true,
    component: lazy(() => import('./pages/register')),
  },
]
