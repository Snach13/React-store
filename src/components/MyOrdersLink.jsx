import { Link } from "react-router-dom";
import '../styles/MyOrdersLink.scss'
const MyOrdersLink = ({children}) => {
    return (
        <Link className="link-style" to="/my-orders"> 
            {children}
        </Link>
    );
}

export default MyOrdersLink;