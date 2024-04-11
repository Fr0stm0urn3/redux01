import { useDispatch } from "react-redux"
import { useState } from "react"
import { AddPost } from "../features/posts/postsSlice"

const AddPostForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleContentChange = (e) => setContent(e.target.value)

  const handlePostSave = () => {
    if (title && content) {
      dispatch(AddPost(title, content))

      setTitle("")
      setContent("")
    }
  }

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
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button type="button" onClick={handlePostSave}>
          Add
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
