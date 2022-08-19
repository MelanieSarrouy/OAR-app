// IMPORTS // ______________________________________________________________

import { createAction } from '@reduxjs/toolkit'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions get user
 * @reduxAction
 */

export const facilitiesListLoading = createAction('facilities-list-loading')

export const facilitiesListSuccess = createAction('facilities-list-success', (facilities) => {
  return {
    payload: facilities,
  }
})

export const facilitiesListError = createAction('facilities-list-error', (error) => {
  return {
    payload: error,
  }
})

export const editFacilitiesList = createAction('edit-facilities-list', (facilities) => {
  return {
    payload: facilities,
  }
})

