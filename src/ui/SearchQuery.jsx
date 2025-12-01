import { useNavigate } from "react-router";
import Button from "./Button";

function SearchQuery({ searchType, placeholder, dispatch, query, type, to }) {
  const navigation = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigation(`/search/${query}`);
    dispatch({ type: "searchResult" });
  }
  const style = {
    headerSearch:
      "w-[150px] py-1 px-4 focus:w-40 sm:focus:w-52 transition-all duration-200 ",
    normalSearch: "",
    resultSearch: " w-[280px] sm:w-[550px] py-2",
  };

  if (searchType == "headerSearch")
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="search"
            placeholder={`${placeholder ? placeholder : "search for movies,series,episodes.."}`}
            className={`input ${style[searchType]}`}
            onChange={(e) =>
              dispatch({ type: "searchNav", payload: e.target.value })
            }
          />
          <button type="hidden"></button>
        </div>
      </form>
    );
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={
          type == "small"
            ? "flex items-center justify-center gap-3"
            : "flex gap-2 items-center justify-center my-10"
        }
      >
        <input
          type="search"
          placeholder={`${placeholder ? placeholder : "search for movies,series,episodes.."}`}
          className={`input ${style[searchType]}`}
          onChange={(e) =>
            dispatch({ type: "searchMovie", payload: e.target.value })
          }
        />
        <Button to={`/search/${query}`} type={type}>
          Search
        </Button>
      </div>
    </form>
  );
}

export default SearchQuery;
