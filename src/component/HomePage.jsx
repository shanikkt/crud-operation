import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Read from './Read';
import "./styles.css"

const HomePage = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState();
    const navigate = useNavigate();


    const getData = async()=> {
        await axios.get("https://62a8b465943591102ba84f08.mockapi.io/data")
        .then((res)=> {
            //console.log(res.data);
            setData(res.data);
        })
    }

    const handleLogin = () =>{
        setUser(localStorage.getItem("email"));
    }

    const handleLogOut = () =>{
        localStorage.clear("email");
        window.location.reload();
    }

    useEffect(()=>{
        handleLogin();
        getData();
    },[]);

    const handleDelete = (id) => {
        if(user){
            axios.delete(`https://62a8b465943591102ba84f08.mockapi.io/data/${id}`)
            .then(()=>{
                getData();
                alert("Post deleted successfully");
            })
        }else{
            alert("You need to login first")
        }
        
    }
    
    const updatePost = (id,title,content) => {
        if(user){
            localStorage.setItem("id",id);
            localStorage.setItem("title",title);
            localStorage.setItem("content",content);
            navigate("/update") 
        }
        else{
            alert("You need to login first")
        }

    }
    

    console.log(data)

  return (
    <div className='mainDiv'>
        <div className='buttonDiv'>
            {user?<button onClick={()=>navigate("/create")} type="button" className="btn btn-primary">Create Data</button>:null} 
            {user?<button onClick={handleLogOut} type="button" className="btn btn-primary">LogOut</button> 
            :<button onClick={()=>navigate("/login")} type="button" className="btn btn-primary">LogIn</button>} 
        </div>
        
        <h1>HomePage</h1>
        <div className='grid'>
            {data.map((item)=>{
                return (
                <Read 
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                handleDelete={handleDelete}
                updatePost={updatePost}
                />
                )
            })}
        </div>
    </div>
    
  )
}

export default HomePage;