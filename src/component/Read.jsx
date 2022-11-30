import React from 'react';

const Read = ({id,title,content,handleDelete,updatePost}) => {


  return (
        <div className='childDiv'>
            <div className='titleDiv'>
                <h4>Title</h4>
                <p>{title}</p>
            </div>
            <div className='contentDiv'>
                <h4>Content</h4>
                <p>{content}</p>
            </div>
            <div>
                <button type="button" className="btn btn-success" onClick={()=>updatePost(id,title,content)}>Update</button> 
                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        </div>            
  )
}

export default Read