<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">TripleK</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          :class="{ 'navbar-nav': true, 'me-auto': menu.me_auto }"
          v-for="menu in menu_category"
          :key="menu.id"
        >
          <li class="nav-item" v-for="menu_object in menu.value" :key="menu_object.key">
            <router-link :to="menu_object.url" class="nav-link">
              {{ menu_object.value }}
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav" v-show="notification.id > 0">
          <li class="nav-item">
            <button type = "button" class ="btn btn-danger" @click="onOpenNotification">
              &#128226
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <teleport to="#notification" v-if="show_notification">
    <div :class="'container notification border border-dark rounded-3 mt-3 p-3 bg-' + notification.type">
      <div v-if="notification.type" class="d-flex">
        <span class="me-auto">{{ notification.type }}</span>
        <button type="button" class="btn fw-bold" @click="onCloseNotification">
          &times;
        </button>
      </div>
      <hr/>
      <div class="text-light text-wrap">{{ notification.content }}</div>
    </div>
  </teleport>
</template>

<script>
import { ref, computed, onMounted, reactive } from 'vue'
import useAxios from '../modules/axios'
import { setCookie , getCookie} from '../modules/cookie';
export default {
  name: 'NavBar',
  setup() {
    const menu = ref('me')
    const menus = [
      { key: 'home', value: '홈', url: '/home', position: 'left' },
      { key: 'app', value: '애플리케이션', url: '/application', position: 'left' },
      { key: 'me', value: 'Profile', url: '/profile', position: 'right' },
      { key: 'admin', value: 'Admin', url: '/admin', position: 'right' },
    ]
    const left_menus = computed(() => menus.filter((i) => i.position == 'left'))
    const right_menus = computed(() => menus.filter((i) => i.position == 'right'))

    let notification = reactive({id : 0})
    const show_notification = ref(false)
    const onOpenNotification = (evt) => {
      if(evt) evt.preventDefault()
      show_notification.value = true
    }
    const onCloseNotification = (evt) => {
      if(evt) evt.preventDefault()
      
      setCookie('notification',notification.id,1)
      notification.id = 0
      show_notification.value = false
    }
    onMounted(() => {
      
      const block_noti_id = getCookie('notification') || 0
      const {axiosGet} = useAxios()
      console.log("axiosGet" + axiosGet);
      axiosGet(`/db/notification`, (data) => {
        Object.assign(notification,data.data)
        console.log("성공" + data)
        },(data) => {
          console.log("실패" + data)
        })
    })
    console.log(notification)
    return {
      menu,
      menu_category: [
        {
          id: 1,
          me_auto: true,
          value: left_menus.value,
        },
        {
          id: 2,
          me_auto: false,
          value: right_menus.value,
        },
      
      ],
      onOpenNotification,
      onCloseNotification,
      show_notification,
      notification,
    }
  },
}
</script>