<script setup></script>

<template>
  <div>
    <Header></Header>
    <main>
      <slot />
    </main>
    <Footer></Footer>
    <PageTopBtn></PageTopBtn>
  </div>
</template>

<style scoped>
main {
  min-height: calc(100vh - 450px);
}
</style>
