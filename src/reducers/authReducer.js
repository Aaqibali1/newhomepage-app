const initialState = {
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      // Add your authentication related actions
      default:
        return state;
    }
  };
  
  export default authReducer;
  