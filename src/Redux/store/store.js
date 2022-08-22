// IMPORTS // ______________________________________________________________

import { configureStore } from '@reduxjs/toolkit'
import { getBrandsReducer } from '../reducers/getBrandsReducer'
import { getFacilitiesReducer } from '../reducers/getFacilitiesReducer'
import { getResultsReducer } from '../reducers/getResultsReducer'

// STORE // ______________________________________________________________

export const store = configureStore({
  reducer: {
    getBrands: getBrandsReducer,
    getFacilities: getFacilitiesReducer,
    getResults: getResultsReducer
  },
})
