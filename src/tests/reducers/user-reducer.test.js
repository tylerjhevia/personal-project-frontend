import userReducer from "../../reducers/user-reducer";
import * as actions from "../../actions";

describe("userReducer", () => {
  const initialState = {
    username: null,
    email: null,
    password: null,
    id: null,
    created_at: null
  };

  it("should return state by default", () => {
    const mockAction = {};

    expect(userReducer(initialState, mockAction)).toEqual(initialState);
  });

  it("should handle 'STORE_USER' type", () => {
    const info = {
      username: "tyler",
      email: "tyler@tyler.com",
      password: "funky",
      id: 4,
      created_at: "date"
    };
    const mockAction = { type: "STORE_USER", info };
    expect(userReducer(initialState, mockAction)).toEqual(info);
  });

  it("should handle 'LOGOUT' type", () => {
    const initialState = {
      created_at: null,
      email: null,
      id: null,
      password: null,
      username: null
    };
    const mockAction = { type: "STORE_USER" };
    console.log(initialState);
    expect(userReducer(initialState, mockAction)).toEqual(initialState);
  });
});
