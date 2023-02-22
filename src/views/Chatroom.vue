<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRouter } from "vue-router";
import ChatWindow from "../components/ChatWindow.vue";
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import getUser from "../composables/getUser";

const user = getUser();
const router = useRouter();
watch(user, () => {
  if (!user.value) {
    router.push({ name: "welcome" });
  }
});
</script>

<style scoped></style>
