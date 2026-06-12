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

    <p class="p-schedule__more" @click="goTo('/schedule/gate')">and more...</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import AppHeader from "@/shared/AppHeader.vue";
import ScheduleGroup from "./components/ScheduleGroup.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (path) => {
  router.push(path);
};

const schedule = [
  {
    date: "Day1",
    items: [
      { time: "15:00", event: "start / checkin\n＠Richmond Hotel Premier Schole" },
      { time: "xx:xx", event: "Dinner\n＠Takeout or Delivery" },
      { time: "21:00", event: "Nightcap\n＠Lounge" },
      { time: "22:00", event: "The illumination of Tokyo Skytree\n＠Hotel 6th floor" },
    ],
  },
  {
    date: "Day2",
    items: [
      { time: "11:00", event: "checkout" },
      { time: "11:30", event: "Lunch\n＠secret..." },
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
