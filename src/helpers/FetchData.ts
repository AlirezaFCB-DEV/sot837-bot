export async function FetchData<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Request failed from : ${url} \n status : ${res.status}`);
  }

  return res.json();
}
