import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useThreadsStore } from '@/stores/threads'
import { useForumsStore } from '@/stores/forums'
import { useCategoriesStore } from '@/stores/categories'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: async () => {
        const categoriesStore = useCategoriesStore()
        await categoriesStore.initHome()
      }
    },
    {
      path: '/category/:id',
      name: 'category',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CategoryView.vue'),
      props: true,
      beforeEnter: async (to) => {
        const categoriesStore = useCategoriesStore()
        await categoriesStore.initCategory(to.params.id)
      }
    },
    {
      path: '/forum/:id',
      name: 'forum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ForumView.vue'),
      props: true,
      beforeEnter: async (to) => {
        const forumsStore = useForumsStore()
        await forumsStore.initForum(to.params.id)
        if (!forumsStore.forums) {
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
      path: '/forum/:forumId/thread/create',
      name: 'createThread',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CreateThreadView.vue'),
      props: true,
      beforeEnter: async (to) => {
        const forumsStore = useForumsStore()
        await forumsStore.initCreateThread(to.params.forumId)
      }
    },
    {
      path: '/thread/:id',
      name: 'thread',
      // route level code-splitting
      // this generates a separate chunk (SingleThread.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SingleThreadView.vue'),
      props: true,
      beforeEnter: async (to) => {
        const threadsStore = useThreadsStore()
        await threadsStore.initSingleThread(to.params.id)

        if (!threadsStore.threads) {
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
      path: '/thread/:threadId/edit',
      name: 'editThread',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/EditThreadView.vue'),
      props: true
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ProfileView.vue'),
      meta: { toTop: true, smoothScroll: true }
    },
    {
      path: '/profile/edit',
      name: 'profileEdit',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ProfileView.vue'),
      props: { edit: true }
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
  ],
  scrollBehavior(to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'
    return { scroll }
  }
})

export default router
