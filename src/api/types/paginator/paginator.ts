export type TPaginator<T> = {
  PageIndex: number;
  PageSize: number;
  Items: T[];
  SortExpression: string;
  SortDirection: 'ASC' | 'DESC';
}