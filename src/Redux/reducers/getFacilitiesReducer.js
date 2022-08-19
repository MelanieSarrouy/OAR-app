// IMPORTS // ______________________________________________________________

import { createReducer } from '@reduxjs/toolkit'
import {
  editFacilitiesList,
  facilitiesListError,
  facilitiesListLoading,
  facilitiesListSuccess,
} from '../actions/actionGetFacilities'

// REDUCER // ______________________________________________________________

const initialStateGetFacilities = {
  isLoading: false,
  facilities: [],
  facilitiesFiltered: [],
  error: null,
}

export const getFacilitiesReducer = createReducer(initialStateGetFacilities, (builder) => {
  return builder
    .addCase(facilitiesListLoading, (draft) => {
      draft.isLoading = true
      return
    })
    .addCase(facilitiesListSuccess, (draft, action) => {
      draft.isLoading = false
      draft.facilities = action.payload
      draft.error = ''
      return
    })
    .addCase(facilitiesListError, (draft, action) => {
      draft.isLoading = false
      draft.facilities = []
      draft.error = action.payload
      return
    })
    .addCase(editFacilitiesList, (draft, action) => {
      draft.isLoading = false
      draft.facilitiesFiltered = action.payload
      draft.error = ''
      return
    })
})
