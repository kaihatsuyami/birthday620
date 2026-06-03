<template>
  <div class="p-select">
    <p class="p-select__title">GETTING HERE?</p>
    <div class="p-select__buttons">
      <ButtonSquare class="p-select__button--car" @click="goTo('car')">CAR</ButtonSquare>
      <ButtonSquare class="p-select__button--train" @click="goTo('train')">TRAIN</ButtonSquare>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ButtonSquare from "../../shared/ButtonSquare.vue";

const router = useRouter();

const goTo = (transport) => {
  if (transport === "car") {
    router.push("/ticket/sanrio");
  } else {
    router.push("/ticket/weather");
  }
};
</script>
