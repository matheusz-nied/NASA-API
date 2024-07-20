<template>
  <button :class="[
    'font-medium py-2 px-4 ',
    outline
      ? 'bg-transparent border border-secondary text-secondary'
      : 'bg-primary text-black shadow-xl rounded hover:bg-gradient-to-b dark:shadow-green-900 shadow-green-200 hover:shadow-2xl hover:shadow-green-400 hover:-tranneutral-y-px',
    hoverEffect ? 'hover:-translate-y-1 duration-300' : ''
  ]" :style="{
        width: width ? `${width}px` : '192px',
        height: height ? `${height}px` : '40px'
      }">
    <RouterLink :to="link">{{ text || 'View more' }}</RouterLink>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: { type: String, default: 'View more' },
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

<style scoped></style>