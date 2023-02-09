<script setup>
import { useRoute,useRouter} from 'vue-router';
const route=useRoute();
</script>
<template>
    {{ route.params.status }}
</template>
<style scoped>

</style>
