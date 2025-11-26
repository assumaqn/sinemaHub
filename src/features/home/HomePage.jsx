import Features from "./Features";
import Hero from "./Hero";

function HomePage() {
  return (
    <section className="text-center text-xl font-bold  text-stone-100 capitalize">
      <Hero />
      <Features />
    </section>
  );
}

export default HomePage;
