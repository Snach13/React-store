import "../styles/DesktopMenu.scss";
import MyOrdersLink from "../components/MyOrdersLink";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
function DesktopMenu({ toggleMenuDesktop, setToggleMenuDesktop }) {
  const { setIsLogged, setUser, setOrders } = useContext(AppContext);
  const handleLogOut = () => {
    const stringifiedNoUser = JSON.stringify({});
    localStorage.setItem("user", stringifiedNoUser);
    const stringifiedLogOut = JSON.stringify(false);
    localStorage.setItem("isLogged", stringifiedLogOut);
    const stringifiedNoOrders = JSON.stringify([]);
    localStorage.setItem("orders", stringifiedNoOrders);
    setIsLogged(false);
    setOrders([]);
    setUser({});
    setToggleMenuDesktop(!toggleMenuDesktop);
  };
  return (
    <div className="DesktopMenu">
      <ul className="DesktopMenuList">
        <MyOrdersLink>
          <li>My orders</li>
        </MyOrdersLink>
        <li>
          <Link to="/my-account" className="MyAccount">
            My account
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogOut}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { DesktopMenu };
