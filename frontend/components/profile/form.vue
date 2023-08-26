<script lang="ts" setup>
import { useUsersStore } from "@/stores/users";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const { isAuthenticated } = useAuthStore();
const store = useUsersStore();
const { users } = useUsersStore();

const props = defineProps(["login"]);

const first = ref<string>("");
const last = ref<string>("");
const email = ref<string>("");
const username = ref<string>("");
const gender = ref<string>("");
const age = ref<number>(0);
const phone = ref<string>("");
const dateCreated = ref(new Date().toLocaleDateString());
const isActive = ref<any>(true);

const profileObj = () => {
  const profileData = {
    first: first.value,
    last: last.value,
    email: email.value,
    username: username.value,
    gender: gender.value,
    age: age.value,
    phone: phone.value,
    dateCreated: dateCreated.value,
    activeStatus: isActive.value,
  };

  return profileData;
};

//validation object
const validation = reactive({
  error: false,
  validated: false,
});

const submitForm = () => {
  console.log(profileObj());
};
</script>

<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <div class="header">
        <h3>PROFILE</h3>
      </div>
      <div>
        <label class="label" for="">First</label>
        <el-input class="input" v-model="first" placeholder="First Name" />
      </div>
      <div>
        <label class="label" for="">Last</label>
        <el-input class="input" v-model="last" placeholder="Last Name" />
      </div>

      <div>
        <label class="label" for="username">Username</label>
        <el-input class="input" v-model="username" placeholder="Username" />
      </div>

      <div>
        <label class="label" for="">Email</label>
        <el-input class="input" v-model="email" placeholder="Email" />
      </div>

      <div>
        <label class="label" for="">Phone number</label>
        <el-input class="input" v-model="phone" placeholder="Phone" />
      </div>

      <div>
        <div>
          <label class="label" for="">Date Created</label>
          <el-input
            disabled
            class="input"
            v-model="dateCreated"
            placeholder="Phone"
          />
        </div>
        <span class="label2">Gender</span>
        <el-radio-group v-model="gender">
          <el-radio label="male">Male</el-radio>
          <el-radio label="female">Female</el-radio>
          <el-radio label="pna">Prefer not to answer</el-radio>
        </el-radio-group>
      </div>

      <div>
        <div>
          <span class="label2">Age</span>
          <el-input-number class="input" v-model="age" placeholder="0" />
        </div>
      </div>

      <div>
        <label class="label2" for="">Active</label>
        <el-switch
          v-model="isActive"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>

      <button class="submit-btn" type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.submit-btn {
  border: solid rgb(240, 240, 240) 1px;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  margin: 2rem 0;
  color: black;
  width: 100%;
}

.submit-btn:hover {
  background-color: rgb(138, 179, 255);
  transition: 0.5s ease-in-out;
  color: white;
}

.form {
  border: solid rgb(233, 233, 233) 1px;
  max-width: 25rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 17px 5px rgba(0, 0, 0, 0.1);
}

.input {
  margin: 1.52em 0;
}

.label {
  font-size: 0.8rem;
}

.label2 {
  margin-right: 1rem;
  font-size: 0.8rem;
}
</style>
