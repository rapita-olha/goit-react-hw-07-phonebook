import { createReducer } from "@reduxjs/toolkit";

import { changeFilter } from "./filter-actions";

export const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
