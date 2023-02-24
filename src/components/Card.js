import { Link } from "react-router-dom";
import DefaultImage from "../assets/images/cnug.jpg";

export const Card = ({ movie }) => {
  const { id, title, overview, poster_path } = movie;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : DefaultImage;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={poster} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 text-base text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
