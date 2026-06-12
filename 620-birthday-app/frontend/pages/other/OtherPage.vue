<template>
  <div>
    <AppHeader variant="other" />
    <div class="white-box anim-box zoomin" :class="{ 'is-animated': isAnimated }">
    <p>Otherページ作ってみたけど<br>その他コンテンツ特になかったです、！<br>楽しんでもらえるように<br>いろいろ考えましたっ<br>あんまり気負わず、気楽に来てね<br>素敵な誕生日になるといいな<br>当日楽しみにしてます♡</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppHeader from "@/shared/AppHeader.vue";

const isAnimated = ref(false);

onMounted(() => {
  setTimeout(() => { isAnimated.value = true; }, 500);
});
</script>
<style lang="scss" scoped>
p {
  text-align: center;
  color: var(--color-primary);
  margin-top: 20px;
}
.white-box{
  background-color: var(--color-primary-contrast);
  padding: 20px;
  border-radius: 20px;
  margin: 20px;
  border: 2px solid var(--color-primary-dark);
}

.anim-box.zoomin {
  opacity: 0;
}
.anim-box.zoomin.is-animated {
  animation: zoomIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes zoomIn {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
 
</style>
