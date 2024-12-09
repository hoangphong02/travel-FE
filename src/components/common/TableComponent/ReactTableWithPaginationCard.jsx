import classnames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import { usePagination, useSortBy, useTable } from 'react-table';
import { Card, CardBody, Table } from 'reactstrap';

import PaginationCustom from './PaginationCustom';
import { NodataSection } from '.';

const ReactTableWithPaginationCard = ({
  columns,
  data,
  indexPage,
  maxPage,
  handlePaginationNext,
  isLoading,
  // divided = false,
  customClassName,
  onClickRow,
  hiddenColumns,
  limit = 8,
  striped = false,
  showPagination = true,
}) => {
  const {
    getTableProps, getTableBodyProps, prepareRow, headerGroups, rows,
  } = useTable(
    {
      columns,
      data: data || [],
      initialState: hiddenColumns,
    },
    useSortBy,
    usePagination,
  );
  const ClickRow = (row) => {
    if (onClickRow) onClickRow(row?.row?.original);
  };
  return (
    <>
      {data?.length === 0 && maxPage === 1 && !isLoading ? (
        <NodataSection />
      ) : (
        <Card
          className={`mb-4 p-0 ${customClassName}`}
          style={{
            boxShadow: 'none',
          }}
        >
          <CardBody className="p-0">
            <div className="table-scroll-y-custom">
              <Table
                {...getTableProps()}
                className={`r-table table ${classnames({
                  // 'table-divided': divided,
                  'p-0': true,
                })} ${isLoading ? 'is-loading' : ''}`}
                striped={striped}
                hover
              >
                <thead>
                  {headerGroups?.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup?.headers?.map((column, columnIndex) => (
                        <th
                          key={`th_${columnIndex}`}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps(),
                          )}
                          className={[
                            column.cellClass,
                            column.isSorted
                              ? column.isSortedDesc
                                ? 'sorted-desc'
                                : 'sorted-asc'
                              : '',
                          ].join(' ')}
                        >
                          {column.render('Header')}
                          <span />
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                  {isLoading
                    ? [...new Array(8)]?.map((item, indexRow) => (
                      <tr key={indexRow}>
                        {[...new Array(columns?.length)]?.map(
                          (item, indexCol) => (
                            <td key={indexCol}>
                              <Skeleton
                                count={1}
                                width="100%"
                                height="22px"
                                style={{ lineHeight: 'normal' }}
                              />
                            </td>
                          ),
                        )}
                      </tr>
                    ))
                    : rows?.map((row, rowIndex) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row?.cells?.map((cell, cellIndex) => (
                            <td
                              key={`td_${cellIndex}`}
                              onClick={() => ClickRow(cell)}
                              {...cell.getCellProps({
                                className: cell.column.cellClass,
                              })}
                            >
                              {cell.column.Header === '#'
                                ? (rowIndex + 1) + (indexPage - 1) * limit
                                : cell.render('Cell')}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
            {
              showPagination && (
                <PaginationCustom
                  indexPage={indexPage}
                  maxPage={maxPage}
                  isLoading={isLoading}
                  handlePaginationNext={handlePaginationNext}
                />
              )
            }
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default ReactTableWithPaginationCard;
