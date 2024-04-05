interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export default async function fetchWithAuth(
  url: string,
  options: FetchOptions = {}
): Promise<any> {
  const headers = {
    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
    cache: "no-cache",
  });

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();

  return data;
}
