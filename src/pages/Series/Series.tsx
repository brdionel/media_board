import { Fragment, useEffect } from "react";
import { useMediaStore } from "../../store/media";
import { type MediaEntries } from "../../types";
import ListItems from "../../components/ListItems";
import classes from "./Series.module.css";
import PopUp from "../../components/PopUp"
import Pagination from "../../components/Pagination";
import BlockErrorNoMatchesItems from "../../components/BlockErrorNoMatchesItems";

const Series = () => {
  const fetchMedia = useMediaStore((state) => state.fetchMedia);
  const series = useMediaStore((state) => state.series);
  const loading = useMediaStore((state) => state.loading);
  const error = useMediaStore((state) => state.error);
  const selectMedia = useMediaStore((state) => state.selectMedia);
  const filters = useMediaStore((state) => state.filters);

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleSelectedMedia = (selectedMedia: MediaEntries) => {
    selectMedia(selectedMedia, "series");
  };

  if (loading) {
    return (
      <div className={classes.bgLoading}>
        <p>Loading Series...</p>;
      </div>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const filteredItems = series.filter(
    (item) => item.releaseYear >= filters.releaseYear
  );

  return (
    <Fragment>
      <div className={classes.seriesSection}>
        <h1 className={classes.title}>Series</h1>
        <main>
          {filteredItems.length > 0 ? (
            <ListItems
              handleSelectedMedia={handleSelectedMedia}
              items={series}
            />
          ) : (
            <BlockErrorNoMatchesItems />
          )}
        </main>
        {filteredItems.length > 0 && (
          <Pagination totalResults={filteredItems.length} />
        )}
      </div>
      <PopUp />
    </Fragment>
  );
};

export default Series;
