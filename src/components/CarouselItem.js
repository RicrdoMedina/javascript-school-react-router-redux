import React from "react";
import { connect } from "react-redux";
import { useAlert } from "react-alert";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/carouselItem.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import deleteIcon from "../assets/static/remove-icon.png";

const CarouselItem = props => {
  const {
    id,
    cover,
    title,
    year,
    contentRating,
    duration,
    isList,
    setFavorite,
    deleteFavorite,
    myList
  } = props;

  const alert = useAlert();

  const handleSetFavorite = () => {
    const exist = myList.find(item => item.id == id);

    if (exist) {
      alert.show(`${title} ya fue agregado a tu lista`);
    } else {
      setFavorite({
        id,
        cover,
        title,
        year,
        contentRating,
        duration
      });
      alert.success(`${title} ha sido agregado a tu lista`);
    }
  };

  const handleDeleteFavorite = () => {
    deleteFavorite(id);
    alert.success(`${title} ha sido eliminado de tu lista`);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--icon"
              src={playIcon}
              alt="Play"
            />
          </Link>
          {isList ? (
            <img
              className="carousel-item__details--icon"
              src={deleteIcon}
              alt="Delete"
              onClick={handleDeleteFavorite}
            />
          ) : (
            <img
              className="carousel-item__details--icon"
              src={plusIcon}
              alt="Plus"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <h3 className="carousel-item__details--title">{title}</h3>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
};

const mapStateToProps = state => {
  return {
    myList: state.myList
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
