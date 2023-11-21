import React, { useState } from 'react'
import axios from 'axios'

const WorkoutForm = ({show, setShow}) => {
  const[title, setTitle]=useState('')
  const[load, setLoad]=useState('')
  const[reps, setReps]=useState('')
  const [error, setError]=useState('')
  const hanleSubmit=async(e)=>{
    e.preventDefault()
    setError('')
    try {
      await axios.post('https://bw1-baxd.onrender.com/api/workout/',{title,load,reps})
      setShow(!show)
      setTitle('')
      setLoad('')
      setReps('')
    } catch (error) {
      setError('please Fill out all fields')
    }

  }
  return (
   <form className='create'onSubmit={hanleSubmit}>
<h3>Add a New Workout</h3>
    <label> Exrcersize Title:</label>
    <input type='text' onChange={(e)=> setTitle(e.target.value)} value={title}/>
    <label >Load (in kg):</label>
    <input type='number' onChange={(e)=> setLoad(e.target.value)} value={load}/>
    <label>Reps</label>
    <input type='number' onChange={(e)=> setReps(e.target.value)} value={reps}/>

<button>Add Workout</button>
{error && <div className='error'>{error}</div>}
   </form>
  )
}

export default WorkoutForm