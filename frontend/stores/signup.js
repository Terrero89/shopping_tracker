import { defineStore } from "pinia";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    id: 5,
    isSignedUp: false,
    registeredEmails: ["sergio@aol.com","Jterrero90","cami@gmail.com","ezra@gmail.com","ezra@gmail.com",],
    registeredUsernames: ["admin1","Terrero89","Jterrero90","Cterrero90",],

    //users storage for the application
//     users: [
//       {
//         id: "1",
//         email: "sergio@aol.com",
//         username: "admin",
//         password: "123",
//         isProfileCompleted: true,
//         isLoggedIn: null,
//         isAdmin: true,
//       },

//       {
//         id: "2",
//         email: "jackie@gmail.com",
//         username: "Jterrero90",
//         password: "123456",
//         isProfileCompleted: true,
//         isLoggedIn: null,
//         isAdmin: false,
//       },
//       {
//         id: "3",
//         email: "cami@gmail.com",
//         username: "Cterrero90",
//         password: "123456",
//         isProfileCompleted: false,
//         isLoggedIn: null,
//         isAdmin: false,
//       },

//       {
//         id: "4",
//         email: "ezra@gmail.com",
//         username: "Eterrero90",
//         password: "123456",
//         isProfileCompleted: true,
//         isLoggedIn: null,
//         isAdmin: false,
//       },
//     ],
//   }),

  actions: {
    //?Adds a new user to the database
    signup(user) {
 
      let id = String(this.id);
      this.users.push({ ...user, id, });
      this.registeredEmails.push(user.email)
      this.registeredUsernames.push(user.username)
      this.id++;
    },
    getters: {
    
    },
  },
});
