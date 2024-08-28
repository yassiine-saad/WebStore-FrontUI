export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password?: string;
    telephone: string;
    address: string;
    role?: string | null;
}





export interface Customers {
    content: Customer[];
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  }