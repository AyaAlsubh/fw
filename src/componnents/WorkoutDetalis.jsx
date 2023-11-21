import React from 'react'
import ftoNow from 'date-fns/formatDistanceToNow'
import axios from 'axios'


function WorkoutDetalis  ({workout ,show,setShow}) {
  const handleDelete= async()=>{
    await axios.delete('https://bw1-baxd.onrender.com/api/workout/'+ workout._id)
    setShow(!show)
  }
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>load (kg)</strong>{workout.load}</p>
      <p><strong>Number of reps:</strong>{workout.reps}</p>
      <p>{ftoNow(new Date(workout.createdAt),{addSuffix:true})}</p>
      <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
    </div>
  )
}

export default WorkoutDetalis