<template>
  <div class="p-schedule__group">
    <div class="p-schedule__date anim-box popup" :class="{ 'is-animated': isDateAnimated }">
      {{ date }}
    </div>
    <div class="p-schedule__items" :class="{ 'is-line-animated': isLineAnimated }">
      <div
        v-for="(item, i) in items"
        :key="item.time + item.event"
        class="p-schedule__item anim-box popup"
        :class="{ 'is-animated': isItemAnimated[i] }"
      >
        <div class="p-schedule__time">{{ item.time }}</div>
        <div class="p-schedule__event" v-html="item.event.replace('\n', '<br>')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  date: { type: String, required: true },
  items: { type: Array, required: true },
  startDelay: { type: Number, default: 100 },
});

const isDateAnimated = ref(false);
const isLineAnimated = ref(false);
const isItemAnimated = ref(props.items.map(() => false));

onMounted(() => {
  setTimeout(() => { isDateAnimated.value = true; }, props.startDelay);
  setTimeout(() => { isLineAnimated.value = true; }, props.startDelay + 100);
  props.items.forEach((_, i) => {
    setTimeout(() => {
      isItemAnimated.value[i] = true;
    }, props.startDelay + 200 + i * 100);
  });
});
</script>
