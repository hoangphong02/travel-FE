import React, { useEffect, useMemo, useState } from "react";
import TopComponent from "./TopComponent";
import { ReactTableWithPaginationCard } from "~/components/common";
import {
  CSEditOutline,
  CSSearchOutline,
  CSTrash2Outline,
} from "~/components/iconography/Outline";
import { ModalActions } from "./ModalAction";
import { ModalDelete } from "./ModalDelete";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDebounce } from "~/helpers/hooks";
import logo from "~/assets/logo/no-avatar.png";
import { getAllCategoryTourRequest } from "~/redux/categoryTour/actions";
import {
  getAllTourRequest,
  resetCreateTour,
  resetUpdateTour,
} from "~/redux/tour/actions";

const AdminTour = () => {
  const [isShowModalAction, setIsShowModalAction] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
  const [type, setType] = useState();
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 500);
  const {
    getAllTourState,
    isGetAllTourSuccess,
    isCreateTourSuccess,
    isCreateTourFailure,
    isUpdateTourSuccess,
    isUpdateTourFailure,
  } = useSelector((store) => store.tour);

  const { getAllCategoryTourState } = useSelector(
    (store) => store.categoryTour
  );

  const [callApi, setCallApi] = useState(false);
  const [dataActive, setDataActive] = useState(null);
  const [dataTable, setDataTable] = useState([]);
  const [indexPage, setIndexPage] = useState(1);
  const [options, setOptions] = useState([]);

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
  const handleShowModalDelete = () => {
    setIsShowModalDelete(true);
  };

  useEffect(() => {
    setCallApi(true);
  }, []);

  useEffect(() => {
    setCallApi(true);
  }, [searchDebounce]);

  useEffect(() => {
    if (!isShowModalAction) {
      setDataActive();
    }
  }, [isShowModalAction]);

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
        params.name = searchDebounce;
      }
      dispatch(getAllTourRequest(params));
      setCallApi(false);
    }
  }, [callApi, indexPage]);

  useEffect(() => {
    if (indexPage) {
      dispatch(getAllCategoryTourRequest());
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
    // {
    //   Header: "Mã",
    //   accessor: "_id",
    //   cellClass: "list-item-heading w-5",
    // },
    {
      Header: "Image",
      accessor: "image",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => (
        <div
          className="d-flex align-items-center btn-see-tour "
          style={{ gap: "10px" }}
        >
          <img
            src={value ? value[0]?.url : logo}
            alt="avatar"
            style={{ height: "60px", width: "60px", objectFit: "contain" }}
          />
        </div>
      ),
    },
    {
      Header: "Code",
      accessor: "tour_code",
      cellClass: "list-item-heading w-5",
    },
    {
      Header: "Name",
      accessor: "name",
      cellClass: "list-item-heading w-5",
    },
    {
      Header: "Category",
      accessor: "category",
      cellClass: "list-item-heading w-5",
      Cell: ({ value }) => (
        <div
          className="d-flex align-items-center btn-see-tour"
          style={{ gap: "10px" }}
        >
          <span>{value?.name}</span>
        </div>
      ),
    },
    {
      Header: "Position",
      accessor: "",
      cellClass: "list-item-heading w-5",
      Cell: ({ row }) => {
        return (
          <div
            className=" align-items-center btn-see-tour "
            style={{ gap: "10px" }}
          >
            <div>
              <strong>Start:</strong> {row?.original?.start_location}
            </div>
            <div>
              <strong>End:</strong> {row?.original?.end_location}
            </div>
          </div>
        );
      },
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
          <div
            outline
            color="primary"
            className="icon-button"
            onClick={() => handleShowModalDelete(true)}
          >
            <CSTrash2Outline />
          </div>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    if (isGetAllTourSuccess) {
      setDataTable(getAllTourState?.data || []);
    }
  }, [isGetAllTourSuccess]);

  useEffect(() => {
    if (isCreateTourSuccess) {
      toast.success("Added successful tour");
      setIsShowModalConfirm(false);
      setCallApi(true);
      setIsShowModalAction(false);
      dispatch(resetCreateTour());
    }
  }, [isCreateTourSuccess]);

  useEffect(() => {
    if (isCreateTourFailure) {
      toast.error("Add tour failed");
      dispatch(resetCreateTour());
    }
  }, [isCreateTourFailure]);

  useEffect(() => {
    if (isUpdateTourSuccess) {
      toast.success("Successful tour update");
      setCallApi(true);
      setIsShowModalConfirm(false);
      setIsShowModalAction(false);
      dispatch(resetUpdateTour());
    }
  }, [isUpdateTourSuccess]);
  useEffect(() => {
    if (isUpdateTourFailure) {
      toast.error("Tour update failed");
      dispatch(resetUpdateTour());
    }
  }, [isUpdateTourFailure]);

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
      </div>
      <div className="table">
        <ReactTableWithPaginationCard
          data={dataTable}
          columns={columns}
          onClickRow={handleClickRow}
          indexPage={indexPage}
          maxPage={getAllTourState?.totalPage}
          handlePaginationNext={handleChangePage}
          showPagination={getAllTourState?.totalPage > 1 ? true : false}
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

export default AdminTour;
