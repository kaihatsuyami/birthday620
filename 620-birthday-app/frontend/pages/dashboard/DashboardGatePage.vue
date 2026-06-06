<template>
  <div class="c-gate" v-if="step === 'gate'">
    <div class="c-gate__content">
      <PasswordBox
        label="When is your birthday?"
        submit-label="SUBMIT"
        :error="errorMessage"
        @submit="onSubmit"
      />
    </div>
  </div>

  <div v-else class="intro" :class="{ 'is-exiting': isExiting }">
    <div class="intro__slash"></div>
    <div class="bg" :class="{ 'is-animated': isAnimated }">
      <span class="bg-wrap"><span class="inn"> HAPPY </span></span><br>
      <span class="bg-wrap"><span class="inn"> 25TH </span></span><br>
      <span class="bg-wrap"><span class="inn"> BIRTHDAY </span></span><br>
      <span class="bg-wrap"><span class="inn"> NAOYAkun♡ </span></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PasswordBox from "@/shared/PasswordBox.vue";

const router = useRouter();
const errorMessage = ref("");
const step = ref("gate");
const isAnimated = ref(false);
const isExiting = ref(false);

const onSubmit = async (password) => {
  if (password !== "0620") {
    errorMessage.value = "Incorrect password. Please try again.";
    return;
  }
  errorMessage.value = "";
  step.value = "intro";
  setTimeout(() => { isAnimated.value = true; }, 100);
  setTimeout(() => { isExiting.value = true; }, 2200);
  setTimeout(() => { router.push("/dashboard"); }, 3500);
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cherry+Swash&display=swap');

.intro {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-primary-light);
}

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

.bg {
  text-align: center;
  font-family: 'Cherry Swash', cursive;
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
</style>
