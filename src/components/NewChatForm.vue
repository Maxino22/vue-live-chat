<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send.."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script setup>
import { ref } from "vue";
import getUser from "../composables/getUser";
import { timestamp } from "../firebase/config";

const message = ref("");
const user = getUser();

async function handleSubmit() {
  const chat = {
    message: message.value,
    name: user.value.displayName,
    createdAt: timestamp,
  };

  console.log(chat);
  message.value = "";
}
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>
