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



const isDetailPage = computed(() => route.path.startsWith('/apods/'));

const mainClass = computed(() => ({
  'bg-space-home': !isDetailPage.value, 
  'bg-space-detail': isDetailPage.value, 
}));
</script>


<style></style>