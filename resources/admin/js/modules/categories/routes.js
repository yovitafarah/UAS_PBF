// import lib
import { lazy } from 'react'

export default [
  {
    path: '/admin/categories',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list')),
  },
  {
    path: '/admin/categories/create',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/add')),
  },
  {
    path: '/admin/categories/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit')),
  },
]
