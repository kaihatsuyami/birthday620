<template>
  <div class="p-schedule">
    <AppHeader variant="schedule" />

    <ScheduleGroup
      v-for="group in schedule"
      :key="group.date"
      :date="group.date"
      :items="group.items"
    />

    <p class="p-schedule__more" @click="goTo('/schedule/gate')">and more...</p>
  </div>
</template>

<script setup>
import AppHeader from "@/shared/AppHeader.vue";
import ScheduleGroup from "./components/ScheduleGroup.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (path) => {
  router.push(path);
};

const schedule = [
  {
    date: "6/20",
    items: [
      { time: "12:00", event: "start\n@Lounge in Hotel" },
      { time: "15:00", event: "checkin\n@Richmond Hotel Premier Schole" },
      { time: "xx:xx", event: "Dinner\n＠Takeout or Delivery" },
      { time: "xx:xx", event: "Nightcap\n＠Lounge" },
    ],
  },
  {
    date: "6/21",
    items: [
      { time: "11:00", event: "checkout" },
      { time: "11:30", event: "Lunch@secret..." },
    ],
  },
];
</script>
