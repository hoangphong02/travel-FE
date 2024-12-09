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
import {
  getAllCategoryTourRequest,
  resetCreateCategoryTour,
  resetUpdateCategoryTour,
} from "~/redux/categoryTour/actions";

const AdminCategoryTour = () => {
  const [isShowModalAction, setIsShowModalAction] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
  const [type, setType] = useState();
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 500);

  const {
    isGetAllCategoryTourSuccess,
    getAllCategoryTourState,
    isCreateCategoryTourSuccess,
    isCreateCategoryTourFailure,
    isUpdateCategoryTourSuccess,
    isUpdateCategoryTourFailure,
  } = useSelector((store) => store.categoryTour);
  const [callApi, setCallApi] = useState(false);
  const [dataActive, setDataActive] = useState(null);
  const [dataTable, setDataTable] = useState([]);
  const [indexPage, setIndexPage] = useState(1);
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
    if (!isShowModalAction) {
      setDataActive();
    }
  }, [isShowModalAction]);

  useEffect(() => {
    setCallApi(true);
  }, [searchDebounce]);
  useEffect(() => {
    if (callApi) {
      const params = {
        limit,
        page: indexPage,
      };
      if (searchDebounce) {
        params.name = searchDebounce;
      }
      dispatch(getAllCategoryTourRequest(params));
      setCallApi(false);
    }
  }, [callApi, indexPage]);

  const columns = useMemo(() => [
    {
      Header: "Ordinal number",
      accessor: "",
      cellClass: "list-item-heading w-5",
      Cell: (row) => row.row.index + 1,
    },
    {
      Header: "Name",
      accessor: "name",
      cellClass: "list-item-heading w-5",
    },
    {
      Header: "Thumbnail",
      accessor: "thumbnail",
      cellClass: "list-item-heading w-5 d-flex",
      Cell: ({ value }) => (
        <div
          className="d-flex align-items-center btn-see-tour justify-content-center"
          style={{ gap: "10px" }}
        >
          <img
            src={value ? value : logo}
            alt="avatar"
            style={{ height: "60px", width: "60px", objectFit: "contain" }}
          />
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
    if (isGetAllCategoryTourSuccess) {
      setDataTable(getAllCategoryTourState?.data || []);
    }
  }, [isGetAllCategoryTourSuccess]);

  useEffect(() => {
    if (isCreateCategoryTourSuccess) {
      toast.success("Added tour list successfully");
      setIsShowModalConfirm(false);
      setCallApi(true);
      setIsShowModalAction(false);
      dispatch(resetCreateCategoryTour());
    }
  }, [isCreateCategoryTourSuccess]);

  useEffect(() => {
    if (isCreateCategoryTourFailure) {
      toast.error("Add failed tour category");
      dispatch(resetCreateCategoryTour());
    }
  }, [isCreateCategoryTourFailure]);

  useEffect(() => {
    if (isUpdateCategoryTourSuccess) {
      toast.success("Successfully updated tour list");
      setCallApi(true);
      setIsShowModalConfirm(false);
      setIsShowModalAction(false);
      dispatch(resetUpdateCategoryTour());
    }
  }, [isUpdateCategoryTourSuccess]);

  useEffect(() => {
    if (isUpdateCategoryTourFailure) {
      toast.error("Update failed tour list");
      dispatch(resetUpdateCategoryTour());
    }
  }, [isUpdateCategoryTourFailure]);

  const handleClickRow = (value) => {
    setDataActive(value);
  };
  const handleChangePage = (idxPage) => {
    setIndexPage(idxPage);
    setCallApi(true);
  };

  return (
    <div className="admin-category-tour-page">
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
          maxPage={getAllCategoryTourState?.totalPage}
          handlePaginationNext={handleChangePage}
          showPagination={getAllCategoryTourState?.totalPage > 1 ? true : false}
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

export default AdminCategoryTour;
