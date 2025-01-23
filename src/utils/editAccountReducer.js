function editAccountReducer(editedUser, action) {
  switch (action.type) {
    case "NAME_CHANGED": {
      return {
        ...editedUser,
        name: action.editedName,
      };
    }
    case "EMAIL_CHANGED": {
      return {
        ...editedUser,
        email: action.editedEmail,
      };
    }
    case "PASSWORD_CHANGED": {
      return {
        ...editedUser,
        password: action.editedPwd,
      };
    }
    default: {
      return {
        ...editedUser,
      };
    }
  }
}

export default editAccountReducer;
