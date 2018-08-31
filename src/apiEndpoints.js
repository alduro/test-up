export const apiBaseRoute =
  process.env.API_BASE_URL || 'http://tim.uardev.com/trial-project/api';

export default {
  files: () => `${apiBaseRoute}/files`,

  tags: () => `${apiBaseRoute}/tags`,

  // POST /file/id/rename
  rename: ({ id }) => `${apiBaseRoute}/file/${id}/rename`,
};
