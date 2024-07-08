<template>
    <div class="rounded border md:shadow w-[21rem] h-[26rem] bg-white bg-opacity-10 overflow-hidden relative">
      <div>
        <a href="#">
          <img
            class="object-cover"
            src="https://conteudo.imguol.com.br/c/noticias/44/2021/07/09/planeta-terra-visto-do-espaco-1625856127096_v2_900x506.jpg"
            alt="card 1"
          />
        </a>
  
        <div class="px-4 py-4 h-[10rem]">
          <h3 class="font-semibold mb-2 text-2xl">{{ title }}</h3>
  
          <p class=" leading-snug opacity-95">
            {{ description }}
          </p>
        </div>
      </div>
  
      <div class=" absolute bottom-4 right-4 text-right">
        <Button text="Check it out" link="/apods" :outline="true" width="150" :hoverEffect="false" />
      </div>
    </div>
  </template>
  
  <script>
  import Button from "../components/Button.vue";
  
  export default {
    name: "Card",
    props: {
      title: String,
      description: String,
      subtitle: String,

    },
    components: {
      Button,
    },
  };
  </script>
y  