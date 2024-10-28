const { createSlice } = require("@reduxjs/toolkit");

const subscriptionPlanSlice = createSlice({
  name: "subscriptionPlan",
  initialState: {
    currentSubscriptionPlan: "monthly",
  },
  reducers: {
    monthlySubscription: (state) => {
      state.currentSubscriptionPlan = "monthly";
    },
    yearlySubscription: (state) => {
      state.currentSubscriptionPlan = "yearly";
    },
  },
});
export const { monthlySubscription, yearlySubscription } =
  subscriptionPlanSlice.actions;
export default subscriptionPlanSlice.reducer;
