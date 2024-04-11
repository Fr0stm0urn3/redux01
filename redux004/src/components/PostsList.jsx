import { useSelector } from "react-redux"
import { selectAllPosts } from "../features/posts/postsSlice"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const postsContent = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {postsContent}
    </section>
  )
}

export default PostsList
