import Vue from 'vue';
import Router from 'vue-router';
import Index from '../view/index.vue'
import Detail from '../view/detail.vue'
import Comments from '../view/comments.vue'

// const Index = () => import('../view/index.vue')
// const Detail = () => import('../view/detail.vue')
// const Comments = () => import('../view/comments.vue')

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/detail/:id',
            component: Detail
        },
        {
            path: '/comments/:id',
            component: Comments
        },
    ]
});