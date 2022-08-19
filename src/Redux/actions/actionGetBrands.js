// IMPORTS // ______________________________________________________________

import { createAction } from '@reduxjs/toolkit'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions get user
 * @reduxAction
 */

export const brandsListLoading = createAction('brands-list-loading')

export const brandsListSuccess = createAction('brands-list-success', (brands) => {
  return {
    payload: brands,
  }
})

export const brandsListError = createAction('brands-list-error', (error) => {
  return {
    payload: error,
  }
})

export const editBrandsList = createAction('edit-brands-list', (brands) => {
  return {
    payload: brands,
  }
})

