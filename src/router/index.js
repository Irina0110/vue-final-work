import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "@/components/mainPage";
import firstStep from "../views/firstStep";
import secondStep from "../views/secondStep";
import thirdStep from "../views/thirdStep";
import fourthStep from "../views/fourthStep";
import fifthStep from "../views/fifthStep";
import finalPage from "@/views/finalPage";

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainPage
  },
  {
    path: '/first',
    name: 'first',
    component: firstStep
  },
  {
    path: '/second',
    name: 'second',
    component: secondStep
    },
  {
    path: '/third',
    name: 'third',
    component: thirdStep
  },
  {
    path: '/fourth',
    name: 'fourth',
    component: fourthStep
  },
  {
    path: '/fifth',
    name: 'fifth',
    component: fifthStep
  },
  {
    path: '/final',
    name: 'finalPage',
    component: finalPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
