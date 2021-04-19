import VueRouter from 'vue-router'
import Vue from 'vue'


const Home=()=>import('views/Home/Home')
const Classify=()=>import('views/Classify/Classify')
const Cart=()=>import('views/Cart/Cart')
const Profile=()=>import('views/Profile/Profile')


Vue.use(VueRouter)
const routes=[
    {
        path:'',
        redirect:'/home'
    },

    {
        path:'/home',
        component:Home	
    },
    {
        path:'/classify',
        component:Classify
        
    },
    {
        path:'/cart',
        component:Cart
        
    },
    {
        path:'/profile',
        component: Profile
        
    }
]

const router=new VueRouter({
    routes,
    mode:'history'
})


export default router