import { all } from "redux-saga/effects";
import auth from "./auth/saga";
import user from "./user/saga";
import product from "./product/saga";
import order from "./order/saga";
import food from "./food/saga";
import categoryBlog from "./categoryBlog/saga";
import categoryTour from "./categoryTour/saga";
import blog from "./blog/saga";
import tour from "./tour/saga";
import booking from "./booking/saga";
import comment from "./comment/saga";

export default function* rootSaga() {
  yield all([
    auth(),
    user(),
    product(),
    order(),
    food(),
    categoryBlog(),
    categoryTour(),
    blog(),
    tour(),
    booking(),
    comment(),
  ]);
}
