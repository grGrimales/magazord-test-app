interface GithubState {
  activeTab: string;
  reposCount: number;
  starredCount: number;
  setActiveTab: (tab: string) => void;
  setReposCount: (count: number) => void;
  setStarredCount: (count: number) => void;
}