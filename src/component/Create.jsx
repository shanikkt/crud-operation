import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css"

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    // console.log(title,content)

    const header = {"Access-Control-Allow-Origin":"*"};

    const handleSubmit = (e) => {
        console.log("submit")
        e.preventDefault();
        axios.post(
            "https://62a8b465943591102ba84f08.mockapi.io/data",{
                title,
                content,
                header,  
        }).then(()=>{
            alert("Post Submit")
            setTitle("");
            setContent("");
            navigate("/")
        })
        
    }

  return (
    <div className='mainDiv'>
        <div className='buttonDiv'>
            <button onClick={()=>navigate("/")} type="button" className="btn btn-primary">Show Posts</button> 
            <button onClick={()=>navigate("/login")} type="button" className="btn btn-primary">LogIn</button> 
        </div>
        <h1>Create Post</h1>
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <input type="text" className="form-control" onChange={(e)=>setContent(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}
// https://62a8b465943591102ba84f08.mockapi.io/data
export default Create