<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { apiGetGalleryData } from "~/composables/api";

useHead({
  title: "Gallery | NO-DATA",
});
const pageTitle = ref("Gallery");

onMounted(() => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });
});

const galleries = ref([]);
const classExtraction = (item) => {
  return item.tags.map((tag) => tag);
};

try {
  const { data, error } = await apiGetGalleryData();

  if (error.value) {
    throw error.value;
  }

  galleries.value = (data.value || []).map((item) => ({
    id: item.id,
    title: item.title,
    img: item.img,
    img_s: item.img_s,
    tags: JSON.parse(item.tags),
  }));
} catch (err) {
  console.error("API 錯誤：", err);
}
</script>

<template>
  <div class="sideWrap">
    <InsidePageTitle
      :pageTitle="pageTitle"
      :pageDescription="$t('gallery-title')"
    />
    <Loading :loading="true" />
    <section id="portfolio" class="margin-bottom">
      <b-container>
        <div>
          <ul class="portfolio-filter text-center">
            <li>
              <button
                class="btn btn-primary"
                href="#"
                data-filter="*"
                @click="filter('*')"
              >
                All
              </button>
            </li>
            <li>
              <button
                class="btn btn-default illustration"
                href="#"
                data-filter=".illustration"
                @click="filter('.illustration')"
              >
                Illustration
              </button>
            </li>
            <li>
              <button
                class="btn btn-default sketch"
                href="#"
                data-filter=".sketch"
                @click="filter('.sketch')"
              >
                Sketch
              </button>
            </li>
            <li>
              <button
                class="btn btn-default Original"
                href="#"
                data-filter=".Original"
                @click="filter('.Original')"
              >
                Original works
              </button>
            </li>
            <li>
              <button
                class="btn btn-default Derivative"
                href="#"
                data-filter=".Derivative"
                @click="filter('.Derivative')"
              >
                Derivative works
              </button>
            </li>
          </ul>

          <b-row class="portfolio-items">
            <b-col
              cols="6"
              sm="4"
              md="3"
              class="portfolio-item"
              :class="classExtraction(item)"
              v-for="item in galleries"
              :key="item.id"
            >
              <div class="portfolio-wrapper">
                <div class="portfolio-single">
                  <div class="portfolio-thumb">
                    <b-img
                      :src="`/img/illastration/${item.img_s}`"
                      fluid
                      :alt="item.title"
                    ></b-img>
                  </div>
                  <div class="portfolio-view">
                    <ul class="nav nav-pills">
                      <li>
                        <a
                          :href="`/img/illastration/${item.img}`"
                          data-fancybox="gallery"
                          :data-caption="item.title"
                          ><fa icon="eye" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="portfolio-info">
                  <h2>{{ item.title }}</h2>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>

<style scoped></style>
