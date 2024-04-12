import { useSelector, useDispatch } from "react-redux"
import { selectAllUsers } from "../features/users/usersSlice"
import { addNewPost } from "../features/posts/postsSlice"
import { useState } from "react"

const AddPostForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [usersIds, setUsersIds] = useState("")
  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const users = useSelector(selectAllUsers)

  const dispatch = useDispatch()

  const canSave = [title, content, usersIds].every(Boolean) && addRequestStatus === "idle"

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending")
        dispatch(addNewPost({ title, body: content, usersIds })).unwrap()

        setTitle("")
        setContent("")
        setUsersIds("")
      } catch (error) {
        console.error("Failed to save the post", error)
      } finally {
        setAddRequestStatus("idle")
      }
    }
  }

  const userOptions = users.map((user) => {
    return (
      <option value={user.id} key={user.id}>
        {user.name}
      </option>
    )
  })

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setUsersIds(e.target.value)

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          name="postAuthor"
          id="postAuthor"
          value={usersIds}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
