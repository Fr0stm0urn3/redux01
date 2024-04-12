import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: "0", name: "Rust" },
  { id: "1", name: "Javascript" },
  { id: "2", name: "Python" },
]

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer
