import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  MY_ORDERS_LIST_REQUEST,
  MY_ORDERS_LIST_SUCCESS,
  MY_ORDERS_LIST_FAIL,
  MY_ORDERS_LIST_RESET,
  PAYMENTS_LIST_REQUEST,
  PAYMENTS_LIST_SUCCESS,
  PAYMENTS_LIST_FAIL,
} from "../constants/orderConstants";
import axios from "axios";
import axiosInstance from "../axiosAPI";

import { CART_CLEAR_ITEMS } from "../constants/cartConstants";

export const createOrder = (order) => async (dispatch,getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    const { data } = await axios.post("http://127.0.0.1:8000/api/orders/create/", order,config);
    console.log(data);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });

    dispatch({ type: CART_CLEAR_ITEMS });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const { data } = await axios.get(`http://127.0.0.1:8000/api/orders/${id}`);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error });
  }
};

export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDERS_LIST_REQUEST });
    const { data } = await axios.get("http://127.0.0.1:8000/api/orders/");
    dispatch({ type: MY_ORDERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MY_ORDERS_LIST_FAIL, payload: error });
  }
};

export const getPaymentMethods = () => async(dispatch)=>{
  try{
    dispatch({type:PAYMENTS_LIST_REQUEST});
    const { data } = await axios.get("http://127.0.0.1:8000/api/orders/payment-methods/all/");
    dispatch({type:PAYMENTS_LIST_SUCCESS,payload:data});
  }
  catch(error){
    dispatch({type:PAYMENTS_LIST_FAIL,payload:error});

  }
}