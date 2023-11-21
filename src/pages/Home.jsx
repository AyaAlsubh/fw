import React, { useEffect, useState } from 'react'
import ax from 'axios'
import WorkoutDetalis from '../componnents/WorkoutDetalis'
import WorkoutForm from '../componnents/WorkoutForm'
const Home = () => {
  const [workouts, setWorkouts]=useState([])
  const[show , setShow]=useState(false)
  useEffect(()=>{
const getData=async()=>{
  const res= await ax.get('https://bw1-baxd.onrender.com/api/workout')
  console.log(res.data)
  setWorkouts(res.data)

 }
 getData()
  },[show])
 
  
  return (
    <>
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((work)=>(
          <WorkoutDetalis workout={work} show={show} setShow={setShow} key={work._id}/>
        ))}

      </div>
       <WorkoutForm show={show} setShow={setShow} />
    </div>
    </>
  )
}

export default Home