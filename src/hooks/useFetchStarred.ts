import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { useUserStore } from "@/store/user/userStore";

export const useFetchStarred = () => {
  const username = useUserStore((state) => state.username);

  const { data, error, isLoading } = useSWR(
    username ? `https://api.github.com/users/${username}/starred` : null,
    fetcher
  );


  console.log("Fetched repos:", data);

  return { starred: data || [], error, isLoading };
};
