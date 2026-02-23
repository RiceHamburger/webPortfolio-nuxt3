<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { apiGetGalleryData } from "~/composables/api";

useHead({
  title: "Gallery | NO-DATA",
});
const pageTitle = ref("Gallery");
const gridRef = ref(null);
const iso = ref(null);

const filter = (slug) => {
  const buttons = document.querySelectorAll(".portfolio-filter button");
  buttons.forEach((btn) => {
    const filterAttr = btn.getAttribute("data-filter");
    if (filterAttr === slug) {
      btn.classList.remove("btn-default");
      btn.classList.add("btn-primary");
    } else {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-default");
    }
  });

  if (iso.value && iso.value.arrange) {
    try {
      iso.value.arrange({ filter: slug });
    } catch (err) {
      console.error("Isotope 過濾失敗：", err);
    }
  } else {
    console.warn("Isotope 實例未初始化");
  }
};

const initIsotope = async () => {
  if (!gridRef.value) return;
  if (iso.value) return;

  try {
    const gridElement = gridRef.value.$el || gridRef.value;

    // 等待所有圖片加載完成
    const images = gridElement.querySelectorAll(".portfolio-item img");
    if (images.length === 0) {
      console.warn("找不到圖片元素");
      return;
    }

    const imageLoadPromises = Array.from(images).map((img) => {
      return new Promise((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve(); // 圖片加載失敗也繼續
        }
      });
    });

    await Promise.all(imageLoadPromises);
    await new Promise((resolve) => setTimeout(resolve, 100));

    const mod = await import("isotope-layout");
    const Isotope = mod.default;

    const items = gridElement.querySelectorAll(".portfolio-item");
    if (items.length === 0) {
      console.warn("找不到 portfolio-item 元素");
      return;
    }

    iso.value = new Isotope(gridElement, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });
  } catch (err) {
    console.error("Isotope 初始化失敗：", err);
  }
};

onMounted(async () => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });

  try {
    const data = await apiGetGalleryData();

    if (!data || !Array.isArray(data)) {
      throw new Error("無效的數據格式");
    }

    galleries.value = data.map((item) => ({
      id: item.id,
      title: item.title,
      img: item.img,
      img_s: item.img_s,
      tags: item.tags,
    }));

    await nextTick();
    await initIsotope();
  } catch (err) {
    console.error("API 或初始化錯誤：", err);
  }
});

const galleries = ref([]);
const classExtraction = (item) => {
  return item.tags.map((tag) => tag);
};
</script>

<template>
  <div class="sideWrap">
    <InsidePageTitle
      :pageTitle="pageTitle"
      :pageDescription="$t('gallery-title')"
    />
    <section id="portfolio" class="margin-bottom">
      <b-container>
        <div>
          <ul class="portfolio-filter text-center">
            <li>
              <button
                class="btn btn-primary"
                data-filter="*"
                @click.prevent="filter('*')"
              >
                All
              </button>
            </li>
            <li>
              <button
                class="btn btn-default illustration"
                data-filter=".illustration"
                @click.prevent="filter('.illustration')"
              >
                Illustration
              </button>
            </li>
            <li>
              <button
                class="btn btn-default sketch"
                data-filter=".sketch"
                @click.prevent="filter('.sketch')"
              >
                Sketch
              </button>
            </li>
            <li>
              <button
                class="btn btn-default Original"
                data-filter=".Original"
                @click.prevent="filter('.Original')"
              >
                Original works
              </button>
            </li>
            <li>
              <button
                class="btn btn-default Derivative"
                data-filter=".Derivative"
                @click.prevent="filter('.Derivative')"
              >
                Derivative works
              </button>
            </li>
          </ul>

          <b-row ref="gridRef" class="portfolio-items">
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
