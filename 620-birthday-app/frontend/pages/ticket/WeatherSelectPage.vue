<template>
  <div class="p-select">
    <p class="p-select__title">TOMORROW'S WEATHER?</p>
    <div class="p-select__buttons">
      <ButtonSquare class="p-select__button--sunny" @click="goTo('sunny')">SUNNY</ButtonSquare>
      <ButtonSquare class="p-select__button--rainy" @click="goTo('rainy')">RAINY</ButtonSquare>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ButtonSquare from "../../shared/ButtonSquare.vue";

const router = useRouter();

const goTo = (weather) => {
  if (weather === "sunny") {
    router.push("/ticket/asakusa");
  } else {
    router.push("/ticket/aquarium");
  }
};
</script>
