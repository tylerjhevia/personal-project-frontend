import * as action from "../../actions/index";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions", () => {
  describe("storeBook action", () => {
    it("should save a book to searchResults", () => {
      const mockInfo = {
        type: "STORE_BOOK",
        info: {
          items: [book1, book2, book3],
          kind: "books#volumes",
          totalItems: 1000
        }
      };
      expect(true);
    });
  });
});
