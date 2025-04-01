<script setup>
import { apiGetWebData } from "~/composables/api";
useHead({
  title: "Front-End Development | NO-DATA",
});
const pageTitle = ref("Front-End Development");
const webs = ref([[], [], []]);

try {
  const { data, error } = await apiGetWebData();

  if (error.value) {
    throw error.value;
  }

  const result = [[], [], []];

  data.value.forEach((element, index) => {
    const groupIndex = index % 3;
    const webData = {
      id: element.id,
      title: element.title,
      description: element.description,
      img: element.img,
      url: element.url,
    };
    result[groupIndex].push(webData);
  });

  webs.value = result;
} catch (err) {
  console.error("API 錯誤：", err);
}
</script>

<template>
  <div class="sideWrap">
    <InsidePageTitle
      :pageTitle="pageTitle"
      :pageDescription="$t('web-title')"
    />
    <section id="other-work">
      <b-container>
        <b-row>
          <b-col
            cols="12"
            sm="4"
            md="4"
            v-for="(items, index) in webs"
            :key="index"
          >
            <div class="workW" v-for="item in items" :key="item.id">
              <div class="work-img">
                <img :src="`/img/webWork/${item.img}`" class="grow" />
              </div>
              <div class="work-title">
                <a
                  v-if="item.url && item.url !== ''"
                  :href="item.url"
                  target="_blank"
                >
                  {{ $t(item.title) }}
                  <fa icon="link" class="fa-link" style="width: 0.6em" />
                </a>
                <span v-else>{{ $t(item.title) }}</span>
              </div>
              <div>{{ $t(item.description) }}</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>