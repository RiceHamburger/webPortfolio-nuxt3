const API_BASE = "/api";

export const apiGetWebData = () => $fetch(`${API_BASE}/webDev`);
export const apiGetGalleryData = () => $fetch(`${API_BASE}/gallery`);
export const apiGetProjectData = () => $fetch(`${API_BASE}/project`);
