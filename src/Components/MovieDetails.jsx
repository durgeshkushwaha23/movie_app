import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieAction";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import Horizontacard from "../partials/HorizontalCard";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen h-screen px-10 text-white overflow-y-auto"
    >
      {/* Part 1: Navigation */}
      <nav className="flex items-center justify-between w-full h-16 text-2xl mt-3">
        <button onClick={() => navigate(-1)} className="hover:text-purple-500">
          <i className="ri-arrow-left-line mr-3"></i> Back
        </button>
        <div className="flex gap-6">
          <a
            href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a
            href={info.detail.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <i className="ri-external-link-line"></i>
          </a>
          <a
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            IMDB
          </a>
          <a
            href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <i className="ri-global-line"></i>
          </a>
        </div>
      </nav>

      {/* Part 2: Movie Poster and Details */}
      <div className="flex flex-col items-center gap-5 mt-8 md:flex-row">
        <img
          className="shadow-lg rounded-lg w-80 h-auto"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path ||
            info.detail.backdrop_path ||
            info.detail.profile_path
          }`}
          alt="Movie Poster"
        />
        <div className="flex flex-col gap-3 md:w-2/3">
          <h1 className="text-5xl font-extrabold">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
          </h1>
          <p className="text-gray-400">
            Release Date: {info.detail.release_date.split("-")[0]}
          </p>
          <p className="text-lg">
            User Score:{" "}
            <span className="text-yellow-300 font-bold">
              {info.detail.vote_average ? (info.detail.vote_average * 10).toFixed() + "%" : "N/A"}
            </span>
          </p>
          <p className="text-gray-400">
            Genres: {info.detail.genres.map((g) => g.name).join(", ")}
          </p>
          <p>Runtime: {info.detail.runtime} mins</p>
          <p>Status: {info.detail.status}</p>
          <p>Budget: ${info.detail.budget.toLocaleString()}</p>
          <p className="mt-4">{info.detail.overview}</p>
          <Link
            to={`${pathname}/trailer`}
            className="mt-5 inline-block  text-lg font-semibold text-purple-500 hover:text-purple-300"
          >
            Play Trailer
          </Link>
        </div>
      </div>

      {/* Part 3: Watch Providers */}
      <div className="mt-10">
        {info.watchproviders && info.watchproviders.buy && (
          <>
            <h3 className="text-xl text-gray-500 mb-2">Available to Buy</h3>
            <div className="flex gap-3">
              {info.watchproviders.buy.map((w) => (
                <img
                  key={w.provider_id}
                  className="w-12 h-12 rounded-md"
                  src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                  alt={`${w.provider_name} logo`}
                />
              ))}
            </div>
          </>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <>
            <h3 className="text-xl text-gray-500 mb-2 mt-4">Available for Rent</h3>
            <div className="flex gap-3">
              {info.watchproviders.rent.map((w) => (
                <img
                  key={w.provider_id}
                  className="w-12 h-12 rounded-md"
                  src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                  alt={`${w.provider_name} logo`}
                />
              ))}
            </div>
          </>
        )}

        {info.watchproviders && info.watchproviders.flatrate && (
          <>
            <h3 className="text-xl text-gray-500 mb-2 mt-4">Streaming Platforms</h3>
            <div className="flex gap-3">
              {info.watchproviders.flatrate.map((w) => (
                <img
                  key={w.provider_id}
                  className="w-12 h-12 rounded-md"
                  src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                  alt={`${w.provider_name} logo`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Part 4: Recommendations and Similar Movies */}
      <div className="mt-10">
        <Horizontacard
          data={info.recommendations.length > 0 ? info.recommendations : info.similar}
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
