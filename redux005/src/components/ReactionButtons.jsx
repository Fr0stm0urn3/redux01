import { useDispatch } from "react-redux"
import { reactionsAdded } from "../features/posts/postsSlice"

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={() => dispatch(reactionsAdded({ postId: post.id, reaction: name }))}
    >
      {emoji} {post.reactions[name]}
    </button>
  ))

  return <div>{reactionButtons}</div>
}

export default ReactionButtons