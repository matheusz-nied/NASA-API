<template>
    <div class="flex flex-col items-center justify-center py-16 px-4 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <Card
          v-for="apod in apods"
          :key="apod.date"
          :title="apod.title"
          :explanation="apod.explanation"
          :apod="apod" 
          :imageUrl="apod.url"
        />
      </div>
    </div>
  </template>
  
  <script>
  import Card from "../components/Card.vue";
  import { getApods } from "@/api/apod";
  
  export default {
    name: "Apods",
    components: {
      Card,
    },
    data() {
      return {
        apods: []
      };
    },
    async mounted() {
      try {
        const start_date = "2023-01-01";
        const end_date = "2023-01-31";
        const response = await getApods(start_date, end_date);
        this.apods = response.data;
      } catch (error) {
        console.error("Error fetching APODs:", error);
      }
    }
  };
  </script>
  