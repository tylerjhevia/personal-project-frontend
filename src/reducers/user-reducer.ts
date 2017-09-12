import { register, storeUser } from "../actions/index";
import { Action, FetchedData } from "../utils/interfaces";

const initialState = {
  name: "",
  email: "",
  password: ""
};

const user = (state: object = initialState, action: Action) => {
  switch (action.type) {
    case "REGISTER":
      return action.info;
    case "STORE_USER":
      return action.info;
    default:
      return initialState;
  }
};

export default user;
