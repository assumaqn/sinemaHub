import { createContext, useContext, useReducer } from "react";

const searchContext = createContext();

const initalState = {
  query: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "searchMovie":
      return { query: action.payload };
    case "searchNav":
      return { query: action.payload };
    case "searchResult":
      return { query: "" };
    default:
      throw new Error("Unknown command");
  }
}
function SearchProvider({ children }) {
  const [{ query }, dispatch] = useReducer(reducer, initalState);
  return (
    <searchContext.Provider value={{ query, dispatch }}>
      {children}
    </searchContext.Provider>
  );
}

function useSearch() {
  const search = useContext(searchContext);

  return search;
}

export { SearchProvider, useSearch };
