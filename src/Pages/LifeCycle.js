import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';
export default function LifeCycle() {
   // At the beginning, posts is an empty array
   const [posts, setPosts] = useState([]);
   const [data,setData]=useState('Rajbir')

   const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };
    useEffect(() => {
      fetchData(); // Mounting
      return ()=>{
// unmounting....
      }
      
      },[data]);
console.log(posts)

const changeValue=()=>{
  setData("Ramandeep")
}
  return (
    <div>LifeCycle Method in functional Component
    <h2 class="text-black">{data}</h2>
    <button onClick={changeValue}>Change State Value</button>
    
    </div>
  )
}
