<script setup lang="ts">
import { ref } from "vue";
import { useReservationsStore } from "@/stores/reservations";
import { storeToRefs } from "pinia";
const reservationsStore = useReservationsStore();
const { filteredDates, reservedDates, workingHours } = reservationsStore;
const {} = storeToRefs(reservationsStore);
//?REFS
const date = ref<string>("2023-07-29"); //date picker



const reservations = ref<string[]>([]);

//?COMPUTED PROPERTIES

//function used to clear inputs after submitted
const clearInputs = (): void => {
  date.value = "";
};

//submits form with data to server

const submitHandler = () => {
  date: date.value;

  clearInputs();
};
</script>

<template>
  <form class="calendar">
    <!-- <CalendarPicker v-model="date" /> -->

    <div class="date col-lg-6 col-sm-12">
      <div class="dates-title my-3">Available Hours</div>
      <CalendarHours :date-time="date" />
      <div class="my-2 d-grid gap-2">
        <button
          class=" d-grid gap-2 btn btn-md btn-primary my-2 text"
          type="button"
        >
         Make reservation
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.not-available {
  color: red;
  border: solid blue 1px;
}

.text {
  font-size: 0.7rem;
}
.wrapper {
  max-width: auto;
  margin: 0 auto;
  border: solid rgb(240, 240, 240) 1px;
  background-color: rgb(236, 243, 248);

  height: 95vh;
  border-radius: 5px;
  padding: 0 0.3rem;
}

.option-box {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.option-box .box {
  font-size: 0.75rem;
  color: rgb(61, 61, 61);
  text-decoration: none;
  list-style: none;
  text-align: center;
  max-width: 2rem;
}
.option-box .box button {
  font-size: 0.75rem;
  color: rgb(61, 61, 61);
  text-decoration: none;
  list-style: none;
  text-align: center;
  max-width: 2rem;
}
.option-box .box {
  width: 2rem;
}

.option-box .box:hover {
  color: white;
  border: none;
  transition: 0.1s;
}
.option-box .box button {
  border: none;
  background: transparent;
}

.calendar-wrapper {
  /* border: solid rgb(129, 129, 129) 1px; */
  border-radius: 3px;
  margin: 1.5rem auto;
  padding: 1rem;
  max-width: 35rem;
}
.dates-selection {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 5rem;
  border: solid rgb(248, 248, 248) 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0 auto;

  /* padding: 0.5rem 0.8rem; */
}

.form {
  margin: 0 auto;
}

.dates {
  margin: 0.3rem;
}
.date {
  margin: 0 auto;
  max-width: 35rem;
}

.pickers {
  margin: 1rem auto;
}
.dates-title {
  text-align: center;
}

.noDate {
  background: red;
}
</style>
