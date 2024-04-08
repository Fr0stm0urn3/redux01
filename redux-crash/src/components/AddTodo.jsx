import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"

const AddTodo = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 m-12 ">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus-ring-indigo-900 text-base outline-none focus:outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
    "
        placeholder="Enter a Todo..."
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition hover:scale-95 duration-200"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
