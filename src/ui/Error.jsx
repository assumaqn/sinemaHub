import { useRouteError } from "react-router";
import { MdErrorOutline } from "react-icons/md";
import Button from "./Button";

function Error() {
  const error = useRouteError();

  return (
    <div className="text-stone-50 flex items-center justify-center pt-24">
      <div className="flex flex-col items-center space-y-3">
        <MdErrorOutline className="text-5xl text-red-600 mb-2" />
        <h1 className="text-amber-400 font-bold text-5xl">
          {error.message === "Failed to fetch" ? 404 : 500}
        </h1>
        <p className="text-stone-300 text-lg font-semibold">
          Oops! something went wrong
        </p>
        <p className="text-sm text-stone-400 capitalize">
          {error.message || error.data}
        </p>
        <Button type="small">Back to Home</Button>
      </div>
    </div>
  );
}

export default Error;
