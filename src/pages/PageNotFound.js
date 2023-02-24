import { useEffect } from "react";
import { Link } from "react-router-dom";
import ImgNotFound from "../assets/images/404.jpg";
export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Cinema Warehouse`;
  }, []);
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my4">
          <p className="text-7xl text-gray-600 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={ImgNotFound} alt="404 Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to={"/"}>
            <button
              type="button"
              class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
