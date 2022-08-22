import { createReducer } from "@reduxjs/toolkit"
import { countrySelected, oarSelected } from "../actions/actionResults"

const initialStateGetResults = {
  country: '',
  oar: ''
}

export const getResultsReducer = createReducer(initialStateGetResults, (builder) => {
  return builder
    .addCase(countrySelected, (draft, action) => {
      draft.country = action.payload
      return
    })
    .addCase(oarSelected, (draft, action) => {
      draft.oar = action.payload
      return
    })
  })
