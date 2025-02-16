interface GithubState {
  activeTab: string;
  reposCount: number;
  starredCount: number;
  searchQuery: string;
  setActiveTab: (tab: string) => void;
  setReposCount: (count: number) => void;
  setStarredCount: (count: number) => void;
  setSearchQuery: (query: string) => void;

}