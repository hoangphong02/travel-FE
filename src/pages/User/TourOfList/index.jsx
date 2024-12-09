import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { CardTour } from "~/components/common";
import PaginationCustom from "~/components/common/TableComponent/PaginationCustom";
import { getAllTourRequest } from "~/redux/tour/actions";

const TourOfListPage = () => {
  const { getAllCategoryTourState } = useSelector(
    (store) => store.categoryTour
  );
  const { getAllTourState } = useSelector((store) => store.tour);
  const dispatch = useDispatch();
  const limit = 10;
  const [indexPage, setIndexPage] = useState(1);
  const handleChangePage = (idxPage) => {
    setIndexPage(idxPage);
    // setIsCallApi(true);
  };
  const { id } = useParams();
  useEffect(() => {
    const params = {
      page: indexPage,
      limit,
      category: id,
    };
    dispatch(getAllTourRequest(params));
  }, [id, indexPage]);

  return (
    <div className="tour-page-wrapper">
      <div className="title">
        <span>
          {getAllCategoryTourState?.data?.find((item) => item._id === id)?.name}
        </span>
        <span className="line-1"></span>
        <span className="line-2"></span>
      </div>
      <div className="list-tour">
        {getAllTourState?.data?.length
          ? getAllTourState?.data?.map((item, index) => {
              return <CardTour tour={item} key={index} />;
            })
          : null}
      </div>
      <div>
        <PaginationCustom
          maxPage={getAllTourState?.totalPage}
          indexPage={indexPage}
          handlePaginationNext={handleChangePage}
        />
      </div>
    </div>
  );
};

export default TourOfListPage;
