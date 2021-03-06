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

    case ACTIONS.dataAllDiscountAdmin:
      return {
        ...state,
        dataAllDiscountAdmin: action.payload,
      };

    case ACTIONS.dataListProduct:
      return {
        ...state,
        dataListProduct: action.payload,
      };

    case ACTIONS.changeColor:
      return {
        ...state,
        changeColor: action.payload,
      };

    case ACTIONS.dataMessage:
      return {
        ...state,
        dataMessage: action.payload,
      };

    case ACTIONS.dataAllChatAdmin:
      return {
        ...state,
        dataAllChatAdmin: action.payload,
      };

    case ACTIONS.dataAllMessageOfChatAdmin:
      return {
        ...state,
        dataAllMessageOfChatAdmin: action.payload,
      };

    case ACTIONS.dataProductRated:
      return {
        ...state,
        dataProductRated: action.payload,
      };

    case ACTIONS.dataAllShipperAdmin:
      return {
        ...state,
        dataAllShipperAdmin: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
