<template>
  <div class="c-gate">
    <div class="c-gate__content">
      <PasswordBox
        label="月が綺麗ですね。"
        submit-label="SUBMIT"
        :error="errorMessage"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PasswordBox from "@/shared/PasswordBox.vue";

const router = useRouter();
const errorMessage = ref("");

const onSubmit = (password) => {
  if (password !== "死んでもいいわ。") {
    errorMessage.value = "Incorrect password. Please try again.";
    return;
  }
  errorMessage.value = "";
  router.push("/ticket/transport");
};
</script>
