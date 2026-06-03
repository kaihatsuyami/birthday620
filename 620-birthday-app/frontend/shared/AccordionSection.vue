<template>
  <div class="c-accordion">
    <button class="c-accordion__header" @click="isOpen = !isOpen">
      <span class="c-accordion__title">{{ title }}</span>
      <span class="c-accordion__icon" :class="{ 'c-accordion__icon--open': isOpen }">▼</span>
    </button>
    <transition name="accordion">
      <div v-if="isOpen" class="c-accordion__body">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  title: { type: String, required: true },
});

const isOpen = ref(false);
</script>
