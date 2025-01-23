import "../styles/NavBar.scss";
import logo from "../assets/images/logo-ecommerce.jpg";
import shoppingCartIcon from "../assets/images/icon_shopping_cart.svg";
import shoppingCartFilled from "../assets/images/icon_shopping_cart_notification.svg";
import menuIcon from "../assets/images/icon_menu.svg";
import { FilterCategory } from "./FilterCategory";
import { DesktopMenu } from "../containers/DesktopMenu";
import { MobileMenu } from "../containers/MobileMenu";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import SingInButton from "./SignInButton";
function NavBar({ isHome }) {
  const { appState } = useContext(AppContext);
  const { openShoppingCart } = useContext(AppContext);
  const { closeShoppingCart } = useContext(AppContext);
  const { closeAside } = useContext(AppContext);
  const { isLogged, setIsLogged } = useContext(AppContext);
  const { user } = useContext(AppContext);
  const isCarEmpty = appState.cart.length;
  //Desktop Menu state
  const [toggleMenuDesktop, setToggleMenuDesktop] = useState(false);
  //Mobile Menu state
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const handleOpenCart = () => {
    closeAside();
    openShoppingCart();
    setToggleMenuDesktop(false);
    setToggleMenuMobile(false);
  };
  const handleToggleMenuMobile = () => {
    closeShoppingCart();
    setToggleMenuMobile(!toggleMenuMobile);
    // In case user switches from a mobile view to a desktop view
    setToggleMenuDesktop(false);
  };

  const handleToggleMenuDesktop = () => {
    closeShoppingCart();
    setToggleMenuMobile(false);
    setToggleMenuDesktop(!toggleMenuDesktop);
  };
  const handleSignIn = () => {
    const stringifiedLogIn = JSON.stringify(true);
    localStorage.setItem("isLogged", stringifiedLogIn);
    setIsLogged(true);
  };
  return (
    <nav className="main-navbar">
      <img
        className="menu"
        src={menuIcon}
        alt="Menu"
        onClick={handleToggleMenuMobile}
      />
      {toggleMenuMobile ? (
        isHome ? (
          <MobileMenu
            isHome
            toggleMenuMobile={toggleMenuMobile}
            setToggleMenuMobile={setToggleMenuMobile}
          />
        ) : (
          <MobileMenu
            toggleMenuMobile={toggleMenuMobile}
            setToggleMenuMobile={setToggleMenuMobile}
          />
        )
      ) : null}
      <div className="navbar-left">
        <div>
          <Link to={"/"}>
            <img
              src={logo}
              style={{ cursor: "pointer" }}
              alt="Yard sale logo"
            />
          </Link>
        </div>
        {isHome && (
          <ul>
            <FilterCategory categoryName="All" categoryID={0} />
            <FilterCategory categoryName="Clothes" categoryID={1} />
            <FilterCategory categoryName="Electronics" categoryID={2} />
            <FilterCategory categoryName="Furniture" categoryID={3} />
            <FilterCategory categoryName="Toys" categoryID={4} />
            <FilterCategory categoryName="Others" categoryID={5} />
          </ul>
        )}
      </div>
      <div className="navbar-right">
        <ul>
          {!isLogged ? (
            <SingInButton invisible handleSignIn={handleSignIn} />
          ) : (
            <li className="nav-bar-email" onClick={handleToggleMenuDesktop}>
              {user.email}
            </li>
          )}

          {isHome && (
            <li className="nav-bar-cart">
              <img
                src={isCarEmpty == 0 ? shoppingCartIcon : shoppingCartFilled}
                alt="Cart notification"
                id="nav-bar-cart-icon"
                onClick={handleOpenCart}
              />
            </li>
          )}
        </ul>
      </div>
      {toggleMenuDesktop ? (
        <DesktopMenu
          toggleMenuDesktop={toggleMenuDesktop}
          setToggleMenuDesktop={setToggleMenuDesktop}
        />
      ) : null}
    </nav>
  );
}

export { NavBar };
