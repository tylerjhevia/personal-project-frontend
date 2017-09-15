import { storeUser } from "../actions/index";
import { Action, FetchedData } from "../utils/interfaces";

interface State {
  name: string;
  email: string;
  password: string;
  id: number;
  created_at: string;
  updated_at: string;
}

const initialState = {
  name: null,
  email: null,
  password: null,
  id: null,
  created_at: null
};

const user = (state: object = initialState, action: Action) => {
  switch (action.type) {
    case "STORE_USER":
      return action.info;
    default:
      return initialState;
  }
};

export default user;
