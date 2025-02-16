"use client";

import { useFetchRepos } from "@/hooks/useFetchRepos";
import { useFetchStarred } from "@/hooks/useFetchStarred";
import RepoCard from "./RepoCard";
import { Repo } from "@/interfaces/Repo";
import { useGithubStore } from "@/store/github/githubStore";
import { useEffect, useState } from "react";

export default function Repositories() {

  const { activeTab, setReposCount, setStarredCount } = useGithubStore(); 

  const { repos, isLoading: reposLoading, error: reposError } = useFetchRepos();
  const { starred, isLoading: starredLoading, error: starredError } = useFetchStarred();

  const data: Repo[] = activeTab === "repos" ? repos : starred;
  const isLoading = activeTab === "repos" ? reposLoading : starredLoading;
  const error = activeTab === "repos" ? reposError : starredError;

  

const [reposLength, setReposLength] = useState(0);
const [starredLength, setStarredLength] = useState(0);

useEffect(() => {
  if (repos.length !== reposLength) {
    setReposLength(repos.length);
    setReposCount(repos.length);
  }
  if (starred.length !== starredLength) {
    setStarredLength(starred.length);
    setStarredCount(starred.length);
  }
}, [repos.length, starred.length]);

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
