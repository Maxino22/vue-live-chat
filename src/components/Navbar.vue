<template>
  <nav>
    <div>
      <p>Hey There... display name here</p>
      <p class="email">Currently logged in as ... email</p>
    </div>
    <button>Logout</button>
  </nav>
</template>

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
