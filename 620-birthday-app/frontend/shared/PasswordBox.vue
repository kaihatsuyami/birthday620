<template>
    <form @submit.prevent="handleSubmit">
      <div class="p-password-input">
      <PasswordInput v-model="password" />
      </div>

      <div class="p-password-submit">
      <SubmitButton
        :loading="loading"
        :disabled="loading || !password"
        :label="submitLabel"
      />
      </div>
    </form>
</template>


<script setup>
import { ref } from "vue";
import PasswordInput from "./PasswordInput.vue";
import SubmitButton from "./SubmitButton.vue";

const props = defineProps({
  submitLabel: {
    type: String,
    default: "Submit",
  },
});

const emit = defineEmits(["submit"]);

const password = ref("");
const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;

  try {
    emit("submit", password.value);
  } finally {
    loading.value = false;
  }
};
</script>

