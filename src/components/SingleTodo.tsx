import React, { useEffect } from 'react'
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

    const [edit, setEdit] = React.useState<boolean>(false)
    const [editTodo, setEditTodo] = React.useState<string>(todo.todo)    

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(todos.map(todo => 
            todo.id === id ? {
                ...todo, 
                todo: editTodo
            } : todo))
        setEdit(false)
    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleDone = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {
                ...todo, 
                isDone: !todo.isDone
            } : todo))
    }

    const inputRef = React.useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

  return (
    <form className='w-full md:w-[45%]' onSubmit={(e) => handleEdit(e, todo.id)}>
        <div className="card bg-base-100 image-full w-full shadow-xl m-1">        
            <div className="card-body grid grid-cols-6"> 
                { 
                    edit ? (
                        <input className='col-span-5 input w-full max-w-xs' ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>
                    ) : todo.isDone ? (
                        <div className='col-span-5 line-through text-red-500'>
                            {todo.todo}
                        </div>
                    ) : (
                        <div className='col-span-5'>
                            {todo.todo}
                        </div>
                    )
                }                           
                <div className='col-span-1 flex justify-end items-center'>
                    <span className='cursor-pointer hover:text-primary'
                        onClick={() => {
                            if(!edit && !todo.isDone){
                                setEdit(!edit)
                            }                            
                        }}
                    >
                        <IconPencilSquare className='size-5'/>
                    </span>
                    <span className='cursor-pointer hover:text-error' onClick={() => handleDelete(todo.id)}><IconTrash className='size-5'/></span>
                    <span className='cursor-pointer hover:text-info' onClick={() => handleDone(todo.id)}><IconCheck className='size-5'/></span>
                </div>
            </div>
        </div>
    </form>
  )
}

export default SingleTodo