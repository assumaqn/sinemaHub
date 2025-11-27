import ResultContent from "./ResultContent";
import ResultHeader from "./ResultHeader";
const movies = [
  {
    id: 1,
    title: "Kung Fu Panda: Legends of Awesomeness",
    year: "2011–2016",
    genre: "Series",
    description:
      "Po continues his training as the Dragon Warrior while protecting the Valley of Peace with Master Shifu and the Furious Five.",
    image:
      "https://i.pinimg.com/1200x/6f/ab/43/6fab435e3225aa160359a9da60d2d3d4.jpg",
  },
  {
    id: 2,
    title: "Kung Fu Panda",
    year: "2008",
    genre: "Animation",
    description:
      "A clumsy panda named Po is chosen as the Dragon Warrior and must defend the valley from the evil Tai Lung.",
    image:
      "https://i.pinimg.com/736x/75/eb/1d/75eb1d3c965ddac7771f22ee43525ee3.jpg",
  },
  {
    id: 3,
    title: "Kung Fu Panda 2",
    year: "2011",
    genre: "Animation",
    description:
      "Po faces a new enemy who threatens China with a powerful weapon while uncovering secrets about his past.",
    image:
      "https://i.pinimg.com/1200x/bd/47/47/bd4747d746dc002d8d924538e7df7d52.jpg",
  },
  {
    id: 4,
    title: "Kung Fu Panda: The Paws of Destiny",
    year: "2018",
    genre: "Series",
    description:
      "Po mentors four panda children who suddenly gain mysterious kung fu powers from ancient chi warriors.",
    image:
      "https://i.pinimg.com/736x/79/30/23/7930238b287032bc313e2e50448cce40.jpg",
  },
];

function MovieResult() {
  return (
    <section className="text-stone-100 pt-3 w-full">
      <ResultHeader />
      <ResultContent />
    </section>
  );
}

export default MovieResult;
