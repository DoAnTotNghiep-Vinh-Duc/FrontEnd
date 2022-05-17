import { ACTIONS } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.dataCart:
      return {
        ...state,
        dataCart: action.payload,
      };

    case ACTIONS.dataFavorite:
      return {
        ...state,
        dataFavorite: action.payload,
      };

    case ACTIONS.dataAllCustomerAdmin:
      return {
        ...state,
        dataAllCustomerAdmin: action.payload,
      };

    case ACTIONS.dataAllProductAdmin:
      return {
        ...state,
        dataAllProductAdmin: action.payload,
      };

    case ACTIONS.emailForgotPassword:
      return {
        ...state,
        emailForgotPassword: action.payload,
      };

    case ACTIONS.dataProductForRate:
      return {
        ...state,
        dataProductForRate: action.payload,
      };

    case ACTIONS.loadingPage:
      return {
        ...state,
        loadingPage: action.payload,
      };

    case ACTIONS.dataAllDiscountAdmin:
      return {
        ...state,
        dataAllDiscountAdmin: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
