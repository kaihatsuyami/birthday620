<template>
  <header class="l-header" :class="[variant ? `l-header--${variant}` : '', { 'is-animated': isAnimated }]">
    <button v-if="backTo" class="l-header__back" @click="router.push(String(backTo))">&#8592;</button>
    <p class="l-header__title">{{ route.meta.title }}</p>
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps({
  variant: { type: String, default: "" },
});

const route = useRoute();
const router = useRouter();
const backTo = computed(() => route.meta.backTo);

const isAnimated = ref(false);
onMounted(() => {
  setTimeout(() => { isAnimated.value = true; }, 50);
});
</script>
