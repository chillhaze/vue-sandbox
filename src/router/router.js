import MainPage from '@/pages/MainPage';
import BlogPage from '@/pages/BlogPage';
import BlogPageWithStore from '@/pages/BlogPageWithStore';
import PostPage from '@/pages/PostPage';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/blog',
    component: BlogPage,
  },
  {
    path: '/store',
    component: BlogPageWithStore,
  },
  {
    path: '/post/:id',
    component: PostPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
