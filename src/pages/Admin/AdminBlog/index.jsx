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
import { getAllCategoryRequest } from "~/redux/categoryBlog/actions";
import {
  getAllBlogsRequest,
  resetCreateBlogs,
  resetUpdateBlogs,
} from "~/redux/blog/actions";

const AdminBlog = () => {
  const [isShowModalAction, setIsShowModalAction] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
  const [type, setType] = useState();
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 500);
  const {
    isGetAllBlogsSuccess,
    getAllBlogsState,
    isCreateBlogsSuccess,
    isCreateBlogsFailure,
    isUpdateBlogsSuccess,
    isUpdateBlogsFailure,
  } = useSelector((store) => store.blog);
  const { getAllCategoryState } = useSelector((store) => store.categoryBlog);

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
    if (!isShowModalAction) {
      setDataActive();
    }
  }, [isShowModalAction]);

  useEffect(() => {
    setCallApi(true);
  }, [searchDebounce]);

  useEffect(() => {
    if (getAllCategoryState?.data) {
      setOptions(
        getAllCategoryState?.data.map((item) => {
          return {
            value: item?._id,
            label: item?.name,
          };
        })
      );
    }
  }, [getAllCategoryState.data]);

  useEffect(() => {
    if (callApi) {
      const params = {
        limit,
        page: indexPage,
      };
      if (searchDebounce) {
        params.name = searchDebounce;
      }
      dispatch(getAllBlogsRequest(params));
      setCallApi(false);
    }
  }, [callApi, indexPage]);

  useEffect(() => {
    if (indexPage) {
      dispatch(getAllCategoryRequest());
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
    //   Header: "MÃ",
    //   accessor: "_id",
    //   cellClass: "list-item-heading w-5",
    // },
    {
      Header: "Name",
      accessor: "name",
      cellClass: "list-item-heading w-5",
    },
    {
      Header: "Title",
      accessor: "title",
      cellClass: "list-item-heading w-5",
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
    if (isGetAllBlogsSuccess) {
      setDataTable(getAllBlogsState?.data || []);
    }
  }, [isGetAllBlogsSuccess]);

  useEffect(() => {
    if (isCreateBlogsSuccess) {
      toast.success("Added blog successfully");
      setIsShowModalConfirm(false);
      setCallApi(true);
      setIsShowModalAction(false);
      dispatch(resetCreateBlogs());
    }
  }, [isCreateBlogsSuccess]);

  useEffect(() => {
    if (isCreateBlogsFailure) {
      toast.error("Added blog failure");
      dispatch(resetCreateBlogs());
    }
  }, [isCreateBlogsFailure]);

  useEffect(() => {
    if (isUpdateBlogsSuccess) {
      toast.success("Updated blog successfully");
      setCallApi(true);
      setIsShowModalConfirm(false);
      setIsShowModalAction(false);
      dispatch(resetUpdateBlogs());
    }
  }, [isUpdateBlogsSuccess]);
  useEffect(() => {
    if (isUpdateBlogsFailure) {
      toast.error("Updated blog failure");
      dispatch(resetUpdateBlogs());
    }
  }, [isUpdateBlogsFailure]);

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
          maxPage={getAllBlogsState?.totalPage}
          handlePaginationNext={handleChangePage}
          showPagination={getAllBlogsState?.totalPage > 1 ? true : false}
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

export default AdminBlog;
