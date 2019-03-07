export interface PaginationProps {
  currentPage: number;
  totalItemsLength: number | null;
  maxPerPage: number;
  onPageChange: (num) => void;
}
