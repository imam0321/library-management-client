export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface IBookMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface IBookResponse {
  data: IBook[];
  meta: IBookMeta;
}
