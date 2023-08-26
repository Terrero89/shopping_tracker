import { defineStore } from "pinia";
import axios from "axios";
export const useUsersStore = defineStore("users", {
  state: () => ({
    id: 5,
    SIGNUP_URL: "https://reservation-system-api-default-rtdb.firebaseio.com",
    isSignedUp: false,
    registeredEmails: [
      "sergio@aol.com",
      "Jterrero90",
      "cami@gmail.com",
      "ezra@gmail.com",
      "ezra@gmail.com",
    ],
    registeredUsernames: ["admin1", "Terrero89", "Jterrero90", "Cterrero90"],

    //users storage for the application
    users: [
      {
        id: "1",
        email: "sergio@aol.com",
        username: "admin",
        password: "123",
        isProfileCompleted: true,
        isLoggedIn: null,
        isAdmin: true,
      },

      {
        id: "2",
        email: "jackie@gmail.com",
        username: "Jterrero90",
        password: "123456",
        isProfileCompleted: true,
        isLoggedIn: null,
        isAdmin: false,
      },
      {
        id: "3",
        email: "cami@gmail.com",
        username: "Cterrero90",
        password: "123456",
        isProfileCompleted: false,
        isLoggedIn: null,
        isAdmin: false,
      },

      {
        id: "4",
        email: "ezra@gmail.com",
        username: "Eterrero90",
        password: "123456",
        isProfileCompleted: true,
        isLoggedIn: null,
        isAdmin: false,
      },
    ],
  }),

  actions: {
    //add a new user that signed up
    async signup(userData) {
      let id = String(this.id);
      //user info coming from input
      const userInfo = {
        ...userData,
        id,
      };

      let response = await fetch(this.SIGNUP_URL + "/users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      // this.saveCredentials(userInfo.email)
      // this.saveCredentials(userInfo.username)
      this.registeredEmails.push(userData.email);
      this.registeredUsernames.push(userData.username);
      this.savedCredentials(userData.email, "emails");
      this.savedCredentials(userData.username, "usernames");
      this.id++;

      if (!response.ok) {
        console.log("ERROR ");
      }
    },
//will dynamically add the email/usernames of new user DRY
    savedCredentials(credential, url) {
      let response = fetch(this.SIGNUP_URL + `/${url}.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
      });

      if (!response.ok) {
        console.log("ERROR ");
      }
    },

    // async fetchUsers() {
    //   const response = await fetch(
    //     "https://project-manager-app-f9829-default-rtdb.firebaseio.com/projects.json"
    //   );
    //   const responseData = await response.json();
    //   this.projects = responseData;

    //   if (!response.ok) {
    //     const error = new Error(responseData.message || "Failed to fetch!");
    //     throw error;
    //   }

    //   const projects = [];

    //   for (const key in this.projects) {
    //     const project = {
    //       id: key,
    //       user: responseData[key].user,
    //       category: responseData[key].category,
    //       projectName: responseData[key].projectName,
    //       description: responseData[key].description,
    //       startDate: responseData[key].startDate,
    //       endDate: responseData[key].endDate,
    //       technologies: responseData[key].technologies,
    //       projectAge: responseData[key].projectAge,
    //       isComplete: responseData[key].isComplete,
    //       dateModified: responseData[key].dateModified,
    //     };
    //     projects.push(project);
    //   }
    //   this.projects = projects;
    // },

    // editProject(param) {
    //   //trick, if project is not eqwual to edit project, then edited project will be equal to what ever is changed to
    //   let foundProject = this.projects.find((project) => project.id === param); //finds the project from the
    //   return foundProject;
    // },

    // async updateProjectRequest(id) {
    //   const url = `https://project-manager-app-f9829-default-rtdb.firebaseio.com/projects/${id}.json`;
    //   const payload = this.editPro; // payload will be equal to the new updated task
    //   const options = {
    //     method: "PUT",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify(payload),
    //   };
    //   fetch(url, options).then((response) =>
    //     console.log("response from pinia " + response.status)
    //   );

    //   if (!response.ok) {
    //     console.log("Super error 400");
    //   }
      
    // },

    // async deletedHistory(data, id) {
    //   const historyUrl = {
    //     ...data,
    //     parentId: id,
    //     id: this.historyId++,
    //     dateModified: new Date(),
    //   };

    //   let response = await fetch(
    //     `https://project-manager-app-f9829-default-rtdb.firebaseio.com/history.json`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(historyUrl),
    //     }
    //   );
    //   if (!response.ok) {
    //     console.log("ERROR HISTORY");
    //   }
    // },
    getters: {},
  },
});
