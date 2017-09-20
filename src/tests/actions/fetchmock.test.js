import * as action from "../../actions/index";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockBookData from "./MockBookData";
import MockFavorites from "./MockFavorites";

describe("fetch actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it.only("should fetch users array", () => {
    const fetchedUserData = [
      {
        created_at: "2017-09-20T03:51:03.729Z",
        email: "ok",
        id: 187,
        password: "ok",
        updated_at: "2017-09-20T03:51:03.729Z",
        username: "ok"
      },
      {
        created_at: "2017-09-20T15:19:35.794Z",
        email: "nice",
        id: 188,
        password: "nice",
        updated_at: "2017-09-20T15:19:35.794Z",
        username: "nice"
      }
    ];

    fetchMock.get("http://localhost:3000/api/v1/users", {
      status: 200,
      body: fetchedUserData
    });

    expect(fetchMock.routes[0].name).toEqual(
      "http://localhost:3000/api/v1/users"
    );
    expect(fetchMock.routes[0].method).toEqual("GET");
    expect(fetchMock.routes[0].response.body).toEqual(fetchedUserData);
    expect(fetchMock._matchedCalls.length).toEqual(0);
  });

  it.only("should get user info on login", () => {
    const mockLogin = { username: "ok", password: "ok" };
    const expectedResponse = {
      id: 192,
      username: "ok",
      email: "ok@neat.com",
      password: "ok",
      created_at: "2017-09-20T17:57:08.134Z",
      updated_at: "2017-09-20T17:57:08.134Z"
    };

    action.fetchUserFromDB("ok", "ok");

    fetchMock.post("http://localhost:3000/api/v1/users", {
      method: "POST",
      body: expectedResponse
    });

    expect(fetchMock.routes[0].method).toEqual("POST");
    expect(fetchMock.routes[0].response.body).toEqual(expectedResponse);
    expect(fetchMock._matchedCalls.length).toEqual(0);
  });

  it.only("should fetch book data", () => {
    fetchMock.get("https://www.googleapis.com/books/v1/volumes?q=$books", {
      status: 200,
      method: "GET",
      body: MockBookData
    });

    expect(fetchMock.routes[0].method).toEqual("GET");
    expect(fetchMock.routes[0].response.body).toEqual(MockBookData);
    expect(fetchMock._matchedCalls.length).toEqual(0);
  });

  it.only("should fetch a user's favorites", () => {
    const mockUser = {
      id: 191,
      username: "tyler",
      email: "tylerhevia@gmail.com",
      password: "forgot",
      created_at: "2017-09-20T17:52:52.984Z",
      updated_at: "2017-09-20T17:52:52.984Z"
    };

    action.fetchUserLibrary(mockUser.id);

    fetchMock.post("http://localhost:3000/api/v1/favorites", {
      method: "POST",
      body: MockFavorites,
      status: 200
    });

    expect(fetchMock.routes[0].method).toEqual("POST");
    expect(fetchMock.routes[0].response.body).toEqual(MockFavorites);
    expect(fetchMock._matchedCalls.length).toEqual(0);
  });

  it.only("should add a favorite", () => {
    const mockFavorite = {
      id: 288,
      volumeInfo: {
        title: "Cool",
        subtitle: "The Signs and Meanings of Adolescence",
        authors: ["Marcel Danesi"],
        publisher: "University of Toronto Press",
        publishedDate: "1994",
        description:
          "Danesi studies the culture, its symbols, myths, and problems of teenage culture as both a serious academic and a parent needing to understand.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0802074839"
          },
          {
            type: "ISBN_13",
            identifier: "9780802074836"
          }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 168,
        printType: "BOOK",
        categories: ["Family & Relationships"],
        maturityRating: "MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.0.0.preview.1",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=7tKu927c6c4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=7tKu927c6c4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=7tKu927c6c4C&printsec=frontcover&dq=cool&hl=&cd=2&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=7tKu927c6c4C&dq=cool&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Cool.html?hl=&id=7tKu927c6c4C"
      },
      book_id: "7tKu927c6c4C",
      user_id: 191,
      created_at: "2017-09-20T17:53:03.059Z",
      updated_at: "2017-09-20T17:53:03.059Z"
    };

    const expectedResponse = { user_id: 192 };

    fetchMock.post("http://localhost:3000/api/v1/favorites/new", {
      method: "POST",
      body: expectedResponse,
      status: 201
    });

    expect(fetchMock.routes[0].method).toEqual("POST");
    expect(fetchMock.routes[0].response.body).toEqual(expectedResponse);
    expect(fetchMock._matchedCalls.length).toEqual(0);
  });

  it.only("should remove a favorite", () => {
    const mockFavorite = {
      id: 288,
      volumeInfo: {
        title: "Cool",
        subtitle: "The Signs and Meanings of Adolescence",
        authors: ["Marcel Danesi"],
        publisher: "University of Toronto Press",
        publishedDate: "1994",
        description:
          "Danesi studies the culture, its symbols, myths, and problems of teenage culture as both a serious academic and a parent needing to understand.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0802074839"
          },
          {
            type: "ISBN_13",
            identifier: "9780802074836"
          }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 168,
        printType: "BOOK",
        categories: ["Family & Relationships"],
        maturityRating: "MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.0.0.preview.1",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=7tKu927c6c4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=7tKu927c6c4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=7tKu927c6c4C&printsec=frontcover&dq=cool&hl=&cd=2&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=7tKu927c6c4C&dq=cool&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Cool.html?hl=&id=7tKu927c6c4C"
      },
      book_id: "7tKu927c6c4C",
      user_id: 191,
      created_at: "2017-09-20T17:53:03.059Z",
      updated_at: "2017-09-20T17:53:03.059Z"
    };

    const expectedResponse = 191;

    action.deleteFromLibrary(191, 288);

    fetchMock.delete("http://localhost:3000/api/v1/favorites/delete", {
      method: "DELETE",
      body: expectedResponse,
      status: 200
    });

    expect(fetchMock.routes[0].method).toEqual("DELETE");
    expect(fetchMock.routes[0].response.body).toEqual(expectedResponse);
    expect(fetchMock._matchedCalls.length).toEqual(0);
  });
});
