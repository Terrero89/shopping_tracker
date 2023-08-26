<script setup lang="ts">
import { useReservationsStore } from "@/stores/reservations";
import { storeToRefs } from "pinia";
const reservationsStore = useReservationsStore();
const { filteredDates, reservedDates, workingHours } = reservationsStore;
const {} = storeToRefs(reservationsStore);

const props = defineProps(["dateTime"]);

const timeSlot = ref<string>("");

//?METHODS
const getSlots = (date: string): string[] => {
  let reservedTimes: string[] = []; //array with dates available

  const dateReserved = reservedDates.filter((d) => d.date === date); // will retrieve dates for specific date arg

  for (let i = 0; i < dateReserved.length; i++) {
    reservedTimes.push(dateReserved[i].time.toString());
  }

  return reservedTimes;
};

// const checkSlotsAndReserve = (time: string[]): string[] => {
//   let availableTimes: string[] = [];
//   let dates = time;
//   for (let i = 0; i < workingHours.length; i++) {}
//   return availableTimes;
// };


</script>

<template>
  <div class="dates-selection">
    <div class="wrp" v-for="(times) in workingHours" :key="times">
      <div class="dates" >
        <div class="border border-gray  py-1 px-2 rounded-1 text">
          <input type="radio"  :value="times" v-model="timeSlot" class="mx-1" />
          
          {{ times }}
        </div>
      </div>
    </div>
  </div>


  <!-- {{ checkSlotsAndReserve(getSlots(props.dateTime)) }} -==========>
  {{ getSlots(props.dateTime) }} -->
</template>

<style scoped>
.red{
  background-color: red;
}
.dates {
  margin: 0.3rem;
}
.text {
  font-size: 0.7rem;
}







</style>
