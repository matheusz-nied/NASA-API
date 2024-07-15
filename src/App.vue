<template>

  <main :class="mainClass" class="delay-100	">

    <Navbar />

    <RouterView />

    <Footer></Footer>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { getApods } from './api/apod';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const apods = ref([]);
const loading = ref(true);
const route = useRoute();

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

const isDetailPage = computed(() => route.path.startsWith('/apods/'));

// Classe principal dinâmica com base na página atual
const mainClass = computed(() => ({
  'bg-space-home': !isDetailPage.value, // Página inicial
  'bg-space-detail': isDetailPage.value, // Página de detalhes
}));
</script>


<style></style>