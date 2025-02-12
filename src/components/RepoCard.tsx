interface RepoCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
}

export default function RepoCard({ name, description, stars, forks, url }: RepoCardProps) {
    return (
      <div className="p-4 border rounded-lg shadow-md bg-white mt-2">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
          {name}
        </a>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <div className="flex mt-2 text-gray-600 text-sm">
          <span>⭐ {stars}</span>
          <span className="ml-4">🍴 {forks}</span>
        </div>
      </div>
    );
  }