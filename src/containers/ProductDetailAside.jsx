import { useContext } from "react";
import closeIcon from "../assets/images/icon_close.png";
import "../styles/ProductDetailAside.scss";
import addToCart from "../assets/images/bt_add_to_cart.svg";
import addedToCart from "../assets/images/bt_added_to_cart.svg";
import { AppContext } from "../context/AppContext";
import { errorOnImage } from "../utils/errorOnImage";
function ProductDetailAside() {
  const { appState, addProductToCart, productToShow, closeAside } =
    useContext(AppContext);
  const ceiledPrice = Math.ceil(productToShow.price);
  const asideStatus = appState.isAsideOpen;
  const handleClose = () => {
    closeAside();
  };
  const handleCart = (item) => {
    addProductToCart(item);
  };
  return (
    <>
      {asideStatus ? (
        <aside className="ProductDetailAside">
          <div className="ProductDetailAsideClose" onClick={handleClose}>
            <img src={closeIcon} alt="Close product detail icon" />
          </div>
          <img
            className="ProductInfoImage"
            src={productToShow.images[0]}
            alt="Selected product image"
            onError={(e) => errorOnImage(e)}
          />
          <div className="ProductInfo">
            <p> {`$${ceiledPrice}`} </p>
            <p> {productToShow.title}</p>
            <p> {productToShow.description} </p>
          </div>
          {!appState.cart.includes(productToShow) ? (
            <button
              className="primary-button add-to-cart-button"
              onClick={() => handleCart(productToShow)}
            >
              <img src={addToCart} alt="Add to cart" />
              Add to cart
            </button>
          ) : (
            <button
              className="secondary-button-aside add-to-cart-button"
              onClick={() => handleCart(productToShow)}
            >
              <img src={addedToCart} alt="Added to cart" />
              Added to cart
            </button>
          )}
        </aside>
      ) : null}
    </>
  );
}

export { ProductDetailAside };
