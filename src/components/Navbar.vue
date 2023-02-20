<template>
  <nav v-if="user">
    <div>
      <p>Hey There {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script setup>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

const { logout, error } = useLogout();

const user = getUser();

async function handleClick() {
  await logout();
  if (!error.value) {
    console.log("user Logged out");
  }
}
</script>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
