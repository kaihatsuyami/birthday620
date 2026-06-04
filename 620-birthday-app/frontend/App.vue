<template>
  <div class="page-fade" :class="{ 'is-animated': isAnimated }">
    <router-view />
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isAnimated = ref(false)

watch(() => route.path, async () => {
  isAnimated.value = false
  await nextTick()
  setTimeout(() => { isAnimated.value = true }, 100)
}, { immediate: true })
</script>

<style>
.page-fade {
  opacity: 0;
}
.page-fade.is-animated {
  animation: pageFadeIn 0.5s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}
@keyframes pageFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>
