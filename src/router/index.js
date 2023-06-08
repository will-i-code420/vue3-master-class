import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import sourceData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:id',
      name: 'category',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CategoryView.vue'),
      props: true
    },
    {
      path: '/forum/:id',
      name: 'forum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ForumView.vue'),
      props: true
    },
    {
      path: '/thread/:id',
      name: 'thread',
      // route level code-splitting
      // this generates a separate chunk (SingleThread.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SingleThreadView.vue'),
      props: true,
      beforeEnter: (to) => {
        const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id)
        if (!threadExists) {
          return {
            name: 'NotFound',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          }
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/PageNotFound.vue')
    }
  ]
})

export default router
