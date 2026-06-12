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
          <!-- 表: skytree.png -->
          <div class="card__face card__face--front">
            <div class="card__img-wrap kiran" :class="{ 'is-kiran': isKiran }">
              <img src="@/assets/image/skytree.png" class="card__img" alt="skytree" />
            </div>
          </div>
          <!-- 裏: asakusa.png -->
          <div class="card__face card__face--back">
            <img src="@/assets/image/asakusa.png" class="card__img" alt="asakusa" />
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
