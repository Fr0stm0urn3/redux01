import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { deletePost, selectPostById, updatePost } from "../features/posts/postsSlice"
import { useParams, useNavigate } from "react-router-dom"
import { selectAllUsers } from "../features/users/usersSlice"

const EditPostForm = () => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const post = useSelector((state) => selectPostById(state, Number(postId)))
  const users = useSelector(selectAllUsers)

  const [title, setTitle] = useState(post?.title)
  const [content, setContent] = useState(post?.body)
  const [userId, setUserId] = useState(post?.userId)
  const [requestStatus, setRequestStatus] = useState("idle")

  if (!post) {
    return <section>Post not found!</section>
  }

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)
  const onAuthorChange = (e) => setUserId(Number(e.target.value))

  const canSave = [title, content, userId].every(Boolean) && requestStatus === "idle"

  const onSavePostClick = () => {
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
        console.error("Failed to update post", error)
      } finally {
        setRequestStatus("idle")
      }
    }
  }

  const userOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))

  const onDeletePostClick = () => {
    try {
      setRequestStatus("pending")

      dispatch(deletePost({ id: post.id })).unwrap()

      setTitle("")
      setContent("")
      setUserId("")
      navigate("/")
    } catch (error) {
      console.error("Failed to delete the post", error)
    } finally {
      setRequestStatus("idle")
    }
  }

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
          onChange={onTitleChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select name="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" disabled={!canSave} onClick={onSavePostClick}>
          Update Post
        </button>
        <button className="deleteButton" type="button" onClick={onDeletePostClick}>
          Delete
        </button>
      </form>
    </section>
  )
}

export default EditPostForm
