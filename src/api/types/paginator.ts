export type TPaginator<T> = {
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  items: T[];
};
