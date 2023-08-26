import { defineStore } from "pinia";
import { useUsersStore } from "./users";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: null,
    userState: '',
    email: ''
  }),

  actions: {
    login(email, pwd) {
      const usersList = useUsersStore(); //users store
      const found = usersList.users.find((user) => user.email === email);

      //* test condition to check user
      if (found.email === email && found.password === pwd) {
        this.isAuthenticated = true; //testing login

        const userItem = localStorage.setItem( found.email, found.username);
        this.userState = localStorage.getItem(found.email)
        this.email = this.userState
        console.log("Good login")
      } else {
        this.isAuthenticated = false;
        return "Not GOOD";
      }
    },

    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem("admin");
    },

    //async function to wait for the token localstorage
    async needsProfile() {
      const usersList = useUsersStore(); //users store
      
     const response = await this.userState //awaits for the response and uses it in the find method
     console.log("response:" + response)
      const found = usersList.users.find((user) => user.username === response); //find the one = to username and compared.
     return found
    },
  },

  getters: {
    isAuth(state) {
      return state.isAuthenticated;
    },
    isDone() {
      return state.userState
    }
  },
});
