// IMPORTS // ______________________________________________________________

import { configureStore } from '@reduxjs/toolkit'
import { getBrandsReducer } from '../reducers/getBrandsReducer'
import { getFacilitiesReducer } from '../reducers/getFacilitiesReducer'

// STORE // ______________________________________________________________

export const store = configureStore({
  reducer: {
    getBrands: getBrandsReducer,
    getFacilities: getFacilitiesReducer
  },
})
