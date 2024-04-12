import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: "0", name: "Rust" },
  { id: "1", name: "Python" },
  { id: "2", name: "Javascript" },
]

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer
