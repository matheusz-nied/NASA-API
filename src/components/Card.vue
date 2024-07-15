<template>
  <div class="rounded border md:shadow w-[21rem] h-[28rem] bg-white bg-opacity-10 overflow-hidden relative">
    <a @click.prevent="goToDetail">
      <img v-if="isImage(apod.url)" class="object-cover w-full h-[12rem]"  :src="apod.url" :alt="apod.title" />

<iframe v-else-if="isYouTubeVideo(apod.url)" class="object-cover w-full h-[12rem]"  :src="apod.url" frameborder="0" allowfullscreen></iframe>
<div class="px-4 py-4 h-[10rem]">
        <h3 class="font-semibold mb-2 text-2xl">{{ title }}</h3>
        <span class="opacity-80">{{ apod.date }}</span>
        <p class="leading-snug mt-1 line-clamp-3">
          {{ explanation }}
        </p>
      </div>
      <div class="absolute bottom-4 right-4 text-right">
        <Button text="Check it out" :outline="true" width="150" :hoverEffect="false"></Button>
      </div>
    </a>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "Card",
  props: {
    title: String,
    explanation: String,
    imageUrl: String,
    link: String,
    apod: Object, 
  },
  components: {
    Button,
  },
  methods: {
    goToDetail() {
      if (this.apod && this.apod.date) {
        console.log(this.apod);
        localStorage.setItem('selectedApod', JSON.stringify(this.apod));
        this.$router.push(`/apods/${this.apod.date}`);
      } else {
        this.$router.push(this.link);
      }
    }, isImage(url) {
      return /\.(jpeg|jpg|gif|png)$/i.test(url);
    },
    isYouTubeVideo(url) {
      return /^https:\/\/www\.youtube\.com\/embed\//.test(url);
    }
  }
};
</script>
<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>