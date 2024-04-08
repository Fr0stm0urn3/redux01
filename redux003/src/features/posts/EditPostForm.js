import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectPostById, updatePost, deletePost } from "./postsSlice"
import { useParams, useNavigate } from "react-router-dom"

import { selectAllUsers } from "../users/usersSlice"

const EditPostForm = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  const post = useSelector((state) => selectPostById(state, Number(postId)))
  const users = useSelector(selectAllUsers)

  const [title, setTitle] = useState(post?.title)
  const [content, setContent] = useState(post?.body)
  const [userId, setUserId] = useState(post?.userId)
  const [requestStatus, setRequestStatus] = useState("idle")

  const dispatch = useDispatch()

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setUserId(Number(e.target.value))

  const canSave = [title, content, userId].every(Boolean) && requestStatus === "idle"

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending")
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap()

        setTitle("")
        setContent("")
        setUserId("")
        navigate(`/post/${postId}`)
      } catch (error) {
        console.error("Failed to save the post", error)
      } finally {
        setRequestStatus("idle")
      }
    }
  }

  const onDeletePostClicked = () => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return
    }
    try {
      setRequestStatus("pending")
      dispatch(deletePost({ id: post.id })).unwrap()

      setTitle("")
      setContent("")
      setUserId("")
      navigate("/")
    } catch (error) {
      console.error("Failed to Delete the Post", error)
    } finally {
      setRequestStatus("idle")
    }
  }

  const usersOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" defaultValue={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
        <button type="button" onClick={onDeletePostClicked} className="deleteButton">
          Delete Post
        </button>
      </form>
    </section>
  )
}

export default EditPostForm