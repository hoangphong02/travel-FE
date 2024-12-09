import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import banner1 from "~/assets/logo/image3.jpg";
import { getAllTourMainRequest } from "~/redux/tour/actions";

const IntroducePage = () => {
  const [isScrollRight, setIsScrollRight] = useState(true);
  const ref = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const { getAllTourMainState } = useSelector((store) => store.tour);

  useEffect(() => {
    dispatch(
      getAllTourMainRequest({
        limit: 5,
      })
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight; // chiều cao của cửa sổ trình duyệt
      const fullHeight = document.documentElement.scrollHeight; // tổng chiều cao của nội dung trang

      // Kiểm tra nếu khoảng cách từ cuối trang tới vị trí cuộn nhỏ hơn hoặc bằng 400px
      if (fullHeight - (scrollTop + windowHeight) <= 400) {
        setIsScrollRight(false); // tắt position fixed khi cách cuối trang 400px
      } else {
        setIsScrollRight(true); // bật position fixed khi chưa tới cuối trang
      }
    };

    // Gọi handleScroll để cập nhật trạng thái ngay khi component mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="introduce-page-wrapper">
      <div className="introduce-page-wrapper-body">
        <div className="introduce-page-wrapper-body-left">
          <div className="title">
            <span>ABOUT US</span>
          </div>
          <div className="bottom">
            <div className="name-company">
              <span>MEKONG TOURISM COMPANY LIMITED</span>
            </div>
            <div>
              <strong>Establishment time and development process</strong>
              <br />
              <span>
                Company <strong>Mekong Tourism Company Limited</strong> was
                established in 2024, with the name{" "}
                <strong>Mekong Delta Tour</strong>. Although newly established
                not long ago, after a process of formation and development,{" "}
                <strong>Mekong Delta Tour</strong> constantly researching and
                always being a leader in the field of applying modern technology
                combined with services. We always prioritize providing unique
                and creative travel ideas to bring unique experiences to
                visitors when traveling to the West.
              </span>
              <strong>Field of activity</strong>
              <br />
              <span>
                <strong>Mekong Delta Tour</strong>
                operates as a domestic and foreign tour operator, specializing
                in organizing Western tours such as:
              </span>
              <ul>
                <li> 1 day western tour: CAN THƠ - BEN TRE</li>
                <li>
                  {" "}
                  Tour western 2 days 1 night: CAN THƠ - BEN TRE - BAC LIEU
                </li>
                <li>
                  {" "}
                  Western tour 3 days 2 nights: CAN THO - SOC TRANG - BEN TRE -
                  BAC LIEU - CA MAU
                </li>
                <li>
                  {" "}
                  Tour to visit Western fruit gardens and eco-tourism areas
                </li>
              </ul>
              <span>
                In addition, we also have accompanying support services to
                ensure the best service experience for customers such as:
              </span>
              <ul>
                <li>Consulting services</li>
                <li>Customer support service</li>
                <li>Travel management and customized service packages</li>
              </ul>
              <span>
                <strong>Mekong Delta Tour</strong>
                confidently able to meet the diversity of guests when visiting
                the West. Not only that, we also provide travel solutions to
                bring customers the trip they desire. All are professionally
                adjusted to suit the needs and bring comfort and convenience to
                travelers, whether they are package tours or independent travel.
              </span>
              <span>Operational criteria</span>
              <span>
                With the motto of bringing the best values ​​to tourists,
                Western Tour always provides the best and most convenient things
                while looking for destinations and experiences with the
                following criteria:
              </span>
              <ul>
                <li>Quality is our top priority.</li>
                <li>Most competitive tour prices.</li>
                <li>Custom-designed tours.</li>
                <li>Daily departures.</li>
                <li>Fast and convenient booking.</li>
                <li>Flexible payment options.</li>
                <li>Comprehensive consultation and support for travelers.</li>
              </ul>
              <strong>Our Achievements</strong>
              <br />
              <span>
                Throughout its operation, <strong>Mekong Delta Tours</strong>{" "}
                has been fortunate to earn the trust and support of over 500,000
                customers. This is a tremendous encouragement and a motivation
                for <strong>Mekong Delta Tours</strong> to continuously improve
                and grow. We always hope to offer our customers the most
                complete and memorable trips to the Mekong Delta.
              </span>

              <div className="image-about-us">
                <img src={banner1} />
              </div>
            </div>

            {/* <div className="form-comment">
              <div className="form-comment-body">
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "600" }}>
                    BÌNH LUẬN BÀI VIẾT
                  </span>
                </div>

                <div className="section-1">
                  <div>
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      1. Nhập họ tên
                    </span>
                    <input type="text" />
                  </div>
                  <div>
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      2. Nhập email
                    </span>
                    <input type="text" />
                  </div>
                  <div>
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      3. Nhập số điện thoại
                    </span>
                    <input type="text" />
                  </div>
                </div>
                <div className="section-2">
                  <div>
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      4. Viết nhận xét của bạn vào bên dưới
                    </span>
                    <textarea type="text" className="message" />
                  </div>
                </div>
                <div className="section-3">
                  <div className="btn-send">
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "rgb(156 204 219)",
                      }}
                    >
                      GỬI NGAY
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="introduce-page-wrapper-body-right">
          <div
            className={`introduce-page-wrapper-body-right-body ${isScrollRight ? "scroll-section-right" : ""}`}
            ref={ref}
          >
            <div className="title">
              <span>TOURS WATCH MORE</span>
            </div>
            <div className="list-tour">
              {getAllTourMainState?.data?.map((item, index) => {
                return (
                  <div
                    className="tour"
                    key={index}
                    onClick={() => history.push(`/tour-detail/${item?._id}`)}
                  >
                    <img
                      src={
                        item?.image?.find((image) => image.type === "banner")
                          ?.url
                      }
                      alt=""
                    />
                    <div>
                      <span>{item?.name}</span>
                      <span>
                        Price:{" "}
                        <span className="price">
                          {item?.base_price_adult?.toLocaleString("vi-VN")} VNĐ
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroducePage;
