import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSOrderOutline } from "~/components/iconography/Outline";
import { CSDollarSolid, CSLayersSolid } from "~/components/iconography/Solid";
import {
  getAllBookingRequest,
  getStatisticalRequest,
} from "~/redux/booking/actions";
import {
  getAllTourFlopRequest,
  getAllTourMainRequest,
  getAllTourRequest,
} from "~/redux/tour/actions";
import RevenueStatisticsChart from "./RevenueStatisticsChart";

const AdminDashboard = () => {
  const { getAllBookingState, getStatisticalState } = useSelector(
    (store) => store.booking
  );
  const { getAllTourMainState, getAllTourFlopState } = useSelector(
    (store) => store.tour
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBookingRequest({ limit: 0 }));
    dispatch(getAllTourRequest({ limit: 0 }));
    dispatch(getAllTourMainRequest());
    dispatch(getAllTourFlopRequest());
    dispatch(getStatisticalRequest());
  }, []);

  const monthMap = {
    thang1: "Jan",
    thang2: "Feb",
    thang3: "Mar",
    thang4: "Apr",
    thang5: "May",
    thang6: "Jun",
    thang7: "Jul",
    thang8: "Aug",
    thang9: "Sep",
    thang10: "Oct",
    thang11: "Nov",
    thang12: "Dec",
  };

  const totalOrdersMonthly = {};
  Array.isArray(getAllBookingState?.data) &&
    getAllBookingState?.data?.forEach((order) => {
      if (order?.payment_date) {
        const orderDate = new Date(order?.payment_date);
        const month = orderDate.getMonth() + 1;
        const monthKey = `thang${month}`;
        if (totalOrdersMonthly[monthKey]) {
          totalOrdersMonthly[monthKey].price += order?.total_price;
        } else {
          totalOrdersMonthly[monthKey] = {
            name: monthKey,
            price: order?.total_price,
          };
        }
      }
    });
  const dataTotalOrderMonth = Object.values(totalOrdersMonthly);
  const dataToTalPriceOrderMonth = dataTotalOrderMonth.map((item) => ({
    ...item,
    name: monthMap[item.name],
  }));

  return (
    <div className="page-dashboard">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>REVENUE</h3>
            <CSDollarSolid className="card_icon" />
          </div>
          <h2>
            {getStatisticalState?.data?.revenueTotal?.toLocaleString("vi-VN")}{" "}
            VNĐ
          </h2>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>MONTHLY REVENUE</h3>
            <CSDollarSolid className="card_icon" />
          </div>
          <h2>
            {getStatisticalState?.data?.revenueMonth?.toLocaleString("vi-VN")}{" "}
            VNĐ
          </h2>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>NUMBER OF BOOKINGS / MONTH</h3>
            <CSOrderOutline className="card_icon" />
          </div>
          <h2>{getStatisticalState?.data?.bookingMonth}</h2>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>TOUR</h3>
            <CSLayersSolid className="card_icon" />
          </div>
          <h2>{getStatisticalState?.data?.totalTours}</h2>
        </div>
      </div>

      <div className="chart-total-price-of-month">
        <div>
          <p style={{ padding: "0 20px", marginBottom: "0" }}>
            REVENUE CHART BY MONTH
          </p>
          <div style={{ height: "300px", marginTop: "30px" }}>
            <RevenueStatisticsChart data={dataToTalPriceOrderMonth.reverse()} />
          </div>
        </div>
      </div>

      <div className="list-tour">
        <div className="list-tour-main">
          <span className="title">TOUR HIGHLIGHTS</span>
          <div className="tour-main">
            {getAllTourMainState?.data?.map((item, index) => {
              return (
                <div className="body">
                  <img
                    src={
                      item?.image?.find((image) => image.type === "banner")?.url
                    }
                    alt=""
                  />
                  <div className="name">
                    <span>{item?.name}</span>
                    <span>Interested turn: {item?.view}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="list-tour-main">
          <span className="title">TOUR OF LITTLE INTEREST</span>
          <div className="tour-main">
            {getAllTourFlopState?.data?.map((item, index) => {
              return (
                <div className="body">
                  <img
                    src={
                      item?.image?.find((image) => image.type === "banner")?.url
                    }
                    alt=""
                  />
                  <div className="name">
                    <span>{item?.name}</span>
                    <span>Interested turn: {item?.view}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
