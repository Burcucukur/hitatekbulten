import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: ['burcu'],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log('AAA', action.payload);
      state.userData = action.payload;
    },
  },
});

export const getAuthData = state => state.auth;

export const {setUserData} = authSlice.actions;

export default authSlice.reducer;
