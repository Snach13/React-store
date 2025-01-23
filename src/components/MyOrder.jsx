import flechita from "../assets/images/flechita.svg";

const MyOrder = ({ products, date, totalOrder }) => {
  const countProdcuts = products?.length;
  return (
    <div className="order-item">
      <div className="order-info">
        <p>
          <span> {date} </span>
          <span> {countProdcuts} articles </span>
        </p>
        <div>
          <p> {`${totalOrder}`} </p>
          <figure>
            <img src={flechita} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
