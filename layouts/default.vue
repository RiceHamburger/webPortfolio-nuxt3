<script setup>
import { Analytics } from "@vercel/analytics/nuxt";
</script>

<template>
  <div>
    <Header></Header>
    <main>
      <slot />
    </main>
    <Footer></Footer>
    <PageTopBtn></PageTopBtn>
    <Analytics />
  </div>
</template>

<style scoped>
main {
  min-height: calc(100vh - 450px);
}
</style>
