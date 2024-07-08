<template>

<main  class="bg-space-home h-100">

  <Navbar />
  
  <RouterView />

  <Footer/>
</main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { getApods } from './api/apod';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

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