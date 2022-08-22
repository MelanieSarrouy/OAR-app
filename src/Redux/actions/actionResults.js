import { createAction } from "@reduxjs/toolkit"

export const countrySelected = createAction('country-selected', (country) => {
  return {
    payload: country,
  }
})
export const oarSelected = createAction('oar-selected', (oar) => {
  return {
    payload: oar,
  }
})
