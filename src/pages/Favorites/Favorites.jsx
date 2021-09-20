import React from "react";
import Layout from "../../components/layout_footer_header/Layout";
import { removeFromFavorites } from "../../redux/favorites/favoritesActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import "./Favorites.css";

function Favorites(props) {
  return (
    <div>
      <Layout>
        <div
          className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center"
        >
          {props.favorites.length ? (
            <div className="w-100">
              <div className="d-flex justify-content-between text-center h4 text-bold">
                <p className="w-25">Produs</p>
                <p className="w-25">Pret</p>
                <p className="w-25">Elimina de la Favorite</p>
              </div>
              {props.favorites.map((product) => {
                return (
                  <div
                    className="d-flex justify-content-between align-items-center text-center"
                    key={product.id}
                  >
                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                      <img src={product.image} alt="Produs" />
                      <p>{product.name}</p>
                    </div>
                    <p className="w-25">
                      {product.price} {product.currency}
                    </p>
                    <div className="w-25 d-flex justify-content-center">
                      <div
                        onClick={() => props.removeFromCart({ id: product.id })}
                      >
                        <Close />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <p className="h3">Nu ai produse în coș!</p>
              <Link to="/">
                <button className="btn btn-outline-dark">Inapoi la home</button>
              </Link>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    favorites: state.favorite.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (payload) => dispatch(removeFromFavorites(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
