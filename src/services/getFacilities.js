import { facilitiesListError, facilitiesListLoading, facilitiesListSuccess } from "../Redux/actions/actionGetFacilities"

const url = './data/data-facilities.json'

export const getFacilities = async (store) => {
  store.dispatch(facilitiesListLoading())
  async function fetchData() {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => store.dispatch(facilitiesListSuccess(data.data)))
    } catch (err) {
      store.dispatch(facilitiesListError(err.message))
    }
  }
  fetchData()
}
