import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
  { id: "1", title: "title 1", content: "content 1" },
  { id: "2", title: "title 2", content: "content 2" },
]

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    AddPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
    },
  },
})

export const { AddPost } = postsSlice.actions
export const selectAllPosts = (state) => state.posts
export default postsSlice.reducer
