import { FilterCategory } from "../components/FilterCategory";
import "../styles/MobileMenu.scss";
import MyOrdersLink from "../components/MyOrdersLink";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SignInButton from "../components/SignInButton";
import { Link } from "react-router-dom";
function MobileMenu({ isHome, toggleMenuMobile, setToggleMenuMobile }) {
  const { setIsLogged, user, setUser, setOrders, orders } =
    useContext(AppContext);
  const handleSignIn = () => {
    const stringifiedLogIn = JSON.stringify(true);
    localStorage.setItem("isLogged", stringifiedLogIn);
    setIsLogged(true);
  };
  const { isLogged } = useContext(AppContext);
  const handleLogOut = () => {
    const stringifiedNoUser = JSON.stringify({});
    localStorage.setItem("user", stringifiedNoUser);
    const stringifiedLogOut = JSON.stringify(false);
    localStorage.setItem("isLogged", stringifiedLogOut);
    const stringifiedNoOrders = JSON.stringify([]);
    localStorage.setItem("orders", stringifiedNoOrders);
    setIsLogged(false);
    setUser({});
    setOrders([]);
    setToggleMenuMobile(!toggleMenuMobile);
  };
  console.log("User orders: ", orders);
  return (
    <div className="MobileMenu ">
      {isHome && (
        <div className="MobileMenuList">
          <ul className="Categories">
            <li>
              <a> CATEGORIES </a>
            </li>
            <FilterCategory categoryName="All" categoryID={0} />
            <FilterCategory categoryName="Clothes" categoryID={1} />
            <FilterCategory categoryName="Electronics" categoryID={2} />
            <FilterCategory categoryName="Furniture" categoryID={3} />
            <FilterCategory categoryName="Toys" categoryID={4} />
            <FilterCategory categoryName="Others" categoryID={5} />
          </ul>
        </div>
      )}
      <div className="other-info-list">
        <ul className="primary-list">
          <MyOrdersLink>
            <li className="categories-item" id="my-orders-link">
              My orders
            </li>
          </MyOrdersLink>
          <li className="categories-item">
            <Link to="/my-account"> My account </Link>
          </li>
        </ul>
      </div>
      <div className="my-info">
        <ul className="primary-list">
          {!isLogged ? (
            <>
              <SignInButton handleSignIn={handleSignIn} />
            </>
          ) : (
            <>
              <li className="categories-item">
                <p> {user.email} </p>
              </li>
              <li className="categories-item">
                <Link to="/" id="sign-out" onClick={handleLogOut}>
                  {" "}
                  Sign out{" "}
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export { MobileMenu };
