<template>
  <div class="p-dashboard">
    <AppHeader />
    <div class="p-dashboard__buttons">
      <SquareButton class="p-dashboard__button--getready anim-box slidein" :class="{ 'is-animated': isAnimated2 }" @click="goTo('/getready')">GET READY</SquareButton>
      <SquareButton class="p-dashboard__button--schedule anim-box slidein" :class="{ 'is-animated': isAnimated3 }" @click="goTo('/schedule')">SCHEDULE</SquareButton>
      <SquareButton class="p-dashboard__button--ticket anim-box slidein" :class="{ 'is-animated': isAnimated4 }" @click="goTo('/ticket')">DAY2 TICKET</SquareButton>
      <!-- <SquareButton class="p-dashboard__button--other anim-box slidein" :class="{ 'is-animated': isAnimated5 }" @click="goTo('/other')">OTHER</SquareButton> -->
      <!-- <SquareButton class="p-dashboard__button--schedule anim-box slidein" coming-soon :class="{ 'is-animated': isAnimated3 }" @click="goTo('/schedule')">SCHEDULE</SquareButton> -->
      <!-- <SquareButton class="p-dashboard__button--ticket anim-box slidein" coming-soon :class="{ 'is-animated': isAnimated4 }" @click="goTo('/ticket')">DAY2 TICKET</SquareButton> -->
      <SquareButton class="p-dashboard__button--other anim-box slidein" coming-soon :class="{ 'is-animated': isAnimated5 }" @click="goTo('/other')">OTHER</SquareButton>
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppHeader from "@/shared/AppHeader.vue";
import SquareButton from "@/shared/ButtonSquare.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isAnimated2 = ref(false);
const isAnimated3 = ref(false);
const isAnimated4 = ref(false);
const isAnimated5 = ref(false);

onMounted(() => {
  setTimeout(() => { isAnimated2.value = true; }, 200);
  setTimeout(() => { isAnimated3.value = true; }, 300);
  setTimeout(() => { isAnimated4.value = true; }, 400);
  setTimeout(() => { isAnimated5.value = true; }, 500);
});

const goTo = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
/* ---- ボタンアニメーション ---- */
.anim-box.slidein {
  transform: translateX(180px);
  opacity: 0;
}

.anim-box.slidein.is-animated {
  animation: slideIn 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(180px);
    opacity: 0;
  }
  40%, 100% {
    opacity: 1;
  }
  100% {
    transform: translateX(0);
  }
}
</style>
