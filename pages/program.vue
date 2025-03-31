<script setup>
import { apiGetProjectData } from "~/composables/api";
useHead({
  title: "Project | NO-DATA",
});
const pageTitle = ref("Project");
const loading = ref(true);
const projects = ref([]);

try {
  const { data, error } = await apiGetProjectData();

  if (error.value) {
    console.error("API 錯誤：", error.value);
  }

  if (!Array.isArray(data.value)) {
    console.error("資料格式錯誤：", data.value);
  }

  const resetProjectsArray = data.value.map((element) => {
    const project = {
      id: element.id,
      title: element.title,
      create_time: element.create_time,
      description: element.description,
      in_charge: JSON.parse(element.in_charge),
      tools: element.tools,
      video: element.video,
      main_img: element.main_img,
    };

    // imgs 分段
    const imgsArray = JSON.parse(element.imgs);
    const num = 4;
    const newImgsArray = [];
    for (let i = 0; i < imgsArray.length; i += num) {
      newImgsArray.push(imgsArray.slice(i, i + num));
    }

    project.imgs = newImgsArray;
    return project;
  });

  projects.value = resetProjectsArray;
} catch (err) {
  console.error("錯誤處理:", err);
} finally {
  loading.value = false;
}
</script>

<template>
  <div class="sideWrap">
    <InsidePageTitle
      :pageTitle="pageTitle"
      :pageDescription="$t('program-title')"
    />
    <Loading :loading="loading" />
    <GameList :projects="projects" />
  </div>
</template>