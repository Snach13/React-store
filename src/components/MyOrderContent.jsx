import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { NavBar } from "./NavBar";
import flechita from "../assets/images/flechita.svg";
import { errorOnImage } from "../utils/errorOnImage";
const MyOrderContent = () => {
  let { orderIndex } = useParams();
  const { orders } = useContext(AppContext);
  const orderToRender = orders[orderIndex];
  return (
    <>
      <NavBar />
      <div className="main-container">
        <div className="order-content-container" style={{
          display: "flex",
          flexDirection: "column"
        }}>
          <div className="order-header" style={{
            display: 'flex', alignItems: 'center', fontFamily: 'Quicksand, sans-serif'
          }}>
            <Link style={{ marginRight: '3rem' }} to={"/my-orders"}>
              <figure>
                <img alt="Go back arrow" src={flechita} style={{ transform: 'rotate(180deg)', }} />
              </figure>
            </Link>
            <h1> Order </h1>
          </div>
          <div className="grid-container">
            {orderToRender?.products?.map((product) => (
              <div className="product-item" key={product.id}>
                <div className="product-info">
                  <figure>
                    <img src={product.images[0]} onError={(e) => errorOnImage(e)} alt="Product in order" />
                  </figure>
                  <p> {product.title} </p>
                </div>
                <div className="product-cancelled">
                  <p className="shopping-cart-product-price"> {`$${product?.price}`} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrderContent;
