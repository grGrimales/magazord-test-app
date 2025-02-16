import { create } from "zustand";



export const useGithubStore = create<GithubState>((set) => ({
  activeTab: "repos",
  reposCount: 0,
  starredCount: 0,
  setActiveTab: (tab) => set({ activeTab: tab }),
  setReposCount: (count) => set({ reposCount: count }),
  setStarredCount: (count) => set({ starredCount: count }),
}));
