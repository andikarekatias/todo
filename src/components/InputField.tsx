import React from 'react'
import IconPencilSquare from './svg/IconPencilSquare';

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}
const InputField: React.FC<Props> = ( {todo, setTodo, handleAdd} ) => {
  return (
    <form className='w-11/12' onSubmit={handleAdd}>
        <label className="input input-bordered flex items-center gap-2 pr-0">
            Todo
            <input type="text" className="grow" placeholder="..." value={todo} onChange={(e) => setTodo(e.target.value)}/>            
            <button className='btn btn-primary flex items-center gap-2' type='submit'>
                <IconPencilSquare className='h-4 w-4 opacity-70'/>
                Add
            </button>
        </label>    
    </form>
  )
}

export default InputField