<script setup>
import { defineProps } from 'vue';
const {ques}=defineProps(['ques']);

</script>

<template>
    
    <div class="option-sec">
    <h1>{{ques.text}} ?</h1>
    <p  class="option" v-for="op in ques.options" :key="op.label" @click='$emit("nextQuestion",op.isCorrect)'>{{op.label}}). {{op.text}}</p>
    
</div>
</template>
<style scoped>
.option-sec{
    width: 40vw;
    min-height: 60vh;
    background-color: rgb(248, 242, 237);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 40px;
    margin:30px auto;
    
}
p{
    font-size: 1.2em;
    background-color: rgb(223, 253, 253);
    margin: 10px;
    padding: 10px;
    cursor: pointer;
}
</style>