import { createContext, useContext, useReducer } from "react";

const searchContext = createContext();

const initalState = {
  query: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "search/Home":
      return { query: action.payload };
    case "search/Nav":
      return { query: action.payload };
    case "search/Result":
      return { query: action.payload };
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
