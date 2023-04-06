import { NavLink } from "react-router-dom";
import { useEffect, useReducer } from "react";
import styles from "./Card.module.css";
import dentistReducer from "../hooks/dentistReducer";
import { useAppContext } from "../hooks/useAppContext";

const Card = ({ props }) => {
  const [favs, dispatch] = useReducer(dentistReducer, []);


  const {
    state: { favorites },
    addFavorite,
    removeFavorite,
  } = useAppContext();

  const isFav = favorites.some(fav => fav.id === props.id);
  console.log("IS FAV: ", isFav);
  const changeState = (e) => {
    e.stopPropagation();
    if (!isFav) {
      addFavorite(props);
    } else {
      removeFavorite(props.id);
    }
  }
  return (
    <>
      <div className={`card`}>
        {isFav ? 
          <img src="/images/heartFill.png" alt="heart" className={styles.favButton} onClick={changeState}/>
          : 
          <img src="/images/heart.png" alt="heart" className={styles.favButton} onClick={changeState}/>
        }
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <NavLink to={`/dentist/${props.id}`}>
            <h5 className={`card-title ${styles.title}`}>{props.name}</h5>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
