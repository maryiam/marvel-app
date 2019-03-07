import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import Pagination from './Pagination';
import NavigationButton from './navigation-button/Navigation-Button';
import PageInput from './page-input/Page-Input';

const totalItemsLength = 20;
const maxPerPage = 3;
const currentIndex = 3;

const totalPages = (total: number, perPage: number) =>
  Math.ceil(total / perPage);

const simulateClickOnLink = (link: ShallowWrapper) =>
  link
    .dive()
    .find('a.link')
    .simulate('click');

describe('<Pagination /> UI Component', () => {
  describe('basic behaviour', () => {
    let PaginationComp: ShallowWrapper;

    beforeEach(
      () =>
        (PaginationComp = shallow(
          <Pagination
            currentPage={currentIndex}
            totalItemsLength={totalItemsLength}
            maxPerPage={maxPerPage}
            onPageChange={() => {}}
          />
        ))
    );

    it('should be rendered with 5 children', () => {
      const paginationDiv = PaginationComp.find('div.pagination');

      expect(paginationDiv).toBeTruthy();
      expect(paginationDiv.children().length).toBe(5);
    });

    it('should be display the total pages numbers', () => {
      expect(PaginationComp.find('span.total-items-count').text()).toBe(
        ` of ${totalPages(totalItemsLength, maxPerPage)}`
      );
    });
  });

  describe('empty pagination behaviour', () => {
    it('should return null when totalItem equals to 0', () => {
      const PaginationComp = shallow(
        <Pagination
          currentPage={currentIndex}
          totalItemsLength={0}
          maxPerPage={maxPerPage}
          onPageChange={() => {}}
        />
      );

      expect(PaginationComp.type()).toBe(null);
    });
  });

  describe('prop onPageChange call', () => {
    describe('navigation logic', () => {
      let _applyChange: jest.Mock;
      let navigationLinks: ShallowWrapper;

      beforeEach(() => {
        _applyChange = jest.fn();
        navigationLinks = shallow(
          <Pagination
            currentPage={currentIndex}
            totalItemsLength={totalItemsLength}
            maxPerPage={maxPerPage}
            onPageChange={_applyChange}
          />
        ).find(NavigationButton);
      });

      afterEach(() => {
        _applyChange.mockClear();
      });

      it('should go to page index 0', () => {
        simulateClickOnLink(navigationLinks.first());
        expect(_applyChange).toBeCalled();
        expect(_applyChange).toBeCalledWith(0);
      });

      it('should go to last page', () => {
        const lastPageIndex = totalPages(totalItemsLength, maxPerPage) - 1;

        simulateClickOnLink(navigationLinks.last());
        expect(_applyChange).toBeCalled();
        expect(_applyChange).toBeCalledWith(lastPageIndex);
      });

      it('should go to previous page', () => {
        simulateClickOnLink(navigationLinks.at(1));
        expect(_applyChange).toBeCalled();
        expect(_applyChange).toBeCalledWith(currentIndex - 1);
      });

      it('should go to next page', () => {
        simulateClickOnLink(navigationLinks.at(3));
        expect(_applyChange).toBeCalled();
        expect(_applyChange).toBeCalledWith(currentIndex + 1);
      });

      it('should go to entered input page', () => {
        const inputValue = '10';

        navigationLinks
          .at(2)
          .find(PageInput)
          .dive()
          .find('input')
          .simulate('change', { target: { value: inputValue } })
          .simulate('keypress', { key: 'Enter' });

        expect(_applyChange).toBeCalled();
        expect(_applyChange).toBeCalledWith(parseInt(inputValue, 10) - 1);
      });
    });

    describe('navigation special cases behaviour', () => {
      describe('first page prevent navigation if the current page the first page', () => {
        let _applyChange: jest.Mock;
        let links: ShallowWrapper;

        beforeEach(() => {
          _applyChange = jest.fn();
          links = shallow(
            <Pagination
              currentPage={0}
              totalItemsLength={totalItemsLength}
              maxPerPage={maxPerPage}
              onPageChange={_applyChange}
            />
          ).find(NavigationButton);
        });

        afterEach(() => _applyChange.mockClear());

        it('should not invoke call when first page button clicked', () => {
          simulateClickOnLink(links.first());

          expect(_applyChange).not.toBeCalled();
        });

        it('should not invoke call when previous page button clicked', () => {
          simulateClickOnLink(links.at(1));
          expect(_applyChange).not.toBeCalled();
        });
      });

      describe('last page prevent navigation', () => {
        let _applyChange: jest.Mock;
        let links: ShallowWrapper;

        beforeEach(() => {
          _applyChange = jest.fn();
          links = shallow(
            <Pagination
              currentPage={totalPages(totalItemsLength, maxPerPage) - 1}
              totalItemsLength={totalItemsLength}
              maxPerPage={maxPerPage}
              onPageChange={_applyChange}
            />
          ).find(NavigationButton);
        });

        afterEach(() => _applyChange.mockClear());

        it('should not invoke call when last page button clicked', () => {
          simulateClickOnLink(links.last());
          expect(_applyChange).not.toBeCalled();
        });

        it('should not invoke call when next page button clicked', () => {
          simulateClickOnLink(links.at(3));
          expect(_applyChange).not.toBeCalled();
        });
      });
    });
  });
});
