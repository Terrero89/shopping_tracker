<script lang="ts" setup>
import {ref, reactive} from 'vue'
import { useUsersStore } from "@/stores/users";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const { isAuthenticated, login } = useAuthStore();
const store = useUsersStore();
const { users } = useUsersStore();

const props = defineProps(["login"]);

const input = ref<string>("");
const password = ref<string>("");

//validation object
const validation = reactive({
  error: false,
  validated: false,
});

const submitForm = () => {
  if (input.value !== "" && password.value !== "") {
    validation.validated = true;
    console.log(input.value, password.value);
    console.log("LOGGEd in...");

    login(input.value, password.value); //log in user
  }
  // if (password.value.length < 6) {
  //   console.log("FCKKED")
  // }
};
</script>

<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <div class="header">
        <h3>Sign in</h3>
      </div>

      <el-input class="input" v-model="input" placeholder="Email or Username" />
      <el-input class="input" v-model="password" type="password" placeholder="Password" />
      <p>{{ validation.error ? "wrong password or username" : "" }}</p>

      <p>{{ authStore.isAuthenticated }}</p>

      <button class="submit-btn" type="submit">Login</button>
      <div class="input2">
        <span >Not a member?</span>
        <NuxtLink to="/signup"> signup here</NuxtLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
.submit-btn {
  background-color: rgb(96, 150, 252);

  border: solid rgb(240, 240, 240) 1px;
  padding: 1.35rem 2rem;
  border-radius: 5px;
  margin: 3.5rem 0;
  color: black;
  width: 100%;
  color: white;
  font-size: 1.5rem;
}

.submit-btn:hover {
  background-color: rgb(138, 179, 255);

  transition: 0.5s ease-in-out;
  color: white;
}

.form {
  border: solid rgb(233, 233, 233) 1px;
  max-width: 45rem;
  height: auto;
  margin: 0 auto;
  padding: 4rem 2rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 17px 5px rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 768px) {
  .form {
    padding: 4rem 2rem;
  }
}

@media screen and (max-width: 480px) {
  .form {
    max-width: 100%;
    height: 95vh;
  }
}

.input {
  margin: 1.52em 0;
  font-size: 1.8rem;
}

.input2{

  font-size: 1.5rem;
}
</style>
