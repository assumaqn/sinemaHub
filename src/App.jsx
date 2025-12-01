import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./features/home/HomePage";
import MovieResult from "./features/result/MovieResult";
import { loader as moviesLoader } from "./features/result/ResultContent";
import Error from "./ui/Error";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          errorElement: <Error />,
        },
        {
          path: "/search/:query",
          element: <MovieResult />,
          loader: moviesLoader,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
