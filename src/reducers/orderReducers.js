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

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const myOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case MY_ORDERS_LIST_REQUEST:
      return {
        loading: true,
      };
    case MY_ORDERS_LIST_SUCCESS:
      return {
        loading: false,
        myOrdersList: action.payload,
      };
    case MY_ORDERS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const paymentMethodsReducer = (state = { paymentsList: [] },action) =>{
  switch(action.type){
    case PAYMENTS_LIST_REQUEST:
      return {
        loading:true,
        paymentsList:[]
      }
    case PAYMENTS_LIST_SUCCESS:
      return {
        success:true,
        loading:false,
        paymentsList:action.payload,
      }
    
      case PAYMENTS_LIST_FAIL:
        return{
          success:false,
          loading:false,
          error:action.payload,
        }

    default:
      return state;


  }
}
