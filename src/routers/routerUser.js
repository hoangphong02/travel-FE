import { v4 as uuidv4 } from "uuid";
import { routesUser } from "~/configs";
import {
  UserHomePage,
  IntroducePage,
  PriceTourPage,
  ContactPage,
  BookingPage,
  TourPage,
  TourDetailPage,
  BlogsPage,
  PicturePage,
  BlogDetailPage,
  BlogOfListPage,
} from "~/pages/User";
import TourOfListPage from "~/pages/User/TourOfList";
import WorkSchedulePage from "~/pages/User/WorkSchedule";

export const routerUser = [
  {
    id: `user-${uuidv4()}`,
    path: routesUser.home,
    component: UserHomePage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.introduce,
    component: IntroducePage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.tablePriceTour,
    component: PriceTourPage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.contact,
    component: ContactPage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.booking,
    component: BookingPage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.tour,
    component: TourPage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.tourOfList,
    component: TourOfListPage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.tourDetail,
    component: TourDetailPage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.blogs,
    component: BlogsPage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.blogsOfList,
    component: BlogOfListPage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.picturePage,
    component: PicturePage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.blogDetail,
    component: BlogDetailPage,
  },
  {
    id: `user-${uuidv4()}`,
    path: routesUser.WorkSchedule,
    component: WorkSchedulePage,
  },
];
