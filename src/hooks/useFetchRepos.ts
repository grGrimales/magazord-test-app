import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { useUserStore } from "@/store/user/userStore";

export const useFetchRepos = () => {
  const username = useUserStore((state) => state.username);

  const { data, error, isLoading } = useSWR(
    username ? `https://api.github.com/users/${username}/repos` : null,
    fetcher
  );

  console.log("Fetched repos:", data);

  return { repos: data || [], error, isLoading };
};
