<template>
  <div class="p-dashboard">
    <!-- 演出フェーズ -->
    <div v-if="step === 'intro'" class="intro" :class="{ 'is-exiting': isExiting }">
      <div class="intro__slash"></div>
      <div class="bg" :class="{ 'is-animated': isAnimated }">
        <span class="bg-wrap"><span class="inn"> HAPPY </span></span><br>
        <span class="bg-wrap"><span class="inn"> 25TH </span></span><br>
        <span class="bg-wrap"><span class="inn"> BIRTHDAY </span></span><br>
        <span class="bg-wrap"><span class="inn"> NAOYAkun♡ </span></span>
      </div>
    </div>

    <AppHeader v-if="step === 'content'" />
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

<script>
// モジュールレベルのフラグ（初回訪問のみintroを表示）
let introShown = false;
</script>

<script setup>
import { ref, onMounted } from "vue";
import AppHeader from "@/shared/AppHeader.vue";
import SquareButton from "@/shared/ButtonSquare.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const step = ref("content");
const isAnimated = ref(false);
const isExiting = ref(false);
const isAnimated2 = ref(false);
const isAnimated3 = ref(false);
const isAnimated4 = ref(false);
const isAnimated5 = ref(false);

const startButtonAnimations = () => {
  setTimeout(() => { isAnimated2.value = true; }, 200);
  setTimeout(() => { isAnimated3.value = true; }, 300);
  setTimeout(() => { isAnimated4.value = true; }, 400);
  setTimeout(() => { isAnimated5.value = true; }, 500);
};

onMounted(() => {
  if (!introShown) {
    introShown = true;
    step.value = "intro";
    setTimeout(() => { isAnimated.value = true; }, 100);
    setTimeout(() => { isExiting.value = true; }, 2200);
    setTimeout(() => {
      step.value = "content";
      startButtonAnimations();
    }, 3500);
  } else {
    startButtonAnimations();
  }
});

const goTo = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
/* ---- 全画面intro ---- */
.intro {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-primary-light);
}

/* ---- スラッシュライン ---- */
.intro__slash {
  position: absolute;
  top: 50%;
  left: -100%;
  width: 300%;
  height: 4px;
  background: var(--color-bg);
  transform: rotate(-65deg) translateY(-50%) scaleX(0) scaleY(1);
  transform-origin: center center;
  z-index: 10;
}

.intro.is-exiting .intro__slash {
  animation: slash-wipe 2.0s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes slash-wipe {
  0%   { transform: rotate(-65deg) translateY(-50%) scaleX(0)  scaleY(1); }
  25%  { transform: rotate(-65deg) translateY(-50%) scaleX(1)  scaleY(1); }
  100% { transform: rotate(-65deg) translateY(-50%) scaleX(1)  scaleY(300); }
}

/* ---- bgアニメーション ---- */
.bg {
  text-align: center;
}

.bg .bg-wrap {
  position: relative;
  display: inline-block;
  margin-top: 5px;
}

.bg.is-animated .bg-wrap::before {
  animation: bg 2.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  background: linear-gradient(to right, var(--color-primary-shadow) 0%, var(--color-primary) 50%, var(--color-primary-secondary) 100%);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: left center;
}

.bg .bg-wrap .inn {
  color: var(--color-primary-contrast);
  display: inline-block;
  font-size: 60px;
  font-weight: bold;
  padding: 3px 10px;
  position: relative;
  z-index: 1;
}

@keyframes bg {
  0% {
    opacity: 0;
    transform: scaleX(0) translateX(-5%);
  }
  30%, 100% {
    opacity: 1;
    transform: scaleX(1) translateX(0);
  }
}

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
