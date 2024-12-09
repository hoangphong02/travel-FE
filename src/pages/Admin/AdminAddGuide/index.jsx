import React, { useEffect, useMemo, useState } from "react";
import TopComponent from "./TopComponent";
import { ReactTableWithPaginationCard } from "~/components/common";
import {
  CSEditOutline,
  CSSearchOutline,
} from "~/components/iconography/Outline";
import { ModalActions } from "./ModalAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDebounce } from "~/helpers/hooks";
import { getAllTourRequest } from "~/redux/tour/actions";
import {
  getAllBookingGroupRequest,
  getUserGuideBookingRequest,
  resetAddGuideBooking,
} from "~/redux/booking/actions";
import { Form, FormGroup } from "react-bootstrap";
import moment from "moment";

const AdminAddGuide = () => {
  const [isShowModalAction, setIsShowModalAction] = useState(false);
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
  const [type, setType] = useState();
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 500);

  const {
    getAllBookingGroupState,
    isGetAllBookingGroupSuccess,
    isAddGuideBookingSuccess,
    isAddGuideBookingFailure,
  } = useSelector((store) => store.booking);

  const [callApi, setCallApi] = useState(false);
  const [dataActive, setDataActive] = useState(null);
  const [dataTable, setDataTable] = useState([]);
  const [indexPage, setIndexPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [date, setDate] = useState("");

  const limit = 10;
  const dispatch = useDispatch();
  const handleCloseModalActions = () => {
    setIsShowModalAction(false);
  };
  const handleShowModalActions = (type) => {
    setType(type);
    setIsShowModalAction(true);
  };
  useEffect(() => {
    setCallApi(true);
  }, [searchDebounce]);

  useEffect(() => {
    if (dataTable) {
      const page = Math.floor(dataTable?.length / 10);
      const index = dataTable?.length % 10;
      if (index > 0) {
        setTotalPage(page + 1);
      } else {
        setTotalPage(page);
      }
    }
  }, [dataTable]);

  useEffect(() => {
    if (dataActive) {
      const payload = {
        tourId: dataActive?.bookings[0]?.tour_id?._id,
        start_date: dataActive?.start_date,
        end_date: dataActive?.end_date,
      };
      dispatch(getUserGuideBookingRequest(payload));
    }
  }, [dataActive]);

  useEffect(() => {
    setCallApi(true);
  }, [filter, date]);

  useEffect(() => {
    if (callApi) {
      const params = {
        limit,
        page: indexPage,
        tour_guide: filter,
      };
      if (searchDebounce) {
        params.name = searchDebounce;
      }
      if (date) {
        params.start_date = moment(date).format("MM/DD/YYYY");
      }
      dispatch(getAllBookingGroupRequest(params));
      setCallApi(false);
    }
  }, [callApi, indexPage]);

  useEffect(() => {
    if (indexPage) {
      const params = {
        limit: 0,
      };
      dispatch(getAllTourRequest(params));
    } else {
      setDataActive();
    }
  }, [indexPage]);

  const columns = useMemo(() => [
    {
      Header: "Ordinal number",
      accessor: "",
      cellClass: "list-item-heading w-5",
      Cell: (row) => row.row.index + 1,
    },
    {
      Header: "Group name",
      accessor: "group_number",
      cellClass: "list-item-heading w-10",
    },
    {
      Header: "Tour guide",
      accessor: "bookings",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => (
        <div
          className="d-flex flex-column text-align-left"
          style={{ gap: "10px" }}
        >
          {value[0]?.tour_guide?.name || "Chưa có"}
        </div>
      ),
    },
    {
      Header: "Tour name",
      accessor: "",
      cellClass: "list-item-heading w-5",
      Cell: ({ row }) => (
        <div
          className="d-flex flex-column text-align-left"
          style={{ gap: "10px" }}
        >
          {row?.original?.bookings[0]?.tour_id?.name || ""}
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
          {/* <div
            outline
            color="primary"
            className="icon-button"
            onClick={() => handleShowModalDelete(true)}
          >
            <CSTrash2Outline />
          </div> */}
        </div>
      ),
    },
  ]);

  useEffect(() => {
    if (isGetAllBookingGroupSuccess) {
      const arr = [];
      getAllBookingGroupState?.data?.map((item) => {
        item?.groups?.map((group) => {
          arr.push(group);
        });
      });
      setDataTable(arr || []);
    }
  }, [isGetAllBookingGroupSuccess]);

  useEffect(() => {
    if (isAddGuideBookingSuccess) {
      toast.success("Add tour guide successfully");
      setCallApi(true);
      setIsShowModalConfirm(false);
      setIsShowModalAction(false);
      dispatch(resetAddGuideBooking());
    }
  }, [isAddGuideBookingSuccess]);
  useEffect(() => {
    if (isAddGuideBookingFailure) {
      toast.error("Add tour guide failure");
      dispatch(resetAddGuideBooking());
    }
  }, [isAddGuideBookingFailure]);

  const handleClickRow = (value) => {
    setDataActive(value);
  };
  const handleChangePage = (idxPage) => {
    setIndexPage(idxPage);
    setCallApi(true);
  };

  return (
    <div className="admin-food-page">
      <div className="top">
        <TopComponent handleShowModalActions={handleShowModalActions} />
      </div>
      <div className="search">
        <div className="body">
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
        <FormGroup className="d-flex gap-2">
          <label htmlFor="">Filter by date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>
        <div className="filter">
          <FormGroup className="d-flex gap-2">
            <Form.Check
              type="radio"
              aria-label="radio 1"
              checked={filter === false}
              onClick={() => setFilter(!filter)}
            />
            <label htmlFor="">No tour guide yet</label>
          </FormGroup>
          <FormGroup className="d-flex gap-2">
            <Form.Check
              type="radio"
              aria-label="radio 1"
              checked={filter === true}
              onClick={() => setFilter(!filter)}
            />
            <label htmlFor="">A tour guide is available</label>
          </FormGroup>
        </div>
      </div>
      <div></div>
      <div className="table">
        <ReactTableWithPaginationCard
          data={dataTable.slice(indexPage * 10 - 10, indexPage * 10)}
          columns={columns}
          onClickRow={handleClickRow}
          indexPage={indexPage}
          maxPage={totalPage}
          handlePaginationNext={handleChangePage}
          // showPagination={getAllFoodsState?.totalPage > 1 ? true : false}
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
        />
      )}
    </div>
  );
};

export default AdminAddGuide;
