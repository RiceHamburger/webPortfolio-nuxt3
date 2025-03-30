const API_BASE = "http://api.no-data.tw/api";

export const apiGetWebData = () => useFetch(`${API_BASE}/webDev`);
export const apiGetGalleryData = () => useFetch(`${API_BASE}/gallery`);
export const apiGetProjectData = () => useFetch(`${API_BASE}/project`);
