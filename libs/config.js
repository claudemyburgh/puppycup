export const config = {
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-08-11",
  useCdn: process.env.NODE_ENV === "production",
};
