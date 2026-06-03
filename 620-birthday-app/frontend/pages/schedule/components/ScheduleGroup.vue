<template>
  <div class="p-schedule__group">
    <div class="p-schedule__date">{{ date }}</div>
    <div class="p-schedule__items">
      <div
        v-for="item in items"
        :key="item.time + item.event"
        class="p-schedule__item"
      >
        <div class="p-schedule__time">{{ item.time }}</div>
        <div class="p-schedule__event" v-html="item.event.replace('\n', '<br>')" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  date: { type: String, required: true },
  items: { type: Array, required: true },
});
</script>
