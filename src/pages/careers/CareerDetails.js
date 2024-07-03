import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const {id} = useParams();
    const career = useLoaderData()
  return (
    <div className='career-details'>
     <h2>Career Details for {career.detail}</h2>
     <p>Starting Salary : {career.salary}</p>
     <p>Location : {career.location}</p>
     <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi est perferendis sed laudantium rem nam voluptas quam dolores quia, nisi libero! Voluptatem aut nemo quas excepturi explicabo eaque quo!
     </div>
    </div>
  )
}

// loader function
export const careerDetailsLoader = async ({ params })=>{
    const { id } = params

    const res = await fetch('http://localhost:4000/careers/' + id)

    if(!res.ok){
        throw Error('Could not find that career')
    }

    return res.json()
}
