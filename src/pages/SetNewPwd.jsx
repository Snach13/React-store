import "../styles/SetNewPwd.scss";
import { ShopLogo } from "../components/ShopLogo";
function SetNewPwd() {
  return (
    <div className="login">
      <div className="form-container">
        <ShopLogo />
        <h1 className="title"> Create a new password!</h1>
        <p className="subtitle"> Enter a new password for your account</p>
        <form action="/" className="new-password-form">
          <label htmlFor="password" className="password">
            {" "}
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <label
            htmlFor="password-confirmation"
            className="password-confirmation"
          >
            {" "}
            Re-enter your password
          </label>
          <input
            type="password"
            id="password-confirmation"
            placeholder="*********"
            className="input input-password-confirmation"
          />
          <input
            type="submit"
            className="primary-button submit-button"
            defaultValue="Confirm"
          />
        </form>
      </div>
    </div>
  );
}

export { SetNewPwd };
