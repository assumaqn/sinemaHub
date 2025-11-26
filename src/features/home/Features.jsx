import FeaturedCard from "./FeaturedCard";
import { MdLocalMovies } from "react-icons/md";
import { BsFillLightningFill } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
function Features() {
  return (
    <div className="flex max-w-4xl space-x-10 justify-between items-center mx-auto py-[156px]">
      <FeaturedCard
        icon={
          <MdLocalMovies className="text-amber-600 text-5xl bg-amber-200/20 w-12 h-12 rounded-full p-3" />
        }
        heading="Vast Database"
        description="Access millions of movies and TV shows from around the world"
      />
      <FeaturedCard
        icon={
          <BsFillLightningFill className="text-amber-600 text-5xl bg-amber-200/20 w-12 h-12 rounded-full p-3" />
        }
        heading="Lightning Fast"
        description="Get instant search results and detailed information in seconds"
      />
      <FeaturedCard
        icon={
          <BsStars className="text-amber-600 text-5xl bg-amber-200/20 w-12 h-12 rounded-full p-3" />
        }
        heading="Rich Details"
        description="Explore ratings, cast, plot summaries, and comprehensive metadata"
      />
    </div>
  );
}

export default Features;
