import { Account, Avatars, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_PROJECT_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databases: import.meta.env.VITE_APPWRITE_PROJECT_DATABASE,
  storage: import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_STORAGE,
  userCollections: import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_USERS,
  postsCollections: import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_POSTS,
  savesCollections: import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_SAVE,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectId);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avators = new Avatars(client);
