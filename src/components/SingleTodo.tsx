import React from 'react'
import { Todo } from '../model'
import IconPencilSquare from './svg/IconPencilSquare'
import IconTrash from './svg/IconTrash'
import IconCheck from './svg/IconCheck'

type Props = {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({todo, todos, setTodos}: Props) => {
    const handleDone = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {
                ...todo, 
                isDone: !todo.isDone
            } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
    <form className='w-full md:w-[45%]'>
        <div className="card bg-base-100 image-full w-full shadow-xl m-1">        
            <div className="card-body grid grid-cols-6"> 
                { 
                    todo.isDone ? (
                        <div className='col-span-5 line-through text-red-500'>
                            {todo.todo}
                        </div>
                    ):(
                        <div className='col-span-5'>
                            {todo.todo}
                        </div>
                    )
                }                           
                <div className='col-span-1 flex justify-end'>
                    <span className='cursor-pointer hover:text-primary'><IconPencilSquare className='size-5'/></span>
                    <span className='cursor-pointer hover:text-error' onClick={() => handleDelete(todo.id)}><IconTrash className='size-5'/></span>
                    <span className='cursor-pointer hover:text-info' onClick={() => handleDone(todo.id)}><IconCheck className='size-5'/></span>
                </div>
            </div>
        </div>
    </form>
  )
}

export default SingleTodo