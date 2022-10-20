import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../constants/wishlistConstants";

export const wishlistReducer = (state = { wishlistitems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        wishlistitems: action.payload,
      };

    default:
      return state;
  }
};
