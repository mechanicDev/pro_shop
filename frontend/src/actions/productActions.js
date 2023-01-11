import PRODUCT_LIST from '../constants/productConstants';
import axios from 'axios';

export const listProducts = () => async(dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST.REQUEST})

    const {data} = await(axios.get("/api/products"))

    dispatch({
      type: PRODUCT_LIST.SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST.FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message ? error.message;
    })
  }
}