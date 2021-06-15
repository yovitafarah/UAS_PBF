// import lib
import { lazy } from 'react'

export default [
  {
    path: '/admin/products',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list')),
  },
  {
    path: '/admin/products/create',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/add')),
  },
  {
    path: '/admin/products/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit')),
  },
]
