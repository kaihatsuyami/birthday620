<template>
  <div class="p-getready">
    <AppHeader variant="getready" />

    <AccordionSection title="宿泊先">
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
          <li>
          <a href="https://richmondhotel.jp/tokyo-oshiage/access/" target="_blank" rel="noopener">公式サイト</a>
          </li>
        </ul>
        <p class="p-getready__access-note">押上駅 徒歩1分</p>

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
            <p class="p-getready__route-label">ルート 約1時間45分</p>
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

    <AccordionSection title="ホテルアメニティ">
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

    <AccordionSection title="持ってきてほしいもの">
      <div class="p-getready__block">
        <p class="p-getready__block-title">お洋服</p>
        <ul class="p-getready__list">
          <li v-for="item in clothingItems" :key="item">{{ item }}</li>
        </ul>
      </div>
    </AccordionSection>
  </div>
</template>

<script setup>
import AppHeader from "@/shared/AppHeader.vue";
import AccordionSection from "@/shared/AccordionSection.vue";

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

const clothingItems = [
  "紫のTシャツ",
  "黒パンツ",
  "ライター",
];

const carRoute = [
  { station: "おうち", line: "一般道" },
  { station: "水戸南IC", line: "北関東自動車道" },
  { station: "友部JCT", line: "常磐自動車道" },
  { station: "三郷JCT", line: "首都高速6号三郷線" },
  { station: "小菅JCT", line: "首都高速中央環状線" },
  { station: "堀切JCT", line: "首都高速6号向島線" },
  { station: "向島出口", line: "一般道" },
  { station: "ホテル", line: null },
];

const trainRoutes = [
  {
    label: "ルート①",
    time: "約2時間",
    steps: [
      { station: "勝田", line: "JR" },
      { station: "上野", line: "東京メトロ銀座線" },
      { station: "浅草", line: "東京メトロ浅草線" },
      { station: "押上", line: null },
    ],
  },
  {
    label: "ルート②",
    time: "約2時間",
    steps: [
      { station: "勝田", line: "JR" },
      { station: "柏", line: "常磐線" },
      { station: "北千住", line: "東京スカイツリーライン" },
      { station: "押上", line: null },
    ],
  },
];
</script>
<style lang="scss" scoped>
a {
  color: #007bff;
  text-decoration: none;
}

.p-getready__access-note {
  font-size: 24px;
  color: #666;
  margin-bottom: 12px;
}

.p-getready__routes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.p-getready__route-label {
  font-size: 24px;
  color: #888;
  margin-bottom: 8px;
}

.p-getready__steps {
  list-style: none;
  padding: 0;
  margin: 0;
}

.p-getready__step {
  display: flex;
  flex-direction: column;
  padding-left: 26px;
  position: relative;
}

/* 駅の●ドット */
.p-getready__step::before {
  content: "●";
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 13px;
  color: var(--color-vivid-orange);
}

/* 駅間の縦線 */
.p-getready__step:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 18px;
  bottom: -4px;
  width: 2px;
  background: #ddd;
}

.p-getready__step-station {
  font-weight: bold;
  font-size: 24px;
  line-height: 1.4;
}

.p-getready__step-line {
  font-size: 24px;
  color: #888;
  padding: 4px 0 8px;
}
</style>
