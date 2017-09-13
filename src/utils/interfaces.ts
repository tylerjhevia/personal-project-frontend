export interface Action {
  type: string;
  info: object;
}

export interface StoreBookAction extends Action {
  info: {
    items: Array<BookObject>;
  };
}

export interface Info {
  name: string;
  email: string;
  password: string;
}

export interface Store {
  user: User;
  searchResults: Array<BookObject>;
  library: Array<BookObject>;
}

export interface LoginProps {
  user: User;
  login: Function;
}

export interface LoginState {
  username: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface RegistrationState {
  username: string;
  email: string;
  password: string;
}

export interface RegistrationProps {
  register: Function;
  user: Info;
}

export interface SearchProps {
  searchResults: Array<BookObject>;
  getBookData: Function;
}

export interface SearchState {
  searchText: string;
}

export interface SearchResultsProps {
  searchResults: Array<BookObject>;
}

export interface BookObject {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: object;
  accessInfo: object;
  searchInfo: object;
}

export interface VolumeInfo {
  imageLinks: ImageLinks;
  authors: Array<string>;
  title: string;
  description: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface State {
  user: object;
  searchResults: Array<BookObject>;
}

export interface FetchedData {
  whatever: object;
}

export interface LibraryProps {
  library: Array<BookObject>;
}

export interface BookCardProps {
  addToLibrary: Function;
  book: BookObject;
}
