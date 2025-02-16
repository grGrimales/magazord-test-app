import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { useUserStore } from "@/store/user/userStore";

export const useFetchRepoDetails = (repoName: string) => {


  const username = useUserStore((state) => state.username);
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/${username}/${repoName}`,
    fetcher
  );

  return { repo: data, error, isLoading };
};
