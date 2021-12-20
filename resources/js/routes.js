//comentario

const Home = () => import("./components/pages/Home.vue");
const Products = () => import("./admin/pages/Products.vue");
const Stock = () => import("./admin/pages/stock.vue");
const AdminUser = () => import("./admin/pages/AdminUsers.vue");
const Roles = () => import("./admin/pages/Roles.vue");
const Login = () => import("./admin/pages/Login.vue");
const Unauthorized = () => import("./admin/pages/unauthorized.vue");




export const routes=[

    //proyects routes
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/products',
        name:'products',
        component: Products
    },
    {
        path:'/roles',
        name:'roles',
        component: Roles
    },
    {
        path:'/adminusers',
        name:'adminusers',
        component: AdminUser
    },
    {
        path:'/login',
        name:'login',
        component: Login
    },
    {
        path:'/unauthorized',
        name:'unauthorized',
        component: Unauthorized
    },
    {
        path:'/stock',
        name:'stock',
        component: Stock
    },

]
