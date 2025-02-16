export async function fetcher(url: string) {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; 

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });


  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
