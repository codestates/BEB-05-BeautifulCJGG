import React from 'react';
import axios from "axios";
import Posts from "../components/Posts";
import {useState, useEffect} from 'react';

export default function PostPage() 
{
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    let result = axios.get(`http://localhost:4000/posts`)
    .then((response)=>{
    if(Array.isArray(response.data)){
      setPosts(response.data);
       }
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);
  return <div>
    <Posts data={posts}></Posts>
    </div>;
}