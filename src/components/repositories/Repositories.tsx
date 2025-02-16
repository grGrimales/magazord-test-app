"use client";

import { useFetchRepos } from "@/hooks/useFetchRepos";
import { useFetchStarred } from "@/hooks/useFetchStarred";
import RepoCard from "./RepoCard";
import { Repo } from "@/interfaces/Repo";

export default function Repositories({ activeTab }: { activeTab: string }) {
  const { repos, isLoading: reposLoading, error: reposError } = useFetchRepos();
  const { starred, isLoading: starredLoading, error: starredError } = useFetchStarred();

  const data: Repo[] = activeTab === "repos" ? repos : starred;
  const isLoading = activeTab === "repos" ? reposLoading : starredLoading;
  const error = activeTab === "repos" ? reposError : starredError;

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading repositories.</p>;

  return (
    <div className="mt-4">
      {data.map((repo: Repo) => (
        <RepoCard key={repo.name} {...repo} activeTab={activeTab} />
      ))}
    </div>
  );
}
