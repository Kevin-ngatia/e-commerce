import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const[loading,SetLoading]=useState(true);
  const[jobs,setJobs]=useState([]);
  const[value,setValue]=useState(0);
  const fetchJobs=async()=>{
    const response=await fetch(url);
    const newJobs=await response.json();
    setJobs(newJobs);
    SetLoading(false);
  }; 
 useEffect(()=>{
   fetchJobs();
 },[])

if(loading){
  return (<section className='section loading'>
    <h1>loading...</h1>
  </section>);
}
  return <h2>Jobs</h2>
}

export default App
