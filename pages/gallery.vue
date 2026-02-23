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
    // 確保所有元素都已渲染
    await new Promise((resolve) => setTimeout(resolve, 100));

    const mod = await import("isotope-layout");
    const Isotope = mod.default;

    // 獲取實際的 DOM 元素（Bootstrap Vue 組件需要 $el）
    const gridElement = gridRef.value.$el || gridRef.value;

    // 檢查元素是否存在
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
    const { data, error } = await apiGetGalleryData();

    if (error.value) {
      throw error.value;
    }

    galleries.value = (data.value || []).map((item) => ({
      id: item.id,
      title: item.title,
      img: item.img,
      img_s: item.img_s,
      tags: item.tags,
    }));

    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 150));
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
