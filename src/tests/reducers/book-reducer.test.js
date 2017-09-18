import bookReducer from "../../reducers/book-reducer";
import * as actions from "../../actions";

describe("book reducer", () => {
  it("should return initial state", () => {
    const initialState = [];
    const mockAction = {};
    expect(bookReducer([], mockAction)).toEqual(initialState);
  });

  it("should handle 'STORE_BOOK' type", () => {
    const info = {
      kind: "books#volume",
      id: "afee3325i",
      etag: "afwedsai32",
      volumeInfo: {
        title: "Cool book",
        authors: ["tyler"],
        categories: ["cool stuff"],
        description: "book about cool stuff",
        imageLink: {
          smallThumbnail: "adsfewfdas",
          thumbnail: "aksfdewdsaf"
        }
      }
    };
    const mockAction = { type: "STORE_BOOK", info };

    expect(bookReducer([], mockAction)).toEqual();
  });
});
