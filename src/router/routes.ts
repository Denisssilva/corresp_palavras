import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },

    ]
  },
  {
    path: '/',
    component: () => import('layouts/layout_inicio.vue'),
    children: [
      { path: 'inicio', component: () => import('src/pages/pagina.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/layout_pagina.vue'),
    children: [
      { path: 'pagina', component: () => import('pages/pagina.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
