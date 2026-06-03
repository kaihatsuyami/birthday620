<template>
  <button
    class="square-button"
    :class="{ 'is-coming-soon': comingSoon }"
    :disabled="disabled || comingSoon"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  comingSoon: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  if (props.disabled) return;
  emit("click", event);
};
</script>
