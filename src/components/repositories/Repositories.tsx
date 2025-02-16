"use client";

import { useFetchRepos } from "@/hooks/useFetchRepos";
import { useFetchStarred } from "@/hooks/useFetchStarred";
import RepoCard from "./RepoCard";
import { Repo } from "@/interfaces/Repo";
import { useGithubStore } from "@/store/github/githubStore";
import { useEffect, useState } from "react";

export default function Repositories() {

  const { activeTab, searchQuery, setReposCount, setStarredCount } = useGithubStore(); 

  const { repos, isLoading: reposLoading, error: reposError } = useFetchRepos();
  const { starred, isLoading: starredLoading, error: starredError } = useFetchStarred();


  const filteredRepos = repos.filter((repo: Repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const filteredStarred = starred.filter((repo: Repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  

  const data: Repo[] = activeTab === "repos" ? filteredRepos : filteredStarred;
  const isLoading = activeTab === "repos" ? reposLoading : starredLoading;
  const error = activeTab === "repos" ? reposError : starredError;

  

const [reposLength, setReposLength] = useState(0);
const [starredLength, setStarredLength] = useState(0);

useEffect(() => {
  if (filteredRepos.length !== reposLength) {
    setReposLength(filteredRepos.length);
    setReposCount(filteredRepos.length);
  }
  if (filteredStarred.length !== starredLength) {
    setStarredLength(filteredStarred.length);
    setStarredCount(filteredStarred.length);
  }
}, [filteredStarred.length, filteredRepos.length, searchQuery]);

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
