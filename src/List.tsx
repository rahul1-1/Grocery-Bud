import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
interface IProps{
  items:{
    id:string,
    title:string,
  }[],
  removeItem:(id:string)=>void,
  editItem:(id:string)=>void
  
}
const List:React.FC<IProps> = ({items,removeItem,editItem}) => {
  return (
    <div className="grocery-list">
      {items.map((item)=>{
        const {id,title} = item
        return (
          <article key={id} className ="grocery-item">
            <p className="title">{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
