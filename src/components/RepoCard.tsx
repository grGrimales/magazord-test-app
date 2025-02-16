import { BsStarFill } from "react-icons/bs";
import { GoGitBranch } from "react-icons/go";

interface RepoCardProps {
  name: string;
  highlight: string;
  description: string;
  stars: number;
  forks: number;
  language?: string;
  url: string;
  activeTab: string; 
}

export default function RepoCard({
  name,
  highlight,
  description,
  stars,
  forks,
  language,
  url,
  activeTab,
}: RepoCardProps) {
  return (
    <div className="border-b border-[#E0E0E0] lg:border-b-0 py-4">
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-lg">
        <span className="text-textPrimary font-light">{name}</span>
        <span className="text-textPrimary font-normal"> / </span>
        <span className="text-buttonSecondary font-semibold">{highlight}</span>
      </a>

      <p className="text-textSecondary text-sm font-normal mt-1">{description}</p>

      {/* Exibir conteúdo diferente de acordo com a aba selecionada.*/}
      <div className="flex items-center gap-4 text-textPrimary text-sm font-normal mt-2">
        {activeTab === "repos" ? (
          <>
            <div className="flex items-center gap-1">
              <BsStarFill size={16} className="text-black" /> 
              <span>{stars}</span>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-1 font-semibold">
            <span>{language}</span>
          </div>
        )}

        <div className="flex items-center gap-1">
          <GoGitBranch size={16} className="text-black" /> 
          <span>{forks}</span>
        </div>
      </div>
    </div>
  );
}
