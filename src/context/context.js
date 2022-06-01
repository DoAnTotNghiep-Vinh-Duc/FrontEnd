import { createContext, useReducer } from "react";
import reducers from "./reducers";
export const GlobalContext = createContext();

export const DataProvider = ({ children }) => {
  const initalState = {
    dataCart: [],
    dataFavorite: [],
    dataListProduct: [],
    emailForgotPassword: "",
    dataProductForRate: [],
    dataMessage: [],
    dataProductRated: [],

    dataAllCustomerAdmin: [],
    dataAllProductAdmin: [],
    dataAllDiscountAdmin: [],
    dataAllChatAdmin: [],
    dataAllMessageOfChatAdmin: [],
    dataAllShipperAdmin: [],

    changeColor: false,
  };

  const [state, dispatch] = useReducer(reducers, initalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
