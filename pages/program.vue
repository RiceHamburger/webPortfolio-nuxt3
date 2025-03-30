<script setup>
useHead({
  title: "Project | NO-DATA",
});
const pageTitle = ref("Project");
</script>

<template>
  <div class="sideWrap">
    <InsidePageTitle
      :pageTitle="pageTitle"
      :pageDescription="$t('program-title')"
    />
    <Loading :loading="true" />
    <!-- <GameList :projects="projects"/> -->
  </div>
</template>