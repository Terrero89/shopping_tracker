<script lang="ts" setup>
import { computed, ref } from "vue";


const searc = ref<string>(""); //testing time picker

defineProps(["modelValue", "title", "tableInfo", "filteredData"]);
defineEmits(["update:modelValue"]);



interface User {
  userId: string;
  resId: string;
  date: string;
  time: string;
  service: string;
  rating: number
  review: string
  showUp: boolean;
}

const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.resId.toLowerCase().includes(search.value.toLowerCase())
  )
);

const tableData: User[] = [
  {
    userId: "15",
    resId: "RES20",
    date: "2022-03-03",
    time: "10:00 AM",
    service: "Haircut, Dreads, and washing",
    rating: 5,
    review: " great cut",
    showUp: true,
  },
  {
    userId: "15",
    resId: "RES21",
    date: "2023-05-03",
    time: "03:30 PM",
    service: "Haircut, Dreads, and washing",
    rating: 5,
    review: " great cut",
    showUp: true,
  },
  {
    userId: "15",
    resId: "RES22",
    date: "2023-09-15",
    time: "06:30 PM",
    service: "Haircut, Dreads, and washing",
    rating: 4.5,
    review: " great cut",
    showUp: true,
  },
  {
    userId: "15",
    resId: "RES23",
    date: "2023-12-24",
    time: "08:00 PM",
    service: "Haircut, Dreads, and washing",
    rating: 3,
    review: " great cut",
    showUp: true,
  },
];

const id = ref('')

const handleDelete = (index: number, row: User) => {
  console.log(index, row.resId);
  id.value = row.resId;
 
  navigateTo(`/user-15/reserve/reservations/reservation-${id.value}`)
};

const display = ref(false);

const dynamicRoute = computed(()=> `user-15/reserve/reservations/reservation-${id.value}`)
</script>

<template>
  <UIHeader title="Reservations History" />


  <UICard class="">
    <el-table class="table" :data="filterTableData" style="width: 100%">
      <el-table-column  label="ResID" prop="resId" />
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Time" prop="time" />
      <el-table-column label="Service" prop="service" />
      <el-table-column label="Rating" prop="rating" />
      
      <el-table-column label="Date" prop="date" />

      <el-table-column align="left">
        <template #header>
          <el-input
            v-model="search"
            size="small"
            placeholder="Type to search"
          />
        </template>

        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
            > Details</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </UICard>
</template>

<style scoped>


</style>
