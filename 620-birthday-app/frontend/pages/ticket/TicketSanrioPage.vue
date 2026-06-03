<template>
  <div>
    <AppHeader variant="ticket" />

    <div class="p-sanrio">
      <div
        class="kurukuru anim-box kiran"
        :class="{ 'is-animated': isAnimated, 'is-kiran': isKiran }"
        @click="onKiran"
      >
        <img src="@/assets/image/blue.png" class="kurukuru__img" alt="blue" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppHeader from "@/shared/AppHeader.vue";

const isAnimated = ref(false);
const isKiran = ref(false);

onMounted(() => {
  setTimeout(() => { isAnimated.value = true; }, 100);
});

const onKiran = () => {
  if (isKiran.value) return;
  isKiran.value = true;
  setTimeout(() => { isKiran.value = false; }, 500);
};
</script>

<style scoped>
.p-sanrio {
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

/* ---- くるくる出現 ---- */
.kurukuru {
  width: 120px;
  height: 120px;
  opacity: 0;
}

.kurukuru.is-animated {
  animation: kurukuru 1.4s ease-out forwards;
  opacity: 1;
}

.kurukuru__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes kurukuru {
  0% {
    transform: rotateY(0) translateY(40px);
    opacity: 0;
  }
  100% {
    transform: rotateY(360deg) translateY(0);
    opacity: 1;
  }
}

/* ---- キラっと光る ---- */
.anim-box.kiran {
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.anim-box.kiran::before {
  background-color: #fff;
  content: "";
  display: block;
  position: absolute;
  top: -100px;
  left: 0;
  width: 30px;
  height: 100%;
  opacity: 0;
}

.anim-box.kiran.is-kiran::before {
  animation: kiran 0.5s linear;
}

@keyframes kiran {
  0%   { transform: scale(2)  rotate(45deg); opacity: 0; }
  20%  { transform: scale(20) rotate(45deg); opacity: 0.6; }
  40%  { transform: scale(30) rotate(45deg); opacity: 0.4; }
  80%  { transform: scale(45) rotate(45deg); opacity: 0.2; }
  100% { transform: scale(50) rotate(45deg); opacity: 0; }
}
</style>
