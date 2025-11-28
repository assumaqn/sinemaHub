const url = "http://www.omdbapi.com/?apikey=6b02aa70&s=panda";

export async function getMovie() {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed To Get Movie ");
  const data = await res.json();

  return data;
}
