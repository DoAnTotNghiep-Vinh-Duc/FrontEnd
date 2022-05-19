import { createContext, useReducer } from "react";
import reducers from "./reducers";
export const GlobalContext = createContext();

export const DataProvider = ({ children }) => {
  const initalState = {
    dataCart: [],
    dataFavorite: [],
    dataListProduct: [],
    dataAllCustomerAdmin: [],
    dataAllProductAdmin: [],
    emailForgotPassword: "",
    dataProductForRate: [],
    dataAllDiscountAdmin: [],
    changeColor: false,
  };

  const [state, dispatch] = useReducer(reducers, initalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
