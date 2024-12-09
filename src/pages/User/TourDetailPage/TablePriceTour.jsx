import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ReactTableWithPaginationCard } from "~/components/common";
import { LIST_OPTION_RANK_HOTEL } from "~/constants";

const TablePriceTour = () => {
  const [dataTable, setDataTable] = useState([]);
  const { getDetailTourState } = useSelector((store) => store.tour);

  const history = useHistory();

  const handleClickRow = () => {};

  useEffect(() => {
    if (getDetailTourState) {
      setDataTable(getDetailTourState?.data?.hotel_level);
    }
  }, [getDetailTourState]);

  const handleBooking = (id) => {
    history.push(`/booking/${id}`);
  };

  const columns = useMemo(() => [
    {
      Header: "Ordinal number",
      accessor: "#",
      cellClass: "list-item-heading w-5",
      Cell: (row) => row.row.index + 1,
    },
    {
      Header: "Hotel",
      accessor: "star",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => {
        return (
          <span>
            {LIST_OPTION_RANK_HOTEL.find((item) => item.value === value)?.label}
          </span>
        );
      },
    },
    {
      Header: "Adult price",
      accessor: "price_adult",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => {
        return <span>{value.toLocaleString("vi-VN")}</span>;
      },
    },
    {
      Header: "Child price",
      accessor: "price_child",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => {
        return <span>{value?.toLocaleString("vi-VN")}</span>;
      },
    },
    {
      Header: "Meals",
      accessor: "",
      cellClass: "list-item-heading w-5",
      Cell: (row) => <span>Full package</span>,
    },
    {
      Header: "Action",
      accessor: "_id",
      Cell: ({ value }) => {
        return (
          <div
            className="d-flex align-items-center btn-see-tour"
            style={{ gap: "10px" }}
          >
            <Button
              outline
              color="primary"
              className="icon-button"
              onClick={() => handleBooking(getDetailTourState?.data?._id)}
            >
              Book now
            </Button>
          </div>
        );
      },
    },
  ]);
  return (
    <div className="table-price-tour">
      <div className="table-price-tour-title">
        <span>Price list</span>
      </div>
      <div className="table-price-tour-body">
        <div className="table-price-tour-body-main">
          <ReactTableWithPaginationCard
            columns={columns}
            data={dataTable}
            // isLoading={isGetAllOrdersListRequest}
            divided
            onClickRow={handleClickRow}
            showPagination={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TablePriceTour;
