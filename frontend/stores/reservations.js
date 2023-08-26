import { defineStore } from "pinia";

export const useReservationsStore = defineStore("reservations", {
  state: () => ({
    availableDates: [],
    noAvailableDates: [],
    workingHours: [
      "10:00 AM",
      "11:30 AM",
      "02:00 PM",
      "03:30 PM",
      "05:00 PM",
      "06:30 PM",
      "08:00 PM",
    ],
    reservedDates: [
      {
        reservationId: "RES01",
        name: "Sergio Terrero",
        date: "2023-05-22",
        time: "06:00 PM",
      },
      {
        reservationId: "RES02",
        name: "Jackie Terrero",
        date: "2023-05-22",
        time: "03:00 PM",
      },
      {
        reservationId: "RES03",
        name: "Ezra Terrero",
        date: "2023-05-22",
        time: "04:00 PM",
      },
      {
        reservationId: "RES04",
        name: "Ivanoska petrier",
        date: "2023-06-29",
        time: "04:00 PM",
      },
      {
        reservationId: "RES05",
        name: "Augusta Fernandez",
        date: "2023-05-30",
        time: "11:00 AM",
      },
      {
        reservationId: "RES06",
        name: "Yorelisa Perez",
        date: "2023-05-28",
        time: "04:00 PM",
      },
      {
        reservationId: "RES07",
        name: "Ivanoska petrier",
        date: "2023-06-05",
        time: "04:00 PM",
      },
      {
        reservationId: "RES08",
        name: "Augusta Fernandez",
        date: "2023-06-02",
        time: "01:00 PM",
      },
      {
        reservationId: "RES09",
        name: "Yorelisa Perez",
        date: "2023-06-03",
        time: "04:00 PM",
      },
      {
        reservationId: "RES010",
        name: "Gina Alcantara",
        date: "2023-07-30",
        time: "10:00 AM",
      },
      {
        reservationId: "RES12",
        name: "Ezra Terrero",
        date: "2023-07-30",
        time: "11:30 AM",
      },
      {
        reservationId: "RES11",
        name: "Jackie Terrero",
        date: "2023-07-30",
        time: "02:00 PM",
      },
      {
        reservationId: "RES13",
        name: "Ivanoska Misuki",
        date: "2023-07-30",
        time: "03:30 PM",
      },
      {
        reservationId: "RES14",
        name: "Augusta Fernandez",
        date: "2023-07-30",
        time: "05:00 PM",
      },
      {
        reservationId: "RES15",
        name: "Yorelisa Perez",
        date: "2023-07-30",
        time: "06:30 PM",
      },
      {
        reservationId: "RES17",
        name: "Augusta Fernandez",
        date: "2023-07-01",
        time: "03:30 PM",
      },
      {
        reservationId: "RES18",
        name: "Yorelisa Perez",
        date: "2023-07-01",
        time: "05:00 PM",
      },
    ],
  }),
  actions: {
    reserveSlot(date) {
      let availableDates = []; //array with dates available for specific date slot
      let noAvailableDates = []; //array with dates available

      const dateReserved = this.reservedDates.filter((d) => d.date === date); // will retrieve dates for specific date arg

      for (let i = 0; i < dateReserved.length; i++) {
        noAvailableDates.push(dateReserved[i].time);
      }

      this.workingHours.forEach((item) => {
        if (!noAvailableDates.includes(item)) {
          availableDates.push(item);
        }
      });

      return availableDates;
    },
  },
  getters: {
    dates(state) {
      return state.reservedDates.filter((el) => el.date);
    },

    filteredDates() {
      return (dates) =>
        this.reservedDates.filter((date) => date.date === dates);
    },

    nextReservation() {
      return (userId) =>
        this.reservedDates.filter((date) => date.date === userId);
    },
  },
});
