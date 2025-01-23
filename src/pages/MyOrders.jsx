import React from "react";
import { Link } from "react-router-dom";
import "../styles/MyOrders.scss";
import MyOrder from "../components/MyOrder";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavBar } from "../components/NavBar";
const MyOrders = () => {
  const { orders } = useContext(AppContext);
  console.log("Created orders", orders);
  return (
    <>
      <NavBar />
      <section className="main-container">
        <div className="order-container">
          <h1 className="title"> My orders </h1>
          <div className="products-container">
            {orders?.map((order, index) => (
              <Link
                to={`/my-orders/${index}`}
                style={{ textDecoration: "none" }}
                key={`order${index}`}
              >
                <MyOrder
                  products={order?.products}
                  date={order?.date}
                  totalOrder={order?.totalOrder}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrders;
