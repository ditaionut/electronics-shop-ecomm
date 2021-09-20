import React, { useState } from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToFavorites, removeFromFavorites } from "../../redux/favorites/favoritesActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function ProductItem(props) {
  const { name, price, currency, image, id, addToFavorites, addToCart, removeFromFavorites } = props;
  const [isFaved, setIsFaved] = useState("")

  return (
    <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
      <Link
        to={`/product/${id}`}
        className="d-flex flex-column align-items-center"
      >
        <img src={image} alt="productPhoto" className="mb-2" />
        <p className="mb-1 text-center">{name}</p>
        <p className="text-center">{price + currency}</p>
      </Link>
      <div>
          
      </div>
      <div>
      {!isFaved ? <FaRegHeart
        onClick={() =>
          addToFavorites({
            product: {
              id,
              name,
              price,
              currency,
              image,
            },
          })
        }
      /> : <FaHeart 
      onClick={() => props.removeFromCart({ product: {id} })}
      />}

      </div>
      <button
        className="btn btn-outline-dark"
        onClick={() =>
          addToCart({
            product: {
              id,
              name,
              price,
              currency,
              image,
            },
          })
        }
      >
        Adaugă în coș
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    addToFavorites: (payload) => dispatch(addToFavorites(payload)),
    removeFromCart: (payload) => dispatch(removeFromFavorites(payload)),
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
