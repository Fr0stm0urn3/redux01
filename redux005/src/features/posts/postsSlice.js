import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns"

const initialState = [
  {
    id: "1",
    title: "Title 1",
    content: "content 1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Title 2",
    content: "content 2",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
]

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        }
      },
    },
    reactionsAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
  },
})

export const { addPost, reactionsAdded } = postsSlice.actions
export const selectAllPosts = (state) => state.posts
export default postsSlice.reducer
