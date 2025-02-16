import { BsStarFill } from "react-icons/bs";
import { GoGitBranch } from "react-icons/go";
import { RepoCardProps } from "@/interfaces/RepoCardProps"; 



const capitalizeWords = (text: string) => {
  return text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function RepoCard({
  name,
  description,
  stargazers_count, 
  forks_count,
  language,
  html_url, 
  activeTab,
}: RepoCardProps) {
  


  const formattedName = name.replace(/[_-]/g, " "); 
  const nameParts = formattedName.split(" ");
  
  const repoName = capitalizeWords(nameParts[0]); 
  const highlight =
    nameParts.length > 1
      ? capitalizeWords(nameParts.slice(1).join(" ")) 
      : capitalizeWords(language || name); 

  return (
    <div className="border-b border-[#E0E0E0] lg:border-b-0 py-4">
      <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-lg">
        <span className="text-textPrimary font-light">{repoName}</span>
        <span className="text-textPrimary font-normal"> / </span>
        <span className="text-buttonSecondary font-semibold">{highlight}</span>
      </a>

      <p className="text-textSecondary text-sm font-normal mt-1">{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis vel etiam tellus velit pellentesque scelerisque ut risus."}</p>

      <div className="flex items-center gap-4 text-textPrimary text-sm font-normal mt-2">
        {activeTab === "repos" ? (
          <>
            <div className="flex items-center gap-1">
              <BsStarFill size={16} className="text-black" />
              <span>{stargazers_count.toLocaleString()}</span>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-1 font-semibold">
            <span>{language || "Desconocido"}</span>
          </div>
        )}

        <div className="flex items-center gap-1">
          <GoGitBranch size={16} className="text-black" />
          <span>{forks_count.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
