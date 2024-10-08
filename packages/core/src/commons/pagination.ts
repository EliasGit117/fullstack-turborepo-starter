export class Pagination {
  totalItems?: number;
  itemsPerPage?: number;
  currentPage: number;
  totalPages?: number;
}

export class PaginatedResponseDto<T> {
  items: T[];
  pagination?: Pagination;
}
