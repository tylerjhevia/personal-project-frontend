import { errorMessage } from "../actions/index";

type ErrorMessage = string;

interface ErrorAction {
  type: string;
  message: string;
}

const error = (state: ErrorMessage = null, action: ErrorAction) => {
  switch (action.type) {
    case "USERNAME_TAKEN":
      return action.message;
    default:
      return state;
  }
};

export default error;
