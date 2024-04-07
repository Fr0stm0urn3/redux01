import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { postAdded } from "./postsSlice"
import { selectAllUsers } from "../users/usersSlice"

const AddPostForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [usersIds, setUsersIds] = useState("")

  const users = useSelector(selectAllUsers)

  const dispatch = useDispatch()

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, usersIds))

      setTitle("")
      setContent("")
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(usersIds)

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
