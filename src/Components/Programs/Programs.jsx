import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'
import graduation from '../../assets/graduation.png'
import masters from '../../assets/masters.png'
import postgraduation from '../../assets/postgraduation.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <img src={graduation} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={masters} alt="" />
                <p>Master's Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={postgraduation} alt="" />
                <p>Post Graduation Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs