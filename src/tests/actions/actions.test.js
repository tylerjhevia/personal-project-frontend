import * as action from "../../actions/index";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions", () => {
  describe("storeBook action", () => {
    it("should save a book to searchResults", () => {
      const mockBookInfo = {
        items: ["book1", "book2", "book3"],
        kind: "books#volumes",
        totalItems: 1000
      };

      const expectedAction = {
        type: "STORE_BOOK",
        info: {
          items: ["book1", "book2", "book3"],
          kind: "books#volumes",
          totalItems: 1000
        }
      };
      expect(action.storeBook(mockBookInfo)).toEqual(expectedAction);
    });
  });

  describe("storeUser action", () => {
    it("should store current user", () => {
      const mockUserInfo = {
        created_at: "2017-09-15T16:38:11.096Z",
        email: "tyler",
        id: 120,
        password: "tyler",
        updated_at: "2017-09-15T16:38:11.096Z",
        username: "tyler"
      };

      const expectedAction = {
        type: "STORE_USER",
        info: {
          created_at: "2017-09-15T16:38:11.096Z",
          email: "tyler",
          id: 120,
          password: "tyler",
          updated_at: "2017-09-15T16:38:11.096Z",
          username: "tyler"
        }
      };

      expect(action.storeUser(mockUserInfo)).toEqual(expectedAction);
    });

    describe("storeUserLibrary action", () => {
      it("should store user's library", () => {
        const mockLibraryInfo = ["book1", "book2", "book3", "book4", "book5"];
        const expectedAction = {
          type: "GET_LIBRARY",
          info: ["book1", "book2", "book3", "book4", "book5"]
        };
        expect(action.storeUserLibrary(mockLibraryInfo)).toEqual(
          expectedAction
        );
      });
    });
  });
});
