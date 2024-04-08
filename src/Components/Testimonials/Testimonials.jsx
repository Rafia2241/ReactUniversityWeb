import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next.png'
import back from '../../assets/back.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'
const Testimonials = () => {

    const slider = useRef();
    let tx = 0; // which is translateX
    const slideForward = ()=>{  
       if(tx > -50){
        tx -= 25; // 0 reduce by 25 then again by 25, it becomes 50
       }
       slider.current.style.transform = `translateX(${tx}%)`
      } 
    const slideBackward = ()=>{  
        if(tx < 0){
            tx += 25;
           }
           slider.current.style.transform = `translateX(${tx}%)`
      } 
  return (
    <div className='testimonials'>
          <img className='next-btn' src={next} alt="next" onClick={slideForward}/>
          <img className='back-btn' src={back} alt="back" onClick={slideBackward}/>
          <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Aina Jackson</h3>
                                <span>Univeristy of USA</span>
                                </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur distinctio recusandae cupiditate itaque autem! Deserunt harum dolor ad perferendis sapiente, expedita officiis qui at maiores temporibus atque aliquam officia iusto enim optio voluptatibus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Bella Watson</h3>
                                <span>Univeristy of USA</span>
                                </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur distinctio recusandae cupiditate itaque autem! Deserunt harum dolor ad perferendis sapiente, expedita officiis qui at maiores temporibus atque aliquam officia iusto enim optio voluptatibus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>John Adham</h3>
                                <span>Univeristy of USA</span>
                                </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur distinctio recusandae cupiditate itaque autem! Deserunt harum dolor ad perferendis sapiente, expedita officiis qui at maiores temporibus atque aliquam officia iusto enim optio voluptatibus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Vicky Thomson</h3>
                                <span>Univeristy of USA</span>
                                </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur distinctio recusandae cupiditate itaque autem! Deserunt harum dolor ad perferendis sapiente, expedita officiis qui at maiores temporibus atque aliquam officia iusto enim optio voluptatibus.</p>
                    </div>
                </li>
                
            </ul>
          </div>
    </div>
  )
}

export default Testimonials