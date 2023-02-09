<script setup>
import { defineProps } from 'vue';

const {quiz} =defineProps(['quiz']);
// console.log(quiz);
</script>
<template>
    <div class="quizCard" >
        <img :src="quiz.img" height="100" width="100" />
        <div class="cardContent">
          <h3>
           {{ quiz.name }}
          </h3>
          <p>
            {{ quiz.questions.length }} Questions
          </p>
        </div>
      </div>
</template>
<style scoped>

</style>