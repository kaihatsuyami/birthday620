<template>
  <p class="p-password-label">{{ label }}</p>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
