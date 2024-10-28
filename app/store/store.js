const { configureStore } = require("@reduxjs/toolkit");
import subscriptionPlanReducer from "./subscriptionPlanSlice.js";
const store = configureStore({
    reducer: {
        subscriptionPlan :subscriptionPlanReducer
    }
})

export default store;