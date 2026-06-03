<template>
  <form @submit.prevent="handleSubmit">
    <PasswordLabel v-if="label" :label="label" />
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
    <p v-if="error" class="c-validation-error">{{ error }}</p>
  </form>
</template>


<script setup>
import { ref } from "vue";
import PasswordInput from "./PasswordInput.vue";
import PasswordLabel from "./PasswordLabel.vue";
import SubmitButton from "./SubmitButton.vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  submitLabel: {
    type: String,
    default: "Submit",
  },
  error: {
    type: String,
    default: "",
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
