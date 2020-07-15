import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home.vue"
import Favorite from "@/components/Favorite.vue"
Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/favorite",
            name: "favorite",
            component: Favorite
        }
    ]
})