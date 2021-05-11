const INITIAL_STATE = {
    currentUser: null
}


const userReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
             ...state, 
             currentUser: action.payload
            }

        default:
            return state;
    }
}

//userReducer is a default parameter value/initial state
export default userReducer;

/*Create the action that triggers the correct case of our swtich statement
'SET_CURRENT_USER' is the action that we expect it to be so it sets the current 
user value inside our userReducer object as the payload of this action object
we are going to create action creator functions. See User folder and file 
user.actions.js*/