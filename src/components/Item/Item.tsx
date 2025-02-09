import { type MediaEntries } from "../../types";
import classes from "./Item.module.css";

interface ItemProps {
  handleSelectedMedia: (selectedMedia: any) => void;
  item: MediaEntries;
  delay: React.CSSProperties;
}

const Item: React.FC<ItemProps> = ({ handleSelectedMedia, item, delay }) => {
  return (
    <article
      key={item.title}
      className={classes.item}
      onClick={() => handleSelectedMedia(item)}
      style={delay}
    >
      <div className={classes.overlay}></div>
      <img
        src={item.images["Poster Art"].url}
        alt={item.title}
        className={classes.image}
      />
      <h2>{item.title}</h2>
    </article>
  );
};

export default Item;
