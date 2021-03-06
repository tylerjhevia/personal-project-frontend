import { User, VolumeInfo, ImageLinks, BookObject } from "../utils/interfaces";
import { BookCardProps, Event } from "../Components/BookCard";
import { addFavoriteBook } from "./usersAPI";
import { getBookData, storeBook } from "../actions/index";
import { Redirect } from "react-router";
import * as React from "react";

export function handleClick(
  props: BookCardProps,
  e: Event,
  volumeInfo: VolumeInfo
) {
  if (props.inLibrary === true) {
    props.deleteFromLibrary(props.user.id, props.book_id);
    e.currentTarget.classList.toggle("hidden");
  } else {
    addFavoriteBook(props.book_id, volumeInfo, props.user.id);
    e.currentTarget.classList.toggle("selected");
  }
  console.log("finna fetch library");
  return props.fetchUserLibrary(props.user.id);
}

export function recommendBook(bookInfo: VolumeInfo) {
  if (bookInfo.description) {
    const keyphrase = bookInfo.description;
    return getBookData(
      `https://www.googleapis.com/books/v1/volumes?q=${keyphrase}`
    );
  } else if (bookInfo.categories !== undefined) {
    const keyword = bookInfo.categories[0];
    return getBookData(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
    );
  } else {
    return getBookData(
      `https://www.googleapis.com/books/v1/volumes?q=${bookInfo.title}`
    );
  }
}
