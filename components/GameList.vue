<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];

defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });
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
          <b-col sm="6" data-aos="fade-in">
            <b-img
              :src="`/img/portfolio/${item.main_img}`"
              fluid
              :alt="item.title"
            ></b-img>
          </b-col>
          <b-col sm="6" data-aos="fade-in">
            <div class="project-name overflow">
              <h2>{{ item.title }}</h2>
              <ul class="listWrap">
                <li>
                  <span><fa icon="clock" />{{ item.create_time }}</span>
                </li>
              </ul>
            </div>
            <div class="project-info overflow">
              <h3>Gameplay</h3>
              <p>{{ $t(item.description) }}</p>
            </div>
            <div class="skills overflow">
              <h3>Project in-charge</h3>
              <ul class="listWrap">
                <li v-for="charge in item.in_charge" :key="charge">
                  <p>
                    <fa icon="gamepad" /><span>{{ $t(charge) }}</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="tools overflow">
              <h3>Tools</h3>
              <ul class="listWrap">
                <li>
                  <p>
                    <fa icon="file-code" /><span>{{ item.tools }}</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="movie overflow">
              <h3>Video</h3>
              <ul class="listWrap">
                <li>
                  <a
                    class="video"
                    data-fancybox
                    :title="item.title"
                    :href="item.video"
                    ><fa icon="play"
                  /></a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col sm="12">
            <Swiper
              :loop="false"
              :navigation="true"
              :spaceBetween="20"
              :modules="modules"
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