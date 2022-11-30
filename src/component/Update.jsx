import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();


    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setTitle(localStorage.getItem("title"));
        setContent(localStorage.getItem("content"));
    },[]);

    const handleUpdate = (e)=> {
        e.preventDefault();
        axios.put(`https://62a8b465943591102ba84f08.mockapi.io/data/${id}`,{
            title,
            content
        }).then(()=>{
            navigate("/")
        })
    }
  return (
    <div className='mainDiv'>
        <h1>Update Post</h1>
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <input type="text" className="form-control" value={content} onChange={(e)=>setContent(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update