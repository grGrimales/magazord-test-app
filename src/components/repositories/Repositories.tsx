"use client";

import { useFetchRepos } from "@/hooks/useFetchRepos";
import RepoCard from "./RepoCard";
import { Repo } from "@/interfaces/Repo";

export default function Repositories({ activeTab }: { activeTab: string }) {
  const { repos, error, isLoading } = useFetchRepos(); 

  if (isLoading) return <p className="text-center">Cargando repositorios...</p>;
  if (error) return <p className="text-center text-red-500">Error al cargar los repositorios.</p>;

  return (
    <div className="mt-4">
      {repos.map((repo: Repo) => (
        <RepoCard key={repo.name} {...repo} activeTab={activeTab} />
      ))}
    </div>
  );
}
