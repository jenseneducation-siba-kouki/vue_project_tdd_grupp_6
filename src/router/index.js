import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Productpage from '../views/Productpage'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Productpage',
    component: Productpage
  },
{
  path: '/About',
  name: 'About',
  component: About
},
{
  path: '/Contact',
  name: 'Contact',
  component: Contact
}


]

const router = new VueRouter({
  routes
})

export default router
