import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectAllUsers } from "../features/users/usersSlice"
import { addNewPost } from "../features/posts/postsSlice"
import { useNavigate } from "react-router-dom"

const AddPostForm = () => {
  const users = useSelector(selectAllUsers)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("")
  const [addRequestStatus, setAddRequestStatus] = useState("idle")
  const dispatch = useDispatch()
  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleContentChange = (e) => setContent(e.target.value)
  const handleUserIdChange = (e) => setUserId(e.target.value)
  const navigate = useNavigate()

  const selectAuthor = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === "idle"

  const handlePostSaveClick = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending")
        dispatch(addNewPost({ title, userId, body: content })).unwrap()

        setTitle("")
        setContent("")
        setUserId("")
        navigate(`/`)
      } catch (error) {
        console.error("Failed to fetch data", error)
      } finally {
        setAddRequestStatus("idle")
      }
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
