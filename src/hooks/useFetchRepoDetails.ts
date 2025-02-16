import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

export const useFetchRepoDetails = (username: string, repoName: string) => {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/${username}/${repoName}`,
    fetcher
  );

  return { repo: data, error, isLoading };
};
