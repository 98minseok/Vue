import Profile from '@components/Profile.vue'
import Application from '@components/Application.vue'
import { defineComponent } from 'vue'

const NotFound = defineComponent({
  template: '<div>Not Found</div>',
})

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/application', name: 'application', component: Application },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/:catchAll(.*)+', component: NotFound },
]

export default routes