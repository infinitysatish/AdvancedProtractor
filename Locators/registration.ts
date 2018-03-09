import { IdentificationType } from "../Pages/EIdentificationType";

export const regLocator ={
    Url : "login/register",
    RegistrationTab: {
        type: IdentificationType[IdentificationType.CSS],
        value: '[routerlink="/login/register"]'
      },
    Username: {
        type: IdentificationType[IdentificationType.ID],
        value: "username"
      },
    Email: {
        type: IdentificationType[IdentificationType.ID],
        value: "email"
      },
    Password: {
        type: IdentificationType[IdentificationType.ID],
        value: "password"
      },
    CustomerName: {
        type: IdentificationType[IdentificationType.ID],
        value: "customer_name"
      },
    PhoneNumber: {
        type: IdentificationType[IdentificationType.ID],
        value: "phone_number"
      },
    RegistrationBtn: {
        type: IdentificationType[IdentificationType.CSS],
        value: ".registerBtn"
      },
}