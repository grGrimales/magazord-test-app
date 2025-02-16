import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { useUserStore } from "@/store/user/userStore";
import { useGithubStore } from "@/store/github/githubStore";

export const useFetchStarred = () => {
  const username = useUserStore((state) => state.username);
  // const { setStarred, setStarredCount } = useGithubStore();

  const { data, error, isLoading } = useSWR(
    username ? `https://api.github.com/users/${username}/starred` : null,
    fetcher
  );

  // if (data) {
  //   setStarred(data);
  //   setStarredCount(data.length);
  // }

  return { starred: data || [], error, isLoading };
};
