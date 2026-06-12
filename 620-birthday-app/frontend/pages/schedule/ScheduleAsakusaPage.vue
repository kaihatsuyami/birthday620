<template>
  <div class="p-schedule">
    <AppHeader variant="schedule" />

    <ScheduleGroup
      v-for="(group, i) in schedule"
      :key="group.date"
      :date="group.date"
      :items="group.items"
      :start-delay="groupStartDelays[i]"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import AppHeader from "@/shared/AppHeader.vue";
import ScheduleGroup from "./components/ScheduleGroup.vue";

const schedule = [
  {
    date: "Day1",
    items: [
      { time: "15:00", event: "checkin\n＠Richmond Hotel Premier Schole" },
      { time: "xx:xx", event: "Dinner\n＠Takeout or Delivery" },
      { time: "21:00", event: "Nightcap\n＠Lounge" },
    ],
  },
  {
    date: "Day2",
    items: [
      { time: "11:00", event: "checkout" },
      { time: "11:30", event: "Lunch\n＠sorairo" },
      { time: "13:00", event: "Asakusa Sightseeing" },
      { time: "18:00", event: "Enter Skytree" },
      { time: "19:00", event: "Sunset" },
      { time: "21:00", event: "Exit Skytree" },
    ],
  },
];
const groupStartDelays = computed(() => {
  let delay = 100;
  return schedule.map((group) => {
    const start = delay;
    delay += (group.items.length + 2) * 100;
    return start;
  });
});
</script>
