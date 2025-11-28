const url = "http://www.omdbapi.com/?apikey=6b02aa70&s=iron man";

export async function getMovie() {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
