<template>
  <div class='abc'>
    <!-- 入力フェーズ -->
    <PasswordBox
      v-if="step === 'input'"
      submit-label="SUBMIT"
      @submit="onSubmit"
    />

    <!-- 演出フェーズ -->
    <transition name="fade">
      <div v-if="step === 'intro'" class="intro">
        <h1>HAPPY 25TH BIRTHDAY</h1>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PasswordBox from "@/shared/PasswordBox.vue";

const router = useRouter();

const step = ref("input");

const onSubmit = async (password) => {
  if (password !== "0620") return;

  step.value = "intro";

  setTimeout(() => {
    router.push("/dashboard");
  }, 1500);
};
</script>
<style scoped>
body {
  background: red !important;
}
.abc {
  background: hotpink !important;
  border: 10px solid black !important;
}

</style>