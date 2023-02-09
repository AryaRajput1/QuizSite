<script setup>
import { ref,watch } from 'vue';
import Card from './Card.vue';
import datas from '../data/Quizes.json';
import { useRouter } from 'vue-router';

const Logo =ref("QuizSite");
const data =ref(datas);
const router=useRouter();
const search =ref('');

watch(search,(val,oldval)=>{
    
    data.value=datas.filter(d=>{
        return d.name.toLowerCase().includes(search.value.toLowerCase());
    })
    
})

</script>
<template>
  <main>
    <header>
      <h2>{{Logo}}</h2>
      <div class="searchingArea">
        <input type="text" placeholder="Search" v-model="search"/>
        <button>Search</button>
      </div>
    </header>
   <div class="quizSec">
    <Card v-for="(d,i) in data" :key="i" :quiz="d" @click="router.push(`/quiz/${d.id}`)"/>
   </div>

  </main>
</template>
<style >
*{
  box-sizing: border-box;
}
header{
  display: flex;
  flex-direction: row;
  padding: 0px 200px;
  height: 10vh;
  width: 100vw;
  align-items: center;
  background-color: rgb(1, 86, 120);
  color: white;

}
input{
  height: 30px;
  width: 200px;
  border: none;
  padding: 10px;
}
button{
  height: 30px;
  width: 100px;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
  margin: 10px;
}
img{
  width: 100%;
  height: 70%;

}
.searchingArea{
  margin: 0px 30px;
}
.quizSec{
  padding: 10px 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.quizCard{
  height: 40vh;
  width: 20vw;
  margin: 10px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;

  cursor: pointer;
}
.cardContent{
  padding: 5px;
}
</style>