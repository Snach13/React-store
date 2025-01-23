import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/ProductInfo.scss";
import addToCart from "../assets/images/bt_add_to_cart.svg";
import addedToCart from "../assets/images/bt_added_to_cart.svg";
import { errorOnImage } from "../utils/errorOnImage";

function ProductInfo({ product }) {
  const { appState, showProduct, openAside, addProductToCart } =
    useContext(AppContext);

  const slicedTitle = `${product.title.slice(0, 20).trimEnd()}...`;
  const ceiledPrice = Math.ceil(product.price);
  //This is our context, which contains the cart of the products that we have added to the cart, this is useful because when we want to render our shopping cart
  //Creating a product
  const handleCart = (item) => {
    addProductToCart(item);
  };
  const handleShowProduct = (item) => {
    showProduct(item);
    openAside();
  };

  return (
    <>
      <img
        className="ProductImage"
        src={product?.images[0]}
        alt="A product from our catalog"
        onError={(e) => errorOnImage(e)}
        onClick={() => handleShowProduct(product)}
      />
      <div className="ProductDescriptionContainer">
        <div className="ProductDescription">
          <p className="ProductName"> {slicedTitle} </p>
          <p className="ProductPrice"> {`$${ceiledPrice}`} </p>
        </div>
        <figure className="PurchaseProduct" onClick={() => handleCart(product)}>
          <img
            src={!appState.cart.includes(product) ? addToCart : addedToCart}
            alt="Purchase Item Button"
          />
        </figure>
      </div>
    </>
  );
}
export { ProductInfo };
