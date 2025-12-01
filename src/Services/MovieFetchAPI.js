export async function getMovie(query) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=6b02aa70&s=${query}`);

  if (!res.ok) {
    throw new Error("Network error. Please check your connection.");
  }

  const data = await res.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Movie not found");
  }

  return data;
}
