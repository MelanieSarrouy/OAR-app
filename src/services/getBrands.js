import {
  brandsListError,
  brandsListLoading,
  brandsListSuccess,
} from '../Redux/actions/actionGetBrands'


const url = './data/data-brand.json'

export const getBrands = async (store) => {
  store.dispatch(brandsListLoading())
  async function fetchData() {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => store.dispatch(brandsListSuccess(data.data)))
    } catch (err) {
      store.dispatch(brandsListError(err.message))
    }
  }
  fetchData()
}
