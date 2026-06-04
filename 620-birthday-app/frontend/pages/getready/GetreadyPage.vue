<template>
  <div class="p-getready">
    <AppHeader variant="getready" />

    <AccordionSection class="anim-box popup" :class="{ 'is-animated': isAnimated2 }" title="宿泊先">
      <div class="p-getready__block">
        <p class="p-getready__block-title">ホテル</p>
        <ul class="p-getready__list">
          <li>リッチモンドホテルプレミア東京スコーレ<br>
          <a href="https://richmondhotel.jp/tokyo-oshiage/" target="_blank" rel="noopener">公式サイト</a>
          </li>
        </ul>
        <p class="p-getready__block-title">
          アクセス【電車】
        </p>
        <ul class="p-getready__list">
          <li>押上駅 徒歩1分<br>
          <a href="https://richmondhotel.jp/tokyo-oshiage/access/" target="_blank" rel="noopener">公式サイト</a>
          </li>
        </ul>
        
        <div class="p-getready__routes">
          <div v-for="route in trainRoutes" :key="route.label" class="p-getready__route">
            <p class="p-getready__route-label">{{ route.label }}（{{ route.time }}）</p>
            <ol class="p-getready__steps">
              <li v-for="(step, i) in route.steps" :key="i" class="p-getready__step">
                <span class="p-getready__step-station">{{ step.station }}</span>
                <span v-if="step.line" class="p-getready__step-line">{{ step.line }}</span>
              </li>
            </ol>
          </div>
        </div>
        <p class="p-getready__block-title" style="margin-top: 24px">アクセス【車】</p>
        <ul class="p-getready__list">
          <li>駐車場：ホテル建物内3・4階</li>
        </ul>
        <div class="p-getready__routes">
          <div class="p-getready__route">
            <p class="p-getready__route-label">ルート（約1時間45分）</p>
            <ol class="p-getready__steps">
              <li v-for="(step, i) in carRoute" :key="i" class="p-getready__step">
                <span class="p-getready__step-station">{{ step.station }}</span>
                <span v-if="step.line" class="p-getready__step-line">{{ step.line }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </AccordionSection>

    <AccordionSection class="anim-box popup" :class="{ 'is-animated': isAnimated3 }" title="ホテルアメニティ">
      <div class="p-getready__block">
        <p class="p-getready__block-title">客室備品</p>
        <ul class="p-getready__list">
          <li v-for="item in roomAmenities" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="p-getready__block">
        <p class="p-getready__block-title">フロント / アメニティーバー</p>
        <ul class="p-getready__list">
          <li v-for="item in deskAmenities" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="p-getready__note">
        <p>その他に客室テレビにて無料コンテンツをご利用いただけます。<br>Youtube, TVer, ABEMA, TUNE IN, Spotify, Amazon Music（一部コンテンツ内には有料サービスもございます）</p>
        <p>お客様のアカウントも客室テレビにてご利用いただけます。<br>有料コンテンツ：NETFLIX, Hulu, Prime Video, Disney+, DAZN, U-NEXT, dアニメストア 等</p>
        <p>キャスト機能もご利用いただけますのでお好きなアプリもお部屋でご覧いただけます。</p>
      </div>
    </AccordionSection>

    <AccordionSection class="anim-box popup" :class="{ 'is-animated': isAnimated4 }" title="持ってきてほしいもの">
      <div class="p-getready__block">
        <p class="p-getready__block-title">共通</p>
        <ul class="p-getready__list">
          <li v-for="item in shareItems" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="p-getready__block">
        <p class="p-getready__block-title">車の場合</p>
        <ul class="p-getready__list">
          <li v-for="item in carItems" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="p-getready__block">
        <p class="p-getready__block-title">電車の場合</p>
        <ul class="p-getready__list">
          <li v-for="item in trainItems" :key="item">{{ item }}</li>
        </ul>
      </div>
    </AccordionSection>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppHeader from "@/shared/AppHeader.vue";
import AccordionSection from "@/shared/AccordionSection.vue";

const isAnimated2 = ref(false);
const isAnimated3 = ref(false);
const isAnimated4 = ref(false);

const startButtonAnimations = () => {
  setTimeout(() => { isAnimated2.value = true; }, 200);
  setTimeout(() => { isAnimated3.value = true; }, 300);
  setTimeout(() => { isAnimated4.value = true; }, 400);
};

onMounted(() => {
    setTimeout(() => {
      startButtonAnimations();
    }, 100);
});

const roomAmenities = [
  "液晶TV",
  "冷蔵庫",
  "デスクライト（ダブルのみ）",
  "湯沸かしポット",
  "清水香（消臭スプレー）",
  "シャンプー",
  "コンディショナー",
  "ボディーソープ",
  "泡のハンドソープ（ボトル式）",
  "マイナスイオンドライヤー",
  "パジャマ（セパレート型）",
  "ワインオープナー（栓抜き）",
  "携帯電話充電器",
  "浴室内曇り止め鏡",
  "セーフティボックス",
  "プラズマクラスター機能付き空調（個別切替自由）",
  "アイスペール",
  "バスソルト",
];

const deskAmenities = [
  "化粧水",
  "乳液",
  "クレンジング",
  "洗顔",
  "くし",
  "歯ブラシ",
  "カミソリ",
  "シェービングクリーム",
  "コットン",
  "綿棒",
  "ヘアバンド",
  "シャワーキャップ",
  "コンタクト保存液",
  "キッズアメニティ",
];

const carItems = [
  "紫のTシャツ",
  "黒パンツ",
];

const trainItems = [

]
const shareItems = [
  "ライター",

]

const carRoute = [
  { station: "おうち", line: "高速" },
  { station: "向島出口", line: "一般道" },
  { station: "ホテル", line: null },
];

const trainRoutes = [
  {
    label: "ルート①",
    time: "約2時間",
    steps: [
      { station: "最寄り駅", line: "JR" },
      { station: "上野", line: "東京メトロ銀座線" },
      { station: "浅草", line: "東京メトロ浅草線" },
      { station: "押上", line: null },
    ],
  },
  {
    label: "ルート②",
    time: "約2時間",
    steps: [
      { station: "最寄り駅", line: "JR" },
      { station: "柏", line: "常磐線" },
      { station: "北千住", line: "東京スカイツリーライン" },
      { station: "押上", line: null },
    ],
  },
];
</script>
<style lang="scss" scoped>
a {
  color: var(--color-primary-shadow);
  text-decoration: none;
  text-decoration: underline;
}

.anim-box.popup {
  opacity: 0;
  transform: translateY(40px) scale(0.8);
}
.anim-box.popup.is-animated {
  animation: popup 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
 
@keyframes popup {
  0% {
    transform: translateY(40px) scale(0.8);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1.0);
  }
  80%, 100% {
    opacity: 1;
  }
}
 

</style>
