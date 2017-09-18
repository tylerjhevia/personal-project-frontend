import React from "react";
import BookCard from "../../Components/BookCard";
import { shallow, render, mount } from "enzyme";

describe("BookCard component", () => {
  const mockFn = jest.fn();
  const mockBook = {
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

  const mockUser = {
    id: 1000,
    username: "user",
    email: "user@internet.com",
    password: "books",
    created_at: "date"
  };

  let wrapper = shallow(
    <BookCard
      deleteFromLibrary={mockFn}
      book={mockBook}
      user={mockUser}
      fetchUserLibrary={mockFn}
      inLibrary={false}
      book_id={"afee3325i"}
      recommendBook={mockFn}
    />
  );

  it("should render a div with a class of 'book-card-container'", () => {
    expect(wrapper.find("div.book-card-container").length).toEqual(1);
  });

  it("should render a div with a class of 'book-card'", () => {
    expect(wrapper.find("div.book-card").length).toEqual(1);
  });

  it("should render an img with a class of 'book-image'", () => {
    expect(wrapper.find("img.book-image").length).toEqual(1);
  });

  it("should render a div with a class of 'book-title", () => {
    expect(wrapper.find("div.book-details").length).toEqual(1);
  });

  it("should render an h4 with a class of 'book-title", () => {
    expect(wrapper.find("h4.book-title").length).toEqual(1);
  });

  it("should render an h5 with a class of 'book-author", () => {
    expect(wrapper.find("h5.book-author").length).toEqual(1);
  });

  it("should render a p tag with a class of 'book-description", () => {
    expect(wrapper.find("p.book-description").length).toEqual(1);
  });

  it("should render a button tag with a class of 'recommend-button", () => {
    expect(wrapper.find("button.recommend-button").length).toEqual(1);
  });
});
