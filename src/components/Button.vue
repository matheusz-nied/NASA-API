<template>
    <button
      :class="[
        'font-medium py-2 px-4 rounded',
        outline
          ? 'bg-transparent border border-secondary text-secondary'
          : 'bg-primary text-black',
        hoverEffect ? 'hover:-translate-y-1 duration-300' : ''
      ]"
      :style="{
        width: width ? `${width}px` : '192px',
        height: height ? `${height}px` : '40px'
      }"
    >
      <RouterLink :to="link">{{ text }}</RouterLink>
    </button>
  </template>
  
  <script>
  export default {
    name: "Button",
    props: {
      text: String,
      link: String,
      outline: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: null
      },
      height: {
        type: Number,
        default: null
      },
      hoverEffect: {
        type: Boolean,
        default: true
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  