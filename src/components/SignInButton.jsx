import { Link } from "react-router-dom";
import "../styles/SignInButton.scss";
const SingInButton = ({ invisible, handleSignIn }) => {
  return (
    <Link
      to={"/login"}
      onClick={handleSignIn}
      className={invisible ? `mobile-invisible` : ``}
    >
      <button
        type="text"
        style={{
          cursor: "pointer",
          color: "var(--hospital-green)",
          backgroundColor: "var(--white)",
          border: "none",
          height: "3rem",
          width: "100%",
          textAlign: "start",
        }}
      >
        {" "}
        Sign in{" "}
      </button>
    </Link>
  );
};

export default SingInButton;
