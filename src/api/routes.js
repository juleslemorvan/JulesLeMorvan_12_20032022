import { api } from ".";

export const getUser = (id) => api.get(`/user/${id}`);

export const getUserActivity = (id) => api.get(`/user/${id}/activity`);

export const getUserAverageSessions = (id) =>
  api.get(`/user/${id}/average-sessions`);

export const getUserPerformance = (id) => api.get(`/user/${id}/performance`);
