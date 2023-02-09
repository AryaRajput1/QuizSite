<script setup>
import { useRoute,useRouter} from 'vue-router';
import data from '../data/Quizes.json'
import Question from './Question.vue';
import QuizHeader from './QuizHeader.vue';
import { computed, ref } from 'vue';
const route=useRoute();
const router=useRouter();
const quizes =ref([]);
    quizes.value= data.filter((d)=>{
        return (d.id==route.params.id);
    })[0].questions;
     const count=ref(0);
     const total=ref(quizes.value.length);
     const correct=ref(0);
     const currentData=computed(()=>{
        if(count.value>quizes.value.length){
            count.value=total;
        }

        return {
            currentStatus:count.value+1,
            total:total.value,
            percentage:count.value/quizes.value.length *100
        }
     })
    

</script>
<template>
    <QuizHeader :data="currentData"/>
    <Question :ques="quizes[count]" @nextQuestion="(co)=>{
        if(co){
            correct++;
        }
        if(count>=total-1){
            let status =(correct>(total/3))?'pass':'fail';
            router.push(`/result/${status}`);
            return;
        }
        return count++;
    }"/>
</template>
<style scoped>

</style>