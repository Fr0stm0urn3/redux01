import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { postAdded } from "../features/posts/postsSlice"
import { selectAllUsers } from "../features/users/usersSlice"

const AddPostForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("")

  const users = useSelector(selectAllUsers)

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleContentChange = (e) => setContent(e.target.value)
  const handleAuthorChange = (e) => setUserId(e.target.value)

  const handlePostSave = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))

      setTitle("")
      setContent("")
    }
  }
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTItle"
          id="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          name="postAuthor"
          id="postAuthor"
          value={userId}
          onChange={handleAuthorChange}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button type="button" onClick={handlePostSave} disabled={!canSave}>
          Add
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
