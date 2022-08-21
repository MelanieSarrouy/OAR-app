// IMPORTS // ______________________________________________________________

import { createReducer } from '@reduxjs/toolkit'
import { brandsListError, brandsListLoading, brandsListSuccess, editBrandsList } from '../actions/actionGetBrands'


// REDUCER // ______________________________________________________________

const initialStateGetBrands = {
  isLoading: false,
  brands: [],
  brandsFiltered: [],
  error: null,
}

export const getBrandsReducer = createReducer(initialStateGetBrands, (builder) => {
  return builder
    .addCase(brandsListLoading, (draft) => {
      draft.isLoading = true
      return
    })
    .addCase(brandsListSuccess, (draft, action) => {
      draft.isLoading = false
      draft.brands = action.payload
      draft.error = ''
      return
    })
    .addCase(brandsListError, (draft, action) => {
      draft.isLoading = false
      draft.brands = []
      draft.error = action.payload
      return
    })
    .addCase(editBrandsList, (draft, action) => {
      draft.isLoading = false
      draft.brandsFiltered = action.payload
      draft.error = ''
      return
    })

})
