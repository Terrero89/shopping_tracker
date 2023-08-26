<script setup lang="ts">
import { ref, computed } from "vue";
import { useReservationsStore } from "@/stores/reservations";
import { storeToRefs } from "pinia";
const reservationsStore = useReservationsStore();
const { reservedDates, workingHours, filteredDates } = reservationsStore;
const {} = storeToRefs(reservationsStore);

const dateInput = ref<string>("");
type convert = string | number;

const dateFormat = computed<string>(() => {
  let date = new Date(dateInput.value);
  let DD: convert = date.getDate();
  let MM: convert = date.getMonth() + 1;
  let YYYY: convert = date.getFullYear();

  if (MM < 10) {
    MM = `0${MM}`;
  }

  if (DD < 10) {
    DD = `0${DD}`;
  }

  let input: string;
  if (!isNaN(MM as number)) {
    input = `${YYYY}-${MM}-${DD}`;
  } else {
    input = "";
  }
  return input;
});

// definePageMeta({
// layout: "default",
// middleware: "auth",
// });
</script>

<template>
  <BookingWrapper>
    <UICard>
      <BookingOptions />
    </UICard>

    <UICard>
      {{ dateFormat }}
      <UIHeader title="Available Times" />
      <div class="row">
        <div class="col-sm-12 col-lg-6 r">
          <el-calendar class="t" v-model="dateInput">
            <template #date-cell="{ data }">
              <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.slice(9 - 11) }}
                {{ data.isSelected ? "✔️" : "" }}
              </p>
            </template>
          </el-calendar>
        </div>
        <div class="col"><BookingForm /></div>
      </div>
    </UICard>
    {{ filteredDates(dateFormat) }}
  </BookingWrapper>
</template>

<style scoped>
.t {
  border-radius: 10px;
  border: solid rgb(199, 199, 199, 0.5) 1px;
  font-size: x-small;
}

@media screen and (max-width: 450px) {
  .t {
    font-size: xx-small;
  }
}
.r {
}
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
