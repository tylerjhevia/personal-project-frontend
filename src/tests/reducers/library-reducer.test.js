import libraryReducer from "../../reducers/library-reducer";
import * as actions from "../../actions";

describe("library reducer", () => {
  it("should return initial state", () => {
    const initialState = [];
    const mockAction = {};

    expect(libraryReducer(initialState, mockAction)).toEqual(initialState);
  });

  it("should handle 'ADD_BOOK' type", () => {
    const state = ["book 1", "book 2"];
    const info = "book 3";
    const mockAction = { type: "ADD_BOOK", info };
    const expectedState = ["book 1", "book 2", "book 3"];

    expect(libraryReducer(state, mockAction)).toEqual(expectedState);
  });

  it("should handle 'GET_LIBRARY' type", () => {
    const state = [];
    const info = ["book1", "book2", "book3"];
    const mockAction = { type: "GET_LIBRARY", info };

    expect(libraryReducer(state, mockAction)).toEqual(info);
  });
});
