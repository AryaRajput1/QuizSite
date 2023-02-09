<script setup>
import { defineProps } from 'vue';
const {data}=defineProps(['data']);
</script>


<template>
    
    <div class="header">
        <h1>Question {{ data.currentStatus }}/{{data.total}}</h1>
        <div class="bar">
            <div class="fill" :style="{width:`${data.percentage}%`}"></div>
        </div>

    </div>
</template>
<style scoped>
.header{
    width: 40vw;
    padding: 10px;
    margin:10px auto;
    
}
.bar{
    height: 5vh;
    width: 12vw;
    border: 2px solid burlywood;
    margin: 5px;
}
.fill{
    background-color: burlywood;
    
    height: 100%;
}
</style>