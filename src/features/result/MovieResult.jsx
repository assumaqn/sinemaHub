import Loader from "../../ui/Loader";
import ResultContent from "./ResultContent";
import ResultHeader from "./ResultHeader";

function MovieResult() {
  return (
    <section className="text-stone-100 pt-3 w-full">
      <ResultHeader />
      <ResultContent />
    </section>
  );
}

export default MovieResult;
