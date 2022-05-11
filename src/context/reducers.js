import { ACTIONS } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.dataCart:
      return {
        ...state,
        dataCart: action.payload,
      };

    case ACTIONS.dataAllCustomer:
      return {
        ...state,
        dataAllCustomer: action.payload,
      };

    case ACTIONS.dataAllProductAdmin:
      return {
        ...state,
        dataAllProductAdmin: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
