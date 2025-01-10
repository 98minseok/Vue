import Profile from '@components/Profile.vue'
import Application from '@components/Application.vue'
import Home from '@components/Home.vue'
import { defineComponent } from 'vue'

const NotFound = defineComponent({
  template: '<div>Not Found</div>',
})

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/application', name: 'application', component: Application },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/admin', name: 'admin', component: () => import('@components/Admin.vue') },
  { path: '/:catchAll(.*)+', component: NotFound },
  { path: '/home', name : "home", component : Home},
]

export default routes

