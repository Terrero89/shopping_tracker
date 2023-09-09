<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const { isAuthenticated, isAuth, logout,needsProfile } = useAuthStore();

const auth = computed(() => authStore.isAuth);
const name = needsProfile()
</script>

<template>
  <header>
    <nav class="navbar">
      <div>
        <li class="nav-logo"><a href="/">TrackerApp</a></li>
      </div>
      <div class="links">
        <ul class="nav-links">
          <li><a href="/user">Reserve</a></li>
          <li><a href="#">About</a></li>

          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <NuxtLink v-if="!auth" to="/login" class="login-btn">
        <el-button class="login-btn">Login</el-button></NuxtLink
      >
      <NuxtLink v-if="auth" to="/login" @click="logout" class="login-btn">
        <el-button class="login-btn">LOGOUT</el-button></NuxtLink
      >
      <NuxtLink to="/signup" class="signup-btn">
        <el-button type="info" class="signup-btn">Sign up</el-button></NuxtLink
      >
    </nav>
  </header>
</template>

<style scoped>
.nav-logo {
  font-size: 18px;
  padding: 10px 12px;

  list-style: none;
  color: black;
}

.nav-logo a {
  color: rgb(252, 252, 252);
  text-decoration: none;
}
.navbar {
  /* border-radius: 0 0 10px 10px; */
  /* background-color: #0bb1fd; */
  background-color: #313131;
  padding: 8px 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border:solid rgb(197, 197, 197) 1px; */
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

}

@media screen and (max-width: 678px) {
  .nav-links {
    display: none;
  }
}

.nav-links li {
  margin-right: 10px;

}

.links {
  margin: 0 4rem;

}

.nav-links li a {
  text-decoration: none;
  color: #333;
  padding: 5px;
  border-radius: 5px;
  color: white; 
}

.buttons {
  margin-left: 10rem;
  display: block;
  border: solid red 1px;
}

.login-btn {
  text-decoration: none;
  border: none;
  color: black;
}
.signup-btn {
  padding: 8px 16px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
