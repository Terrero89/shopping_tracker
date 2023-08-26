<script lang="ts" setup>
import { useUsersStore } from "@/stores/users";
import { storeToRefs } from 'pinia'

const userStore = useUsersStore();
const { users,  registeredEmails, registeredUsernames } = useUsersStore(); //
const { signup } = userStore //destructured user store for actions.

const email = ref<string>("");
const username = ref<string>("");
const password = ref<string>("");
const password2 = ref<string>("");

//individual validation for each case
const error = ref({
  error: false,
  ok: true,
  username: false,
  email: false,
  password: false,
  match: false,
  input: false,
});

//contains the data from inputs and return and object.
const data = () => {
  const userSignup = {
    email: email.value,
    username: username.value,
    password: password.value,
    password2: password2.value,
  };
  return userSignup;
};

//will submit form when clicked submit form
const submitForm = async () => {
  const emailExist = await checkEmailExist(email.value);
  const userExist = await checkUserExist(username.value);

  if (password.value !== password2.value) {
    error.value.match = true;
    console.log("Password or username are wrong");
  }
  if (emailExist) {
    error.value.email = true;
    console.log("email already Exist");
  }
  if (userExist) {
    error.value.username = true;
    console.log("username already Exist");
  }
  if (username.value === "" || email.value === "") {
    error.value.input = true;
    console.log("Fields were left in blank");
  }
  if (
    !error.value.input &&
    !error.value.username &&
    !error.value.email &&
    !error.value.password &&
    !error.value.match
  ) {
    signup(data()); //add user signup to pinia
    console.log("signing up....");
  }
};
//check if emails are already saved in DB
const checkEmailExist = async (email) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const emailExist = registeredEmails.includes(email);
  console.log("EMailExist: " + emailExist);
  return emailExist;
};
//check if usernames are already saved in DB
const checkUserExist = async (username) => {
  await new Promise((resolve) => setTimeout(resolve, 10));
  const userExist = registeredUsernames.includes(username);
  console.log("USERExist: " + userExist);
  return userExist;
};

const { data: emails } = await useFetch("https://reservation-system-api-default-rtdb.firebaseio.com/users.json")
</script>

<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <div class="header">
        <h3>Sign up</h3>
      </div>
      <el-input
        class="input"
        @click="error.username = false"
        v-model="username"
        placeholder="Username"
      />
      <p class="error-log">
        {{ error.username ? "Username already Exists" : "" }}
      </p>
      <el-input
        class="input"
        @click="error.email = false"
        v-model="email"
        type="email"
        placeholder="Email"
      />

      <p class="error-log">{{ error.email ? "Email already Exists" : "" }}</p>
      <el-input
        class="input"
        @click="error.password = false"
        v-model="password"
        type="password"
        placeholder="Password"
      />

      <el-input
        class="input"
        @click="error.match = false"
        v-model="password2"
        type="password"
        placeholder="Confirm password"
      />

      <p class="error-log">
        {{ error.match ? "Password do not match, try again..." : "" }}
      </p>
      <p class="error-log">
        {{ error.match ? "Password is less than 8 characters" : "" }}
      </p>
      <button class="submit-btn" type="submit">Sign up</button>
    </form>
    <div>{{ registeredEmails }}</div>
    <div>{{ registeredUsernames }}</div>
    <!-- <div v-for="user in users">
      <p>{{ user }}</p>
    </div> -->

    <div v-for="i in emails">
      <span>{{ i.email}}</span>
      <span>{{ i.username}}</span>
    </div>
  </div>
</template>

<style scoped>
.submit-btn {
  background-color: rgb(96, 150, 252);

  border: solid rgb(240, 240, 240) 1px;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  margin: 2rem 0;
  color: black;
  width: 100%;
  color: white;
}

.submit-btn:hover {
  background-color: rgb(138, 179, 255);

  transition: 0.5s ease-in-out;
  color: white;
}


.form {
  border: solid rgb(233, 233, 233) 1px;
  max-width: 28rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
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

.error-log {
  color: red;
  font-size: 0.8rem;
}

.input {
  margin-top: 1.52em;
}
</style>
