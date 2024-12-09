import { useEffect, useState } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { CSChevronLeftNavigational, CSChevronRightNavigational } from '~/components/iconography/Navigational';

import { renderPagination } from '~/helpers/utils';

const PaginationCustom = ({
  indexPage,
  maxPage,
  isLoading,
  handlePaginationNext,
}) => {
  const [paginationNumberControl, setPaginationNumberControl] = useState([]);

  useEffect(() => {
    const tmpStatePaginationNumberControl = renderPagination(
      indexPage,
      maxPage,
    );
    setPaginationNumberControl([...tmpStatePaginationNumberControl]);
  }, [indexPage, maxPage]);

  return (
    <div className="text-center">
      <Pagination
        className="d-inline-block"
        size="sm"
        listClassName="justify-content-center"
        aria-label="Page navigation example"
      >
        <PaginationItem
          className={indexPage === 1 || isLoading ? 'disabled' : ''}
        >
          <PaginationLink
            className="prev"
            onClick={() => handlePaginationNext(indexPage - 1)}
            disabled={indexPage === 1}
            style={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}
          >
            <CSChevronLeftNavigational />
          </PaginationLink>
        </PaginationItem>
        {!isLoading
          && paginationNumberControl?.map((numPage, index) => numPage === '...' ? (
            <PaginationItem
              key={index}
              className="d-flex align-items-center justify-content-center"
            >
              {numPage}
            </PaginationItem>
          ) : (
            <PaginationItem key={index} active={numPage === indexPage}>
              <PaginationLink onClick={() => handlePaginationNext(numPage)}>
                {numPage}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem
          className={indexPage === maxPage || isLoading ? 'disabled' : ''}
        >
          <PaginationLink
            className="next"
            onClick={() => handlePaginationNext(indexPage + 1)}
            disabled={indexPage === maxPage}
            style={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}
          >
            <CSChevronRightNavigational />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default PaginationCustom;
