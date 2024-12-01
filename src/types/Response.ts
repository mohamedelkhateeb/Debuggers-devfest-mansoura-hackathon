export type Response<T> = {
  Success: boolean;
  StatusCode: number;
  Message: string;
  Data: T;
};

export interface Data<T> {
  TotalCount: number;
  PageNumber: number;
  PageSize: number;
  TotalPages: number;
  HasPreviousPage: boolean;
  HasNextPage: boolean;
  Data: T[];
}
