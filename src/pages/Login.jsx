import { useContext, useRef, useState } from "react";
import "../styles/Login.scss";
import { SecondaryButton } from "../components/SecondaryButton";
import { ShopLogo } from "../components/ShopLogo";
import { Link, Router, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

function Login() {
  const form = useRef(null);
  const router = useNavigate();
  const { setUser, setIsLogged } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    setUser(data);
    const stringifiedLogIn = JSON.stringify(true);
    localStorage.setItem("isLogged", stringifiedLogIn);
    setIsLogged(true);
    const stringifiedUser = JSON.stringify(data);
    localStorage.setItem("user", stringifiedUser);
    router("/");
  };
  const [modalVisibility, setModalVisibility] = useState(true);

  const handleClose = () => {
    setModalVisibility(false);
  };
  return (
    <div className="Login">
      <Dialog
        open={modalVisibility}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Login form information"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The following credentials that you are about to enter, do not need
            to be real credentials, this is just a simulation of a real
            environment of an e-commerce
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>I understand</Button>
        </DialogActions>
      </Dialog>
      <div className="Login-container">
        <ShopLogo />
        <form onSubmit={handleSubmit} className="login-form" ref={form}>
          <label htmlFor="email" className="email">
            {" "}
            Email address{" "}
          </label>
          <input
            type="email"
            name="email"
            placeholder="someone@example.com"
            className="input input-email"
            required
          />
          <label htmlFor="password" className="password">
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
            required
          />
          <input
            type="submit"
            className="primary-button logIn-button"
            value="Log in"
          />
          <a href="/recovery-password" className="forgot-password">
            Forgot my password
          </a>
        </form>
        <Link to="/sign-up">
          <SecondaryButton text="Sign up" />
        </Link>
      </div>
    </div>
  );
}

export { Login };
