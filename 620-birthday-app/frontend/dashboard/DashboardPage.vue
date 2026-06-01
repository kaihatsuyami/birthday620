<template>
  <div class="select-button">
    <SquareButton @click="goTo('/getready')">GET READY</SquareButton>
    <SquareButton @click="goTo('/schedule')">SCHEDULE</SquareButton>
    <SquareButton @click="goTo('/ticket')">DAY2 TICKET</SquareButton>
    <SquareButton @click="goTo('/other')">OTHER</SquareButton>
  </div>
</template>

<script setup>
import SquareButton from "@/shared/ButtonSquare.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (path) => {
  router.push(path);
};
</script>