<template>
  <div class="c-gate">
    <!-- 入力フェーズ -->
    <div v-if="step === 'input'" class="c-gate__content">
      <PasswordBox
        label="ticket code?"
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

const step = ref("input");
const errorMessage = ref("");

const destinations = {
  sanrio: "/schedule/sanrio",
  asakusa: "/schedule/asakusa",
  aquarium: "/schedule/aquarium",
};

const onSubmit = async (password) => {
  const dest = destinations[password];

  if (!dest) {
    errorMessage.value = "Incorrect password. Please try again.";
    return;
  }
  errorMessage.value = "";

    router.push(dest);

};
</script>
