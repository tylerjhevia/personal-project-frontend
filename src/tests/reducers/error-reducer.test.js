import errorReducer from "../../reducers/error-reducer";
import * as actions from "../../actions";

describe("error reducer", () => {
  it("should return initial state", () => {
    const initialState = null;
    const mockAction = {};

    expect(errorReducer(initialState, mockAction)).toEqual(initialState);
  });

  it("should handle 'USERNAME_TAKEN' type", () => {
    const initialState = null;
    const message = "whatup";
    const mockAction = { type: "USERNAME_TAKEN", message };

    expect(errorReducer(initialState, mockAction)).toEqual(message);
  });
});
