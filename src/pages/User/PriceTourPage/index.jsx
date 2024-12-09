import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ReactTableWithPaginationCard } from "~/components/common";
import { ListTransport } from "~/constants";
import { getAllTourRequest } from "~/redux/tour/actions";

const PriceTourPage = () => {
  const [indexPage, setIndexPage] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const { getAllTourState } = useSelector((store) => store.tour);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const params = {
      limit: 10,
      page: indexPage,
    };
    dispatch(getAllTourRequest(params));
  }, [indexPage]);

  const handleDetailTour = (id) => {
    history.push(`/tour-detail/${id}`);
  };
  const columns = useMemo(() => [
    {
      Header: "ORDINAL NUMBER",
      accessor: "",
      cellClass: "list-item-heading w-5",
      Cell: (row) => row.row.index + 1,
    },
    {
      Header: "CODE",
      accessor: "tour_code",
      cellClass: "list-item-heading w-5",
    },
    {
      Header: "TOUR SCHEDULE",
      accessor: "name",
      cellClass: "list-item-heading w-5",
    },
    {
      Header: "TIME",
      accessor: "schedules",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => {
        return (
          <span>
            {value?.length > 1
              ? `${value?.length} days  ${value?.length - 1} night`
              : `${value?.length} days `}
          </span>
        );
      },
    },
    {
      Header: "DEPARTURE SCHEDULE",
      accessor: "shedule_on_week",
      cellClass: "list-item-heading w-5",
    },
    {
      Header: "VEHICLE",
      accessor: "transportation",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => {
        return (
          <span>
            {ListTransport.find((item) => item.value === value)?.label}
          </span>
        );
      },
    },
    {
      Header: "PRICE TOUR",
      accessor: "base_price_adult",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => {
        return <span>{value.toLocaleString("vi-VN")}</span>;
      },
    },
    {
      Header: "ACTION",
      accessor: "_id",
      Cell: ({ value }) => (
        <div
          className="d-flex align-items-center btn-see-tour"
          style={{ gap: "10px" }}
        >
          <Button
            outline
            color="primary"
            className="icon-button"
            onClick={() => handleDetailTour(value)}
          >
            SEE TOUR
          </Button>
        </div>
      ),
    },
  ]);

  const handleChangePage = (idxPage) => {
    setIndexPage(idxPage);
    // setIsCallApi(true);
  };
  const handleClickRow = () => {};

  useEffect(() => {
    if (getAllTourState?.data) {
      setDataTable(getAllTourState?.data);
    }
  }, [getAllTourState?.data]);
  return (
    <div className="price-tour-page-wrapper">
      <div className="price-tour-page-wrapper-inner">
        <div className="title">
          <div>
            <span>PRICE LIST</span>
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
        </div>
        <div className="table">
          <ReactTableWithPaginationCard
            columns={columns}
            data={dataTable}
            indexPage={indexPage}
            maxPage={getAllTourState?.totalPage}
            handlePaginationNext={handleChangePage}
            // isLoading={isGetAllOrdersListRequest}
            divided
            onClickRow={handleClickRow}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceTourPage;
