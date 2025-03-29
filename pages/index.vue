
<script setup>
const isAnimateIn = ref(false);
const showPreloader = ref(true);
onMounted(() => {
  isAnimateIn.value = true;
  showPreloader.value = false;
});
</script>

<template>
  <div>
    <section id="home-slider">
      <BContainer>
        <BRow>
          <div :class="{ 'animate-in': isAnimateIn, 'main-slider': true }">
            <img
              src="@/assets/img/home/slider/house.png"
              class="slider-house"
              alt="slider image"
            />
            <img
              src="@/assets/img/home/slider/birds1.png"
              class="slider-birds1"
              alt="slider image"
            />
            <img
              src="@/assets/img/home/slider/birds2.png"
              class="slider-birds2"
              alt="slider image"
            />
            <img
              src="@/assets/img/home/slider/people.png"
              class="slider-hill"
              alt="slider image"
            />
            <div class="slide-text">
              <h1>Game + Create = Life</h1>
              <p>{{ $t("in-short") }}</p>
              <nuxt-link :to="localePath('/aboutme')" class="btn btn-common"
                >ABOUT ME</nuxt-link
              >
            </div>
          </div>
        </BRow>
      </BContainer>
      <div v-if="showPreloader" class="preloader">
        <fa :icon="['fas', 'sun']" class="fa-spin" />
      </div>
    </section>
    <!--slider-->
    <section id="services" class="margin-bottom">
      <BContainer>
        <BRow>
          <BCol
            sm="4"
            class="text-center padding"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="30"
          >
            <div class="single-service">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="30"
              >
                <img src="@/assets/img/home/icon1.png" alt="" />
              </div>
              <h2>Gallery</h2>
              <p>{{ $t("art-in-short") }}</p>
              <nuxt-link :to="localePath('/gallery')" class="btn btn-common"
                >Link</nuxt-link
              >
            </div>
          </BCol>
          <BCol
            sm="4"
            class="text-center padding"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="60"
          >
            <div class="single-service">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="60"
              >
                <img src="@/assets/img/home/icon2.png" alt="" />
              </div>
              <h2>Game</h2>
              <p>{{ $t("program-in-short") }}</p>
              <nuxt-link class="btn btn-common">Link</nuxt-link>
            </div>
          </BCol>
          <BCol
            sm="4"
            class="text-center padding"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="90"
          >
            <div class="single-service">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="90"
              >
                <img src="@/assets/img/home/icon3.png" alt="" />
              </div>
              <h2>Web</h2>
              <p>{{ $t("web-in-short") }}</p>
              <nuxt-link class="btn btn-common">Link</nuxt-link>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>
    <!--content-->
  </div>
</template>

<style lang="scss" scoped>
</style>