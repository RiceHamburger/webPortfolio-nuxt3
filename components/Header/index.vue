<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <header id="header">
    <div class="pc-translation">
      <div class="container">
        <ul class="overflow">
          <li>
            <nuxt-link :to="switchLocalePath('zh-tw')">
              <span>ZH-TW</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('en')">
              <span>EN</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('ja')">
              <span>JP</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <HeaderMenu />
  </header>
</template>

<style scoped></style>
