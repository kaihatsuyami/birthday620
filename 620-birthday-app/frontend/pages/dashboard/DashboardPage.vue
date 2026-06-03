<template>
  <div class="p-dashboard anim-box fadein" :class="{ 'is-animated': isAnimated }">
    <AppHeader />
    <div class="p-dashboard__buttons">
      <SquareButton class="p-dashboard__button--getready" @click="goTo('/getready')">GET READY</SquareButton>
      <SquareButton class="p-dashboard__button--schedule" coming-soon @click="goTo('/schedule')">SCHEDULE</SquareButton>
      <SquareButton class="p-dashboard__button--ticket" coming-soon @click="goTo('/ticket')">DAY2 TICKET</SquareButton>
      <SquareButton class="p-dashboard__button--other" coming-soon @click="goTo('/other')">OTHER</SquareButton>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppHeader from "@/shared/AppHeader.vue";
import SquareButton from "@/shared/ButtonSquare.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isAnimated = ref(false);

onMounted(() => {
  setTimeout(() => { isAnimated.value = true; }, 100);
});

const goTo = (path) => {
  router.push(path);
};
</script>
<style lang="scss" scoped>
.anim-box.fadein {
  opacity: 0;
}

.anim-box.fadein.is-animated {
  animation: fadeIn 0.7s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}
 
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
