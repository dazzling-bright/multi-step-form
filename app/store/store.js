const { configureStore } = require("@reduxjs/toolkit");
import subscriptionPlanReducer from "./store-slices/subscriptionPlanSlice.js";
import pageNumberReducer from "./store-slices/pageNumberSlice.js";
const store = configureStore({
  reducer: {
    subscriptionPlan: subscriptionPlanReducer,
    pageNumber: pageNumberReducer
  },
});

export default store;
