import { Fragment } from "react/jsx-runtime";
import { useMediaStore } from "../../store/media";
import classes from "./PopUp.module.css";
import { Close } from "@mui/icons-material";

const PopUp = () => {
  const toggleDrawer = useMediaStore((state) => state.toggleDrawer);
  const isOpen = useMediaStore((state) => state.drawer);
  const mediaSelected = useMediaStore((state) => state.mediaSelected);
  console.log({ isOpen });

  if (!isOpen || !mediaSelected) return null;

  const closeModal = () => {
    console.log("closeModal");
    toggleDrawer(null);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    console.log("handleBackgroundClick");
    // Verifica si el clic fue fuera del contenido del popup
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Fragment>
      <div
        onClick={handleBackgroundClick}
        className={`${classes.popUp} ${classes.showPopUp}`}
      ></div>
      <div className={`${isOpen ? classes.showPopUp : classes.closePopUp} `}>
        <div
          className={classes.popUpContent}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={classes.closeButtonContainer}>
            <button onClick={closeModal} className={classes.closeButton}>
              <Close />
            </button>
          </span>
          <div className={classes.main}>
            <div className={classes.mainImageContainer}>
              <img
                src={mediaSelected.images.main.url}
                alt={mediaSelected.title}
                className={classes.image}
              />
              <div className={classes.gradient}></div>
            </div>
            <div className={classes.mainTextContainer}>
              <h2>{mediaSelected.title}</h2>
              <p>{mediaSelected.description}</p>
              <strong>Release Year: {mediaSelected.releaseYear}</strong>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PopUp;
