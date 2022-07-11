import {createRouter, createWebHashHistory} from 'vue-router'
import ExpandingCards from  '../components/ExpandingCards.vue'

const routes = [
    {path: '/expanding-cards', component: ExpandingCards}
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })


 export default router