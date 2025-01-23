import "../styles/RecoveryPwd.scss";
import emailIcon from "../assets/images/email.svg";

import { PrimaryButton } from "../components/PrimaryButton";
import { ShopLogo } from "../components/ShopLogo";

function RecoveryPwd() {
  return (
    <div className="login">
      <div className="form-container">
        <ShopLogo />
        <h1 className="title"> Email has been sent!</h1>
        <p className="subtitle">
          {" "}
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-icon-container">
          <img src={emailIcon} alt="logo" className="email-icon" />
        </div>
        <PrimaryButton text="Login" />
        <p className="resend-email">
          <span> Didn't receive the email? </span>
          <a href="*">Resend</a>
        </p>
      </div>
    </div>
  );
}

export { RecoveryPwd };
