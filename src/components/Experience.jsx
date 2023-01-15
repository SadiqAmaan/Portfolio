import React from 'react'
import data from '../assets/data.json'

const Experience = () => {
  return (
    <div id='experience'>
      <div className="exp-box">
{
  data.projects.map ((item, index)=>(
  <ExpItem  heading={item.title}  text={item.date} index={index} key={item.title}/>
    ))
}


      </div>
    </div>
  )
}


const ExpItem = ({heading, text, index})=>(
<div className={`expItem ${index % 2===0? "leftExp": "rightexp"}`}>
<div>
<h2>{heading}</h2>
<p>{text}</p>
</div>
</div>
)

export default Experience
