import {createRouter, createWebHashHistory} from 'vue-router'
import ExpandingCards from  '../components/ExpandingCards.vue'
import ProgressSteps from '../components/ProgressSteps.vue'

const routes = [
    {name: 'ExpandingCards',path: '/expanding-cards', component: ExpandingCards},
    {name: 'ProgressSteps',path: '/progress-steps', component: ProgressSteps}
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })


 export default router