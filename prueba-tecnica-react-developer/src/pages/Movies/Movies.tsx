import { useEffect } from "react";
import { useMediaStore } from "../../store/media";
import classes from "./Movies.module.css";
import { MediaEntries } from "../../types";
import PopUp from "../../components/PopUp";
import ListItems from "../../components/ListItems";
import Filters from "../../components/Filters";
import Pagination from "../../components/Pagination";

const Movies = () => {
  const fetchMedia = useMediaStore((state) => state.fetchMedia);
  const movies = useMediaStore((state) => state.movies);
  const loading = useMediaStore((state) => state.loading);
  const error = useMediaStore((state) => state.error);
  const selectMedia = useMediaStore((state) => state.selectMedia);
  const filters = useMediaStore((state) => state.filters);

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleSelectedMedia = (selectedMedia: MediaEntries) => {
    selectMedia(selectedMedia, "movie");
  };

  if (loading) {
    return (
      <div className={classes.bgLoading}>
        <p>Loading Movies...</p>;
      </div>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const filteredItems = movies.filter(
    (item) => item.releaseYear >= filters.releaseYear
  );

  return (
    <div className={classes.moviesSection}>
      <h1 className={classes.title}>Movies</h1>
      <Filters />

      <main>
        {movies.length > 0 ? (
          <ListItems
            handleSelectedMedia={handleSelectedMedia}
            items={filteredItems}
          />
        ) : (
          <p>No movies available.</p>
        )}
      </main>
      <Pagination totalResults={filteredItems.length} />
      <PopUp />
    </div>
  );
};

export default Movies;
