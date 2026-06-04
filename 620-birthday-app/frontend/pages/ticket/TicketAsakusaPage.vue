<template>
  <div>
    <AppHeader variant="ticket" />

    <div class="p-ticket">
      <div class="text" :class="{ 'is-active': isBaban }">浅草<br>Sky Tree</div>
      <div
        class="kurukuru anim-box"
        :class="{ 'is-animated': isAnimated }"
      >
        <!-- カードフリップ -->
        <div class="card" :class="{ 'is-flipped': isFlipped }" @click="onFlip">
          <!-- 表: blue.png -->
          <div class="card__face card__face--front kiran" :class="{ 'is-kiran': isKiran }">
            <img src="@/assets/image/blue.png" class="card__img" alt="blue" />
          </div>
          <!-- 裏: peach.svg -->
          <div class="card__face card__face--back">
            <img src="@/assets/image/peach.svg" class="card__img" alt="peach" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppHeader from "@/shared/AppHeader.vue";

const isAnimated = ref(false);
const isKiran = ref(false);
const isFlipped = ref(false);
const isBaban = ref(false);

onMounted(() => {
  setTimeout(() => { isAnimated.value = true; }, 100);
  setTimeout(() => {
    isKiran.value = true;
    setTimeout(() => { isKiran.value = false; }, 500);
  }, 2900);
  setTimeout(() => { isBaban.value = true; }, 3600);


});

const onFlip = () => {
  isFlipped.value = !isFlipped.value;
};
</script>

<style scoped>
.p-ticket {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: calc(100dvh - 120px); /* ヘッダー分を引く */
}

/* ---- くるくる出現 ---- */
.kurukuru {
  width: 120px;
  height: 120px;
  opacity: 0;
}

.kurukuru.is-animated {
  animation: kurukuru 2.8s ease-out forwards;
  opacity: 1;
}

@keyframes kurukuru {
  0% {
    transform: rotateY(0) translateY(120px);
    opacity: 0;
  }
  100% {
    transform: rotateY(720deg) translateY(0);
    opacity: 1;
  }
}

/* ---- カードフリップ ---- */
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}

.card__face--back {
  transform: rotateY(180deg);
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* ---- キラっと光る ---- */
.kiran {
  overflow: hidden;
  position: relative;
}

.kiran::after {
  background-color: #fff;
  content: "";
  display: block;
  position: absolute;
  top: -100px;
  left: 0;
  width: 30px;
  height: 100%;
  opacity: 0;
  z-index: 1;
  pointer-events: none;
}

.kiran.is-kiran::after {
  animation: kiran 0.5s linear;
}

@keyframes kiran {
  0%   { transform: scale(2)  rotate(45deg); opacity: 0; }
  20%  { transform: scale(20) rotate(45deg); opacity: 0.6; }
  40%  { transform: scale(30) rotate(45deg); opacity: 0.4; }
  80%  { transform: scale(45) rotate(45deg); opacity: 0.2; }
  100% { transform: scale(50) rotate(45deg); opacity: 0; }
}
.text {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: var(--color-text-dark);
  opacity: 0;
  transform-origin: bottom;
}

.text.is-active {
  animation: text08 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  opacity: 1;
}

@keyframes text08 {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(150%);
  }
  30% {
    opacity: 1;
  }
  90% {
    transform: scale(1.5) translateY(-30%);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

</style>
