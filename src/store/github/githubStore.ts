import { create } from "zustand";
import { GithubState } from "@/interfaces/GithubState";


export const useGithubStore = create<GithubState>((set) => ({
  activeTab: "repos",
  reposCount: 0,
  starredCount: 0,
  searchQuery: "",
  setActiveTab: (tab) => set({ activeTab: tab }),
  setReposCount: (count) => set({ reposCount: count }),
  setStarredCount: (count) => set({ starredCount: count }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
