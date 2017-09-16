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

export interface User {
  username: string;
  email: string;
  password: string;
  id: number;
  created_at: string;
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
