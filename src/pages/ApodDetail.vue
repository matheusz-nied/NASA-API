<template>
    <div class="flex flex-col items-center justify-center py-4 px-4 md:px-12">
      <div v-if="apod" class="flex flex-col items-center justify-center gap-12">
        <!-- <h1 class="text-5xl font-medium w-4/5 md:w-4/5 text-center mt-8 mb-12 2xl:mt-28">{{ apod.title }}</h1> -->
        <h1
      class="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl mb-12 rounded-sm font-semibold bg-green-800 p-2 bg-opacity-40 rounded-sm">
      {{ apod.title }}</h1>
        <img v-if="isImage(apod.hdurl)" :src="apod.hdurl" :alt="apod.title" class="border rounded-sm"/>

        <iframe v-else-if="isYouTubeVideo(apod.url)" :src="apod.url" frameborder="0" allowfullscreen></iframe>
  <div class="mt-8 px-4 md:px-24">
            <span class="opacity-80	">Date: {{ apod.date }}</span>
            <p class="text-xl mt-6 	">{{ apod.explanation }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ApodDetail",
    data() {
      return {
        apod: null
      };
    },
 
    mounted() {
      const storedApod = localStorage.getItem('selectedApod');
      if (storedApod) {
        this.apod = JSON.parse(storedApod);
        document.body.style.backgroundImage = `url(/src/assets/read.png)`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center center';
      } else {

        this.$router.push('/');
      }
    },
    methods: {
  isImage(url) {
      return /\.(jpeg|jpg|gif|png)$/i.test(url);
    },
    isYouTubeVideo(url) {
      return /^https:\/\/www\.youtube\.com\/embed\//.test(url);
    }
    }
  };
  </script>
  