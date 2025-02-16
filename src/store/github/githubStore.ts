import { create } from "zustand";

interface GithubState {
  repos: any[];
  starred: any[];
  setRepos: (repos: any[]) => void;
  setStarred: (starred: any[]) => void;
}

export const useGithubStore = create<GithubState>((set) => ({
  repos: [],
  starred: [],
  setRepos: (repos) => set({ repos }),
  setStarred: (starred) => set({ starred }),
}));
