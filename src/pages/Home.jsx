import { NavBar } from "../components/NavBar";
import { ProductList } from "../containers/ProductList";
import { ShoppingCart } from "../containers/ShoppingCart";
function Home() {
  return (
    <>
      <NavBar isHome />
      <ProductList />
      <ShoppingCart />
      {/* <ProductDetailAside /> */}
      {/* <DesktopMenu /> */}
      {/* <MobileMenu /> */}
    </>
  );
}

export { Home };
