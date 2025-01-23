import "../styles/ProductList.scss";
import { useGetProducts } from "../hooks/useGetProducts";
import { ProductCard } from "./ProductCard";
import { ProductDetailAside } from "./ProductDetailAside";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ProductList() {
  const { filteredUrl } = useContext(AppContext);
  const { products, loading, error } = useGetProducts(filteredUrl); // Destructure loading and error

  if (loading) {
    return <p className="LoadingMessage">Loading products...</p>; // Display a loading message
  }

  if (error) {
    return <p className="ErrorMessage">{error}</p>; // Display an error message
  }

  return (
    <section className="ProductListContainer">
      <div className="ProductList">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <ProductDetailAside />
    </section>
  );
}

export { ProductList };
