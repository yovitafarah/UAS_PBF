// import lib
import { lazy } from 'react'

export default [
  {
    path: '/admin/users/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit')),
  },
  {
    path: '/admin/users',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list')),
  },
  {
    path: '/admin/users/create',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/add')),
  },
]
