import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

const Todos = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todo.todos)

  return (
    <>
      <div className="text-center text-bold text-3xl mb-10">Todos</div>
      <ul className="list-none space-y-10">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="text-white max-w-md mx-auto flex font-mono justify-between items-center bg-gray-800  py-1 px-4 focus:outline-none  rounded-xl "
          >
            <div>{todo.text}</div>
            <button
              className="bg-orange-700 py-2 px-3 rounded-full hover:scale-95 transition duration-300"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              DLT
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
