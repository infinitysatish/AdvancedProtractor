import { IdentificationType } from "../Pages/EIdentificationType";

export const loginLocator = {
    Url : "login",
    LoginTab: {
      type: IdentificationType[IdentificationType.CSS],
      value: ".loginBlock"
    },
    Username: {
      type: IdentificationType[IdentificationType.ID],
      value: "email"
    },
    Password: {
      type: IdentificationType[IdentificationType.ID],
      value: "password"
    },
    LoginBtn: {
      type: IdentificationType[IdentificationType.XPATH],
      value: "//button[@class='loginBtn']"
    },
    ErrorMessage: {
      type: IdentificationType[IdentificationType.CSS],
      value: "div#errorMessage"
    },
  };