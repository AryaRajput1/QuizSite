<script setup>
import { ref,watch } from 'vue';
const Logo =ref("QuizSite");
</script>
<template>
    <header>
        <h2>{{Logo}}</h2>
        <div class="searchingArea">
          <input type="text" placeholder="Search" v-model="search"/>
          <button>Search</button>
        </div>
      </header>
</template>
<style scoped>

</style>
