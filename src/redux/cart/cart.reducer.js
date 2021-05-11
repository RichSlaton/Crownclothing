import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
};

/*Initial state is set to a boolean. The hidden value is set to true.The reason
why we want to hide this our dropdown when a user first comes to the webkitRequestAnimationFrame.*/

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};


/*This cartReducer has been set globally (global Redux state). The default value is the INITIAL_STATE.
We created an action with a switch statement so that when this action takes palce there is a trigger
for our dropdown to hide. There is a toggle function set to the icon that shows the cart when clicked.
Bang statement toggles between true and false, hidden and shown*/

export default cartReducer;
