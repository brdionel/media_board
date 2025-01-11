import { useMediaStore } from "../../store/media";
import classes from "./Filters.module.css";

const Filters = () => {
  const filters = useMediaStore((state) => state.filters);
  const handleFilterChange = useMediaStore((state) => state.handleFilterChange);

  return (
    <section>
      <div className={classes.filterContainer}>
        <label htmlFor="releaseYear" className={classes.label}>
          Release Year
        </label>
        <input
          id="releaseYear"
          value={filters.releaseYear}
          onChange={(e) => handleFilterChange(e, "releaseYear")}
        />
      </div>
    </section>
  );
};

export default Filters;
