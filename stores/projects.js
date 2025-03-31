import { defineStore } from "pinia";
import { apiGetProjectData } from "~/composables/api";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [],
  }),

  actions: {
    async handleApiData() {
      try {
        const { data, error } = await apiGetProjectData();

        console.log("API 回傳資料：", data.value);

        if (error.value) {
          console.error("API 錯誤：", error.value);
          return error.value.message || "API 請求錯誤";
        }

        if (!Array.isArray(data.value)) {
          console.error("資料格式錯誤：", data.value);
          return "API 回傳資料格式錯誤";
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

          // 處理 imgs 分段顯示
          const imgsArray = JSON.parse(element.imgs);
          const num = 4;
          const newImgsArray = [];
          for (let i = 0; i < imgsArray.length; i += num) {
            newImgsArray.push(imgsArray.slice(i, i + num));
          }

          project.imgs = newImgsArray;
          return project;
        });

        // 設定到 state
        this.projects = resetProjectsArray;

        return undefined;
      } catch (error) {
        console.error("錯誤處理:", error);
        return error;
      }
    },
  },
});
