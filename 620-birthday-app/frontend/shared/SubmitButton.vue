<template>
  <button
    type="submit"
    :disabled="disabled"
  >
    {{ loading ? "Loading..." : label }}
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "Submit",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>