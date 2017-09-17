import { storeUser } from "../actions/index";
import { Action, FetchedData, User } from "../utils/interfaces";

interface State {
  name: string;
  email: string;
  password: string;
  id: number;
  created_at: string;
  updated_at: string;
}

const user = (
  state: User = {
    username: null,
    email: null,
    password: null,
    id: null,
    created_at: null
  },
  action: Action
) => {
  switch (action.type) {
    case "STORE_USER":
      return action.info;
    default:
      return state;
  }
};

export default user;
