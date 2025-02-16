import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { useUserStore } from "@/store/user/userStore";

export const useFetchRepos = () => {
  const username = useUserStore((state) => state.username);

  const url = `https://api.github.com/users/${username}/repos?per_page=50&page=1&sort=full_name&direction=asc`;

  const { data, error, isLoading } = useSWR(
    username ? url : null,
    fetcher
  );

  return { repos: data || [], error, isLoading };
};
