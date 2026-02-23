<script setup>
import { apiGetProjectData } from "~/composables/api";
useHead({
  title: "Project | NO-DATA",
});
const pageTitle = ref("Project");
const projects = ref([]);

try {
  const data = await apiGetProjectData();

  if (!Array.isArray(data)) {
    console.error("資料格式錯誤：", data);
  }

  const resetProjectsArray = data.map((element) => {
    const project = {
      id: element.id,
      title: element.title,
      create_time: element.create_time,
      description: element.description,
      in_charge: element.in_charge,
      tools: element.tools,
      video: element.video,
      main_img: element.main_img,
    };

    // imgs 分段
    const imgsArray = element.imgs;
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
}
</script>

<template>
  <div class="sideWrap">
    <InsidePageTitle
      :pageTitle="pageTitle"
      :pageDescription="$t('program-title')"
    />
    <GameList :projects="projects" />
  </div>
</template>