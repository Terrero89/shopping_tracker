
<template>
  <div>
    <el-descriptions title="User Info">
      <el-descriptions-item label="ID:">RES21</el-descriptions-item>
      <el-descriptions-item  label="User:">Anabel Perez</el-descriptions-item>
      <el-descriptions-item label="Time:">03:30 PM</el-descriptions-item>
      <el-descriptions-item label="Date:"> 07/30/2023 </el-descriptions-item>
      <el-descriptions-item label="Services:"
        >Haircut, Washing, color.</el-descriptions-item
      >
      <el-descriptions-item label="Review:">
        The cut was great, thank you for the styleeeee.</el-descriptions-item
      >
      <el-descriptions-item label="Rate:">
        <ReservationsRate />
      </el-descriptions-item>
    </el-descriptions>
   <div class="demo-d-flex">
      <el-button>Edit Reservation</el-button>
      <UICancelWarning/>
    </div>
  </div>
</template>
