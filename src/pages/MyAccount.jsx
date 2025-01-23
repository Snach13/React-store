import "../styles/MyAccount.scss";
import { useReducer, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavBar } from "../components/NavBar";
import editAccountReducer from "../utils/editAccountReducer";
function MyAccount() {
  const { user, setUser } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [editedUser, dispatch] = useReducer(editAccountReducer, user);
  const handleSubmit = (e) => {
    console.log(editStatus);
    e.preventDefault();
    if (editStatus) {
      setUser(editedUser);
      const stringifiedEditedUser = JSON.stringify(editedUser);
      localStorage.setItem("user", stringifiedEditedUser);
    }
    setEditStatus(!editStatus);
  };

  return (
    <>
      <NavBar />
      <div className="login">
        <div className="form-container">
          <h1 className="title"> My account</h1>
          <form onSubmit={handleSubmit} className="new-password-form">
            <div className="text-field">
              <label htmlFor="name" className="name">
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name here"
                className="input input-name"
                value={editedUser.name ? editedUser.name : ""}
                disabled={editStatus ? false : true}
                onChange={(e) =>
                  dispatch({
                    type: "NAME_CHANGED",
                    editedName: e.target.value,
                  })
                }
              />
              <label htmlFor="email" className="email">
                {" "}
                Email address{" "}
              </label>
              <input
                type="email"
                id="email"
                placeholder="someone@example.com"
                className="input input-email"
                value={editedUser.email}
                disabled={editStatus ? false : true}
                onChange={(e) =>
                  dispatch({
                    type: "EMAIL_CHANGED",
                    editedEmail: e.target.value,
                  })
                }
                required
              />
              <label htmlFor="password" className="password">
                {" "}
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="*********"
                className="input input-password"
                value={editedUser.password}
                disabled={editStatus ? false : true}
                onChange={(e) =>
                  dispatch({
                    type: "PASSWORD_CHANGED",
                    editedPwd: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="submit"
              className="primary-button edit-button"
              value={editStatus ? "Save changes" : "Edit"}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
