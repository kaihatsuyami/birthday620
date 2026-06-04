<template>
  <div class="c-gate">
    <div class="c-gate__content">
      <PasswordBox
        label="When is your birthday?"
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

const onSubmit = async (password) => {
  if (password !== "0620") {
    errorMessage.value = "Incorrect password. Please try again.";
    return;
  }
  errorMessage.value = "";
  router.push("/dashboard");
};
</script>
