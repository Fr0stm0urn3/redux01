import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { postsAdded } from "../features/posts/postsSlice"
import { selectAllUsers } from "../features/users/usersSlice"

const AddPostForm = () => {
  const users = useSelector(selectAllUsers)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("")
  const dispatch = useDispatch()
  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleContentChange = (e) => setContent(e.target.value)
  const handleUserIdChange = (e) => setUserId(e.target.value)

  const selectAuthor = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))

  const canSave = [title, content, userId].every(Boolean)

  const handlePostSaveClick = () => {
    if (canSave) {
      dispatch(postsAdded(title, content, userId))

      setTitle("")
      setContent("")
      setUserId("")
    }
  }

  return (
    <section>
      <h2>Add Post</h2>
      <form>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          name="postAuthor"
          id="postAuthor"
          value={userId}
          onChange={handleUserIdChange}
        >
          <option value=""></option>
          {selectAuthor}
        </select>
        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          name="postContent"
          id="postContent"
          value={content}
          onChange={handleContentChange}
        />
        <button type="button" disabled={!canSave} onClick={handlePostSaveClick}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
