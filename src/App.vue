<template>
  <header>
    <div class="wrapper">
      <h1>Hello Vue Router</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/apods">Apod</RouterLink>
        <RouterLink :to="`/apods/${selectedApodId}`">Apod detail</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { getApods } from './api/apod';

const apods = ref([]);
const loading = ref(true);

const fetchApods = async () => {

  try {
    console.log('Buscando imagens...');
    const response = await getApods("2024-01-01", "2024-07-01");
    console.table(response.data)
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchApods();
});
</script>


<style>
</style>