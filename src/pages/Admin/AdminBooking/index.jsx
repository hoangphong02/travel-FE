import React, { useEffect, useMemo, useState } from "react";
import TopComponent from "./TopComponent";
import { ReactTableWithPaginationCard } from "~/components/common";
import {
  CSEditOutline,
  CSSearchOutline,
} from "~/components/iconography/Outline";
import { ModalActions } from "./ModalAction";
import { ModalDelete } from "./ModalDelete";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDebounce } from "~/helpers/hooks";
import { getAllCategoryTourRequest } from "~/redux/categoryTour/actions";
import { getAllTourRequest } from "~/redux/tour/actions";
import {
  getAllBookingRequest,
  resetCreateBooking,
  resetUpdateBooking,
} from "~/redux/booking/actions";
import moment from "moment";
import { ListSearch, ListStatusBooking, STATUS_CHECKING } from "~/constants";
import { getAllUserRequest } from "~/redux/user/actions";
import Select from "react-select";
import { FormGroup } from "react-bootstrap";

const AdminBooking = () => {
  const [isShowModalAction, setIsShowModalAction] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
  const [type, setType] = useState();
  const [search, setSearch] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [typeSearch, setTypeSearch] = useState({
    value: "tour_name",
    label: "Tour name",
  });

  const searchDebounce = useDebounce(search, 500);
  const {
    isGetAllBookingSuccess,
    getAllBookingState,
    isCreateBookingSuccess,
    isCreateBookingFailure,
    isUpdateBookingSuccess,
    isUpdateBookingFailure,
  } = useSelector((store) => store.booking);

  const { getAllCategoryTourState } = useSelector(
    (store) => store.categoryTour
  );

  const [callApi, setCallApi] = useState(false);
  const [dataActive, setDataActive] = useState(null);
  const [dataTable, setDataTable] = useState([]);
  const [indexPage, setIndexPage] = useState(1);
  const [options, setOptions] = useState([]);
  const [status, setStatus] = useState("");
  const [statusBooking, setStatusBooking] = useState("");

  const limit = 10;
  const dispatch = useDispatch();
  const handleCloseModalActions = () => {
    setIsShowModalAction(false);
  };
  const handleShowModalActions = (type) => {
    setType(type);
    setIsShowModalAction(true);
  };
  const handleCloseModalDelete = () => {
    setIsShowModalDelete(false);
  };

  useEffect(() => {
    setCallApi(true);
  }, [searchDebounce, status, start, end, statusBooking]);

  useEffect(() => {
    if (getAllCategoryTourState?.data) {
      setOptions(
        getAllCategoryTourState?.data.map((item) => {
          return {
            value: item?._id,
            label: item?.name,
          };
        })
      );
    }
  }, [getAllCategoryTourState.data]);

  useEffect(() => {
    if (callApi) {
      const params = {
        limit,
        page: indexPage,
      };
      if (searchDebounce) {
        if (typeSearch.value === "tour_name") {
          params.tour_name = searchDebounce;
        } else {
          params.tour_code = searchDebounce;
        }
      }
      if (status) {
        params.status = status.value;
      }
      if (start) {
        params.sdate = moment(start).format("MM/DD/YYYY");
      }
      if (end) {
        params.edate = moment(end).format("MM/DD/YYYY");
      }
      if (statusBooking) {
        if (statusBooking.value === "is_checking") {
          params.is_checking = true;
        }
        if (statusBooking.value === "is_not_checking") {
          params.is_checking = false;
        }
        if (statusBooking.value === "is_cancel") {
          params.is_cancel = true;
        }
        if (statusBooking.value === "is_not_cancel") {
          params.is_cancel = false;
        }
      }
      dispatch(getAllBookingRequest(params));
      setCallApi(false);
    }
  }, [callApi, indexPage]);

  useEffect(() => {
    if (isShowModalAction || indexPage) {
      const params = {
        limit: 0,
      };
      dispatch(getAllCategoryTourRequest());
      dispatch(getAllTourRequest(params));
      dispatch(getAllUserRequest(params));
    } else {
      setDataActive();
    }
  }, [isShowModalAction, indexPage]);

  const columns = useMemo(() => [
    {
      Header: "Ordinal number",
      accessor: "",
      cellClass: "list-item-heading w-5",
      Cell: (row) => row.row.index + 1,
    },
    {
      Header: "Tour name",
      accessor: "tour_id",
      cellClass: "list-item-heading w-10",
      Cell: ({ value }) => (
        <div
          className="d-flex flex-column text-align-left"
          style={{ gap: "10px" }}
        >
          <span>{value?.name}</span>
          <div className="d-flex flex-column">
            <span>
              <strong>Adult price:</strong>{" "}
              {value?.base_price_adult.toLocaleString("vi-VN")} VNĐ
            </span>
            <span>
              <strong>Child price:</strong>{" "}
              {value?.base_price_child.toLocaleString("vi-VN")} VNĐ
            </span>
          </div>
        </div>
      ),
    },
    {
      Header: "Number of tickets",
      accessor: "",
      cellClass: "list-item-heading w-10",
      Cell: ({ row }) => {
        return (
          <div
            className="d-flex flex-column text-align-left"
            style={{ gap: "10px" }}
          >
            <span>
              <strong>Adult:</strong> {row?.original?.adult_ticket}
            </span>
            <span>
              <strong>Child:</strong> {row?.original?.child_ticket}
            </span>
          </div>
        );
      },
    },
    {
      Header: "Total price",
      accessor: "total_price",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => (
        <div
          className="d-flex flex-column text-align-left"
          style={{ gap: "10px" }}
        >
          {value?.toLocaleString("vi-VN")} VNĐ
        </div>
      ),
    },
    {
      Header: "Status",
      accessor: "payment_status",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => (
        <div
          className="d-flex flex-column text-align-left"
          style={{ gap: "10px" }}
        >
          {ListStatusBooking?.find((item) => item.value === value)?.label}
        </div>
      ),
    },
    {
      Header: "Booking date",
      accessor: "createdAt",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => (
        <div
          className="d-flex flex-column text-align-left"
          style={{ gap: "10px" }}
        >
          {moment(value).format("DD/MM/YYYY - hh:mm")}
        </div>
      ),
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: () => (
        <div
          className="d-flex align-items-center btn-see-tour justify-content-center"
          style={{ gap: "10px" }}
        >
          <div
            outline
            color="primary"
            className="icon-button"
            onClick={() => handleShowModalActions("edit")}
          >
            <CSEditOutline />
          </div>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    if (isGetAllBookingSuccess) {
      setDataTable(getAllBookingState?.data || []);
    }
  }, [isGetAllBookingSuccess]);

  useEffect(() => {
    if (isCreateBookingSuccess) {
      toast.success("Booked tour successfully");
      setIsShowModalConfirm(false);
      setCallApi(true);
      setIsShowModalAction(false);
      dispatch(resetCreateBooking());
    }
  }, [isCreateBookingSuccess]);

  useEffect(() => {
    if (isCreateBookingFailure) {
      toast.error("Tour booking failed");
      dispatch(resetCreateBooking());
    }
  }, [isCreateBookingFailure]);

  useEffect(() => {
    if (isUpdateBookingSuccess) {
      toast.success("Updated successful tour booking");
      setCallApi(true);
      setIsShowModalConfirm(false);
      setIsShowModalAction(false);
      dispatch(resetUpdateBooking());
    }
  }, [isUpdateBookingSuccess]);
  useEffect(() => {
    if (isUpdateBookingFailure) {
      toast.error("Update tour booking failed");
      dispatch(resetUpdateBooking());
    }
  }, [isUpdateBookingFailure]);

  const handleClickRow = (value) => {
    setDataActive(value);
  };
  const handleChangePage = (idxPage) => {
    setIndexPage(idxPage);
    setCallApi(true);
  };
  return (
    <div className="admin-booking-page">
      <div className="top">
        <TopComponent handleShowModalActions={handleShowModalActions} />
      </div>
      <div className="search">
        <div className="body" style={{ height: "fit-content" }}>
          <Select
            className="select-type"
            options={ListSearch}
            onChange={(e) => setTypeSearch(e)}
            value={typeSearch}
          ></Select>
          <input
            type="text"
            placeholder="Enter search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span>
            <CSSearchOutline />
          </span>
        </div>
        <div className="d-flex gap-2 align-items-center select-filter">
          <span>Payment status:</span>
          <Select
            options={ListStatusBooking}
            onChange={(e) => setStatus(e)}
            value={status}
          ></Select>
        </div>
        <div className="d-flex gap-2 align-items-center select-filter">
          <span>Booking status:</span>
          <Select
            options={STATUS_CHECKING}
            onChange={(e) => setStatusBooking(e)}
            value={statusBooking}
          ></Select>
        </div>
        <FormGroup className="d-flex gap-2 align-items-center">
          <label htmlFor=""> From: </label>
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="d-flex gap-2 align-items-center">
          <label htmlFor="">To: </label>
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </FormGroup>
      </div>
      <div className="table">
        <ReactTableWithPaginationCard
          data={dataTable}
          columns={columns}
          onClickRow={handleClickRow}
          indexPage={indexPage}
          handlePaginationNext={handleChangePage}
          maxPage={getAllBookingState?.totalPage}
          showPagination={getAllBookingState?.totalPage > 1 ? true : false}
        />
      </div>

      {isShowModalAction && type && (
        <ModalActions
          isOpen
          type={type}
          handleClose={handleCloseModalActions}
          data={dataActive}
          isShowModalConfirm={isShowModalConfirm}
          setIsShowModalConfirm={setIsShowModalConfirm}
          options={options}
        />
      )}
      {isShowModalDelete && (
        <ModalDelete
          isOpen
          handleClose={handleCloseModalDelete}
          data={dataActive}
          setCallApi={setCallApi}
        />
      )}
    </div>
  );
};

export default AdminBooking;
