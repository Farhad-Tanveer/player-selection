import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const { name, price, ratings, img } = props.player;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Rating: {ratings}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(props.player)}
              className="btn btn-primary"
            >
              Add to Cart
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
