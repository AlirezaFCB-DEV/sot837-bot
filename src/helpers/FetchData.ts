"use server";

export async function FetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const data = res.json();

  return data;
}
