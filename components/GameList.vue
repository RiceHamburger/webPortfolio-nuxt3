<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import SwiperCore, { Pagination, Navigation } from 'swiper'

// 安裝模組
// SwiperCore.use([Pagination, Navigation])

defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <section
      v-for="item in projects"
      :key="item.id"
      :id="'gamePortfolio_' + item.id"
      class="portfolio-information padding-top"
    >
      <b-container>
        <b-row>
          <b-col sm="12">
            <Swiper
              :loop="true"
              :pagination="{ clickable: true }"
              :navigation="true"
              :spaceBetween="20"
              class="team-carousel"
            >
              <SwiperSlide v-for="(imgArr, index) in item.imgs" :key="index">
                <b-row>
                  <b-col sm="3" cols="6" v-for="img in imgArr" :key="img">
                    <div class="team-single-wrapper">
                      <div class="team-single">
                        <div class="person-thumb">
                          <b-img :src="`/img/portfolio/${img}`" fluid alt="" />
                        </div>
                        <div class="social-profile">
                          <ul class="nav nav-pills">
                            <li>
                              <a
                                :href="`/img/portfolio/${img}`"
                                :data-fancybox="item.title"
                              >
                                <fa icon="eye" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </SwiperSlide>
            </Swiper>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>