import { useNavigation } from "react-router";
import Loader from "../../ui/Loader";
import ResultContent from "./ResultContent";
import ResultHeader from "./ResultHeader";

function MovieResult() {
  const navigation = useNavigation();
  const isLoading = navigation.state == "loading";

  return (
    <section className="text-stone-100 pt-3 w-full">
      <ResultHeader />
      {isLoading ? <Loader /> : <ResultContent />}
    </section>
  );
}

export default MovieResult;
