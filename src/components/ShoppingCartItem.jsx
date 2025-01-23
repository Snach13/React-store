import closeIcon from "../assets/images/icon_close.png";

import "../styles/ShoppingCartItem.scss";
import { errorOnImage } from "../utils/errorOnImage";

function ShoppingCartItem({ product, removeProductFromCart, index }) {
  const slicedTitle = product.title.slice(0, 20).trim();
  const ceiledPrice = Math.ceil(product.price);
  return (
    <div className="product-item">
      <div className="product-info">
        <figure>
          <img
            src={product.images[0]}
            onError={(e) => errorOnImage(e)}
            alt="Product in shopping cart"
          />
        </figure>
        <p> {slicedTitle} </p>
      </div>
      <div className="product-cancelled">
        <p className="shopping-cart-product-price"> {`$${ceiledPrice}`} </p>
        <figure
          className="remove-from-shopping-cart"
          onClick={() => removeProductFromCart(index)}
        >
          <img src={closeIcon} alt="Remove product from cart icon" />
        </figure>
      </div>
    </div>
  );
}

export { ShoppingCartItem };
