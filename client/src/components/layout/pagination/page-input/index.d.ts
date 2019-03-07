export interface PageInputProps {
  page: number;
  applyPageChange: (page: number) => void;
}

export interface PageInputState {
  displayablePage: string;
}
