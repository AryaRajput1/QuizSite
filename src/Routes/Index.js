import { createRouter ,createWebHistory} from "vue-router"; 
import Home from '../components/Home.vue';
import Quiz from '../components/Quiz.vue';
import Result from '../components/Result.vue';

const router =createRouter({
    history:createWebHistory(),
routes:[
    {
        path:'/quiz/:id',
        name:'Quiz',
        component:Quiz,

    },{
        path:'/result/:status',
        name:'Result',
        component:Result,

    },
        {
            path:'/',
            name:'Home',
            component:Home
        }
    ]
}

)

export default router;