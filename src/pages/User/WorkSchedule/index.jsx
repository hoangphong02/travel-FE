import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { ReactTableWithPaginationCard } from "~/components/common";
import { CSEyeSolid } from "~/components/iconography/Solid";
import { routesUser } from "~/configs";
import {
  resetUpdateChecking,
  updateCheckingRequest,
} from "~/redux/booking/actions";
import { getAllTourRequest } from "~/redux/tour/actions";
import { getWorkSchedulesRequest } from "~/redux/user/actions";
import { ModalConfirmChecking } from "./ModalConfirmChecking";
import { CSEditOutline } from "~/components/iconography/Outline";
import { ModalUpdateListCustomer } from "./ModalUpdateListCustomer";

const WorkSchedulePage = () => {
  const { getWorkSchedulesState, profileResponse } = useSelector(
    (store) => store.user
  );
  const { isUpdateCheckingSuccess } = useSelector((store) => store.booking);
  const { getAllTourState } = useSelector((store) => store.tour);
  const [callApi, setCallApi] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const [indexPage, setIndexPage] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [dataActive, setDataActive] = useState();
  const [show, setShow] = useState(false);
  const [showChecking, setShowChecking] = useState(false);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [type, setType] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (startDate || endDate) {
      setCallApi(true);
    }
  }, [startDate, endDate]);
  useEffect(() => {
    if (!profileResponse?.data) {
      history.push(routesUser.home);
    }
  }, [profileResponse]);

  useEffect(() => {
    const params = {
      limit: 0,
    };
    dispatch(getAllTourRequest(params));
  }, [startDate]);
  useEffect(() => {
    if (callApi) {
      const params = {
        start_date: moment(startDate).format("MM/DD/YYYY"),
      };
      if (endDate) {
        params.end_date = moment(endDate).format("MM/DD/YYYY");
      }

      dispatch(getWorkSchedulesRequest(params));
      setCallApi(false);
    }
  }, [callApi]);
  useEffect(() => {
    setDataTable(getWorkSchedulesState?.data || []);
  }, [getWorkSchedulesState?.data]);

  const handleShowChecking = (row) => {
    setDataActive(row);
    setType("checking");
    setShowChecking(true);
  };
  const handleCloseChecking = () => {
    setDataActive();
    setShowChecking(false);
    setType("");
  };
  const handleChecking = () => {
    const payload = {
      id: dataActive._id,
      body: {
        is_checking: !dataActive.is_checking,
      },
    };
    dispatch(updateCheckingRequest(payload));
  };

  const handleShowCustomer = (row) => {
    setDataActive(row);
    setType("customer");
    setShowAddCustomer(true);
  };
  const handleCloseCustomer = () => {
    setDataActive();
    setShowAddCustomer(false);
    setType("");
  };

  const handleConfirmUpdateCustomer = (value) => {
    const payload = {
      id: dataActive._id,
      body: {
        is_checking: true,
        customer_list: value,
      },
    };
    dispatch(updateCheckingRequest(payload));
  };

  useEffect(() => {
    if (isUpdateCheckingSuccess) {
      if (type === "checking") {
        toast.success("Update checking on tour successfully");
        setType("");
      } else {
        toast.success("Update list customer on tour successfully");
        setType("");
      }
      handleCloseCustomer();
      handleCloseChecking();
      setCallApi(true);
      dispatch(resetUpdateChecking());
    }
  }, [isUpdateCheckingSuccess]);

  const columns = useMemo(() => {
    const baseColumns = [
      {
        Header: "ORDINAL NUMBER",
        accessor: "",
        cellClass: "list-item-heading w-5",
        Cell: (row) => row.row.index + 1,
      },
      {
        Header: "GUIDE",
        accessor: "name",
        cellClass: "list-item-heading w-5",
        Cell: ({ value }) => {
          return (
            <div
              className="d-flex flex-column text-align-left"
              style={{ gap: "10px" }}
            >
              {profileResponse?.data?.role === "admin" ? (
                <span>{value}</span>
              ) : (
                <span>{profileResponse?.data?.name}</span>
              )}
            </div>
          );
        },
      },
      {
        Header: "PHONE (GUIDE)",
        accessor: "phone",
        cellClass: "list-item-heading w-5",
        Cell: ({ value }) => {
          return (
            <div
              className="d-flex flex-column text-align-left"
              style={{ gap: "10px" }}
            >
              {profileResponse?.data?.role === "admin" ? (
                <span>{value}</span>
              ) : (
                <span>{profileResponse?.data?.phone}</span>
              )}
            </div>
          );
        },
      },
      {
        Header: "TIME",
        accessor: "",
        cellClass: "list-item-heading w-5",
        Cell: ({ row }) => {
          return (
            <div
              className="d-flex flex-column text-align-left"
              style={{ gap: "10px" }}
            >
              {profileResponse?.data?.role === "admin" ? (
                <>
                  <span>
                    <strong>Start:</strong>{" "}
                    {moment(row?.original?.bookings[0]?.start_date).format(
                      "hh:mm DD/MM/YYYY"
                    )}
                  </span>
                  <span>
                    <strong>End:</strong>{" "}
                    {moment(row?.original?.bookings[0]?.end_date).format(
                      "hh:mm DD/MM/YYYY"
                    )}{" "}
                  </span>
                </>
              ) : (
                <>
                  <span>
                    <strong>Start:</strong>{" "}
                    {moment(row?.original?.start_date).format(
                      "hh:mm DD/MM/YYYY"
                    )}
                  </span>
                  <span>
                    <strong>End:</strong>{" "}
                    {moment(row?.original?.end_date).format("hh:mm DD/MM/YYYY")}{" "}
                  </span>
                </>
              )}
            </div>
          );
        },
      },
      {
        Header: "CUSTOMER",
        accessor: "",
        cellClass: "list-item-heading w-5",
        Cell: ({ row }) => {
          return (
            <div
              className="d-flex flex-column text-align-left"
              style={{ gap: "10px" }}
            >
              {profileResponse?.data?.role === "admin" ? (
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Button
                    onClick={handleShow}
                    variant="none"
                    style={{
                      padding: "0 24px",
                      width: "fit-content",
                    }}
                  >
                    <CSEyeSolid className="fill-white" />
                  </Button>
                </OverlayTrigger>
              ) : (
                <>
                  <span>
                    <strong>Name: </strong> {row.original?.fullname}
                  </span>
                  <span>
                    <strong>Phone: </strong> {row.original?.phone}
                  </span>
                  <span>
                    <strong>Email: </strong> {row.original?.email}
                  </span>
                  <span>
                    <strong>Adult ticket: </strong> {row.original?.adult_ticket}
                  </span>
                  <span>
                    <strong>Child tickets: </strong>{" "}
                    {row.original?.child_ticket}
                  </span>
                  <span>
                    <strong>Address: </strong> {row.original?.address}
                  </span>
                  <span>
                    <strong>Note: </strong> {row.original?.note}
                  </span>
                </>
              )}
            </div>
          );
        },
      },
      {
        Header: "TOUR NAME",
        accessor: "",
        cellClass: "list-item-heading w-5",
        Cell: ({ row }) => {
          return (
            <div
              className="d-flex flex-column text-align-left"
              style={{ gap: "10px" }}
            >
              {profileResponse?.data?.role === "admin"
                ? getAllTourState?.data?.find(
                    (item) => item?._id === row?.original?.bookings[0]?.tour_id
                  )?.name
                : getAllTourState?.data?.find(
                    (item) => item?._id === row?.original?.tour_id
                  )?.name}
              <span></span>
            </div>
          );
        },
      },
      {
        Header: "PRICE TOUR",
        accessor: "",
        cellClass: "list-item-heading w-5",
        Cell: ({ row }) => {
          return (
            <div
              className="d-flex flex-column text-align-left"
              style={{ gap: "10px" }}
            >
              {profileResponse?.data?.role === "admin" ? (
                <span>
                  {row?.original?.bookings[0]?.total_price?.toLocaleString(
                    "VI-VN"
                  )}{" "}
                  VNĐ
                </span>
              ) : (
                <span>
                  {row?.original?.total_price?.toLocaleString("VI-VN")} VNĐ
                </span>
              )}
            </div>
          );
        },
      },
      // Các cột khác
    ];

    if (profileResponse?.data?.role === "employee") {
      baseColumns.push({
        Header: "CHECKED IN",
        accessor: "is_checking",
        cellClass: "list-item-heading w-5",
        Cell: ({ value, row }) => {
          return (
            <div>
              <div className="d-flex gap-3 align-items-center">
                <input
                  type="checkbox"
                  checked={value}
                  style={{ height: "16px", width: "16px", cursor: "pointer" }}
                  onClick={() => handleShowChecking(row)}
                />
                <div
                  outline
                  color="primary"
                  className="icon-button"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleShowCustomer(row)}
                >
                  <CSEditOutline />
                </div>
              </div>
            </div>
          );
        },
      });
    }

    return baseColumns;
  }, [profileResponse, handleShowChecking, handleShowCustomer]);

  const handleClickRow = (value) => {
    setDataActive(value);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      See detailed list
    </Tooltip>
  );

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    setDataActive();
  };

  return (
    <div className="work-schedule-page">
      <div className="filter">
        <div className="title">
          <div>
            <span>WORK SCHEDULE</span>
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
        </div>
        <div className="filter-date">
          <div>
            <label htmlFor="">Start date: </label>
            <input
              type="date"
              value={moment(startDate).format("YYYY-MM-DD")}
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
          </div>
          {/* <div>
            <label htmlFor="">End date: </label>
            <input
              type="date"
              value={moment(endDate).format("YYYY-MM-DD")}
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </div> */}
        </div>
      </div>
      <div className="table">
        <ReactTableWithPaginationCard
          columns={columns}
          data={dataTable}
          indexPage={indexPage}
          maxPage={getWorkSchedulesState?.totalPage}
          showPagination={false}
          // handlePaginationNext={handleChangePage}
          // isLoading={isGetAllOrdersListRequest}
          divided
          onClickRow={handleClickRow}
        />
      </div>
      {show && dataActive && (
        <ModalListUser data={dataActive} handleClose={handleClose} />
      )}

      {showChecking && dataActive && (
        <ModalConfirmChecking
          isOpen
          handleClose={handleCloseChecking}
          handleConfirm={handleChecking}
        />
      )}
      {showAddCustomer && dataActive && (
        <ModalUpdateListCustomer
          isOpen
          handleClose={handleCloseCustomer}
          handleConfirm={handleConfirmUpdateCustomer}
          data={dataActive}
        />
      )}
    </div>
  );
};

export default WorkSchedulePage;

function ModalListUser({ data, handleClose }) {
  return (
    <Modal
      show
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Customer list</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          className="modal-list-user"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          {data?.bookings?.map((item, index) => {
            return (
              <div key={index} className="item-user">
                <span>
                  <strong>Name: </strong>
                  {item?.fullname}
                </span>
                <span>
                  <strong>Phone: </strong>
                  {item?.phone}
                </span>
                <span>
                  <strong>Email: </strong>
                  {item?.email}
                </span>
                <span>
                  <strong>Description: </strong>
                  {item?.note}
                </span>
                <span>
                  <strong>Adult ticket: </strong>
                  {item?.adult_ticket}
                </span>
                <span>
                  <strong>Child tickets: </strong>
                  {item?.child_ticket}
                </span>
                <span>
                  <strong>Total price: </strong>
                  {item?.total_price.toLocaleString("VI-VN")} VNĐ
                </span>
              </div>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          onClick={handleClose}
          style={{
            width: "45%",
            background: "#fff",
            border: "1px solid #000",
            color: "#000",
          }}
        >
          Back
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
