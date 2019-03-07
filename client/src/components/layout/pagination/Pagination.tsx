import React from 'react';
import './Pagination.css';
import { PaginationProps } from './index';
import NavigationButton from './navigation-button/Navigation-Button';
import PageInput from './page-input/Page-Input';

const Pagination = ({
  currentPage,
  totalItemsLength,
  maxPerPage,
  onPageChange
}: PaginationProps) => {
  if (!totalItemsLength) {
    return null;
  }

  const totalPagesNumber = Math.ceil(totalItemsLength / maxPerPage);
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPagesNumber - 1;

  const gotToNext = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const gotToPrev = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const goToFirst = () => {
    if (!isFirstPage) {
      onPageChange(0);
    }
  };

  const goToLast = () => {
    if (!isLastPage) {
      onPageChange(totalPagesNumber - 1);
    }
  };

  return (
    <div className="pagination">
      <NavigationButton disabled={isFirstPage} onNavigate={goToFirst}>
        &laquo;&laquo;
      </NavigationButton>
      <NavigationButton disabled={isFirstPage} onNavigate={gotToPrev}>
        &laquo;
      </NavigationButton>
      <NavigationButton>
        <PageInput page={currentPage} applyPageChange={onPageChange} />
        <span className="total-items-count"> of {totalPagesNumber}</span>
      </NavigationButton>
      <NavigationButton disabled={isLastPage} onNavigate={gotToNext}>
        &raquo;
      </NavigationButton>
      <NavigationButton disabled={isLastPage} onNavigate={goToLast}>
        &raquo;&raquo;
      </NavigationButton>
    </div>
  );
};

export default Pagination;
