import { storeUser } from "../actions/index";
import { Action, FetchedData, User } from "../utils/interfaces";

interface State {
  username: string;
  email: string;
  password: string;
  id: number;
  created_at: string;
}

const initialState: User = {
  username: null,
  email: null,
  password: null,
  id: null,
  created_at: null
};

const user = (state: User = initialState, action: Action) => {
  switch (action.type) {
    case "STORE_USER":
      return action.info;
    default:
      return state;
  }
};

export default user;
