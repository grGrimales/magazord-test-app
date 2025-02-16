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
    <a 
      href={html_url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block border-b border-[#E0E0E0] lg:border-b-0 py-4 px-4 rounded-lg 
      transition duration-300 lg:hover:bg-white lg:hover:shadow-[0px_0px_16px_0px_#4F4F5026]"
    >
      <div className="text-lg">
        <span className="text-textPrimary font-light">{repoName}</span>
        <span className="text-textPrimary font-normal"> / </span>
        <span className="text-buttonSecondary font-semibold">{highlight}</span>
      </div>

      <p className="text-textSecondary text-sm font-normal mt-1">
        {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </p>

      <div className="flex items-center gap-4 text-textPrimary text-sm font-normal mt-2">
        {activeTab === "repos" ? (
          <div className="flex items-center gap-1 ">
            <BsStarFill size={16} className="text-textPrimary" />
            <span  className="text-sm text-textPrimary">{stargazers_count.toLocaleString()}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <span  className="text-sm text-textPrimary">{language || "N/A"}</span>
          </div>
        )}

        <div className="flex items-center gap-1 text-textPrimary">
          <GoGitBranch size={16} className="text-textPrimary" />
          <span  className="text-sm text-textPrimary">{forks_count.toLocaleString()}</span>
        </div>
      </div>
    </a>
  );
}
