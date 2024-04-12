import { useDispatch } from "react-redux"
import { reactionAdded } from "../features/posts/postsSlice"

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      type="button"
      className="reactionButton"
      onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
      key={name}
    >
      {emoji} {post.reactions[name]}
    </button>
  ))

  return <div>{reactionButton}</div>
}

export default ReactionButtons
