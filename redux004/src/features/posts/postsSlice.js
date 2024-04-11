import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: "1", title: "Title 1", content: "Content 1" },
  { id: "2", title: "Title 2", content: "Content 2" },
]

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
})

export const {} = postsSlice.actions

export default postsSlice.reducer
