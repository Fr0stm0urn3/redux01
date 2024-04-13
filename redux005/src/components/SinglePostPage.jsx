import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"
import { useSelector } from "react-redux"
import { selectPostById } from "../features/posts/postsSlice"
import PostAuthor from "./PostAuthor"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useSelector((state) => selectPostById(state, Number(postId)))

  if (!post) {
    return <section>Post not found!</section>
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 75)}</p>
      <div className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  )
}

export default SinglePostPage
