import { Fragment } from "react";
import { usePaginationStore } from "../../store/pagination";
import { type MediaEntries } from "../../types";
import Item from "../Item";
import classes from "./ListItems.module.css";

interface ListItemsProps {
  items: MediaEntries[];
  handleSelectedMedia: (selectedMedia: MediaEntries) => void;
}

const ListItems: React.FC<ListItemsProps> = ({
  handleSelectedMedia,
  items,
}) => {
  const { currentPage, pageSize } = usePaginationStore((state) => state);

  const sortedItems = [...items].sort((a, b) => a.title.localeCompare(b.title));

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = sortedItems.slice(startIndex, startIndex + pageSize);

  return (
    <Fragment>
      <section className={classes.gridContainer}>
        {paginatedItems.map((item, index) => {
          const delay = { animationDelay: `${index * 100}ms` };
          return (
          <Item
            key={item.title}
            item={item}
            handleSelectedMedia={handleSelectedMedia}
            delay={delay}
          />
        )})}
      </section>
    </Fragment>
  );
};

export default ListItems;
