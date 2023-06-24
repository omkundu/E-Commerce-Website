import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount, fetchLoggedInUser } from './userAPI';

const initialState = {
  userInfo: 0,
  status: 'idle',
};


export const fetchLoggedInUserAsync = createAsyncThunk(
  'user/fetchLoggedInUser',
  async (amount) => {
    const response = await fetchLoggedInUser(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
    
      state.value += 1;
    },
  },
   
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        //this info can be different or more from logged-in User info
        state.userInfo = action.payload;
      });
  },
});

export const { increment} = userSlice.actions;


export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default userSlice.reducer;
