import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import playicon from '../../assets/play.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img className='aboutimg' src={about_img} alt="" />
            <img className='playicon' onClick={()=>{setPlayState(true)}} src={playicon} alt="" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dignissimos voluptatem dolor beatae reiciendis repudiandae expedita, dolorum distinctio commodi, optio in ea veritatis ullam nobis, aut quia minima obcaecati ipsa nemo accusamus est  optio in ea veritatis ullam</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptate commodi nobis culpa, quaerat deleniti suscipit laborum porro ipsa repellendus et pariatur, fuga minus ad odit incidunt facilis earum quod.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, nam voluptatem, delectus suscipit eos amet fugit nihil necessitatibus corrupti ut quo non consequatur numquam deserunt sed dolor laborum, sint saepe.</p>
        </div>
    </div>
  )
}

export default About