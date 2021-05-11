import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
});


/*The Root-reducer is an object that has a property of user that points to
our userReducer that is just now our initial state(see user.reducer.js).*/