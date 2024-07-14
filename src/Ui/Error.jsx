import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error)
  return (
    <section className="my-7 mx-5">
      <div className=" space-y-3 capitalize text-2xl text-wine-800 ">
        <h1 className="text-bold ">something went wrong</h1>
        <p>{` ${error.status || ""} ${
          error.data || "error loading data try again later"
        }`}</p>
        <h6 className=" hover:underline  text-wine-400">
          <Link to="/">go to product to start ordering</Link>
        </h6>
      </div>
    </section>
  );
}

