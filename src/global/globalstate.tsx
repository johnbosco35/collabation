import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "" || null, 
}

const globalstate = createSlice({
  name: "second",
  initialState,
  reducers: {
    user: (state, { payload }) => {
        state.user = payload
    },

    logOut: (state) => {
        state.user = null
    },
    
  }
});

export const {} = globalstate.actions

export default globalstate.reducer