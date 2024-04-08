import React from 'react'
import './Contact.css'
import msg from '../../assets/message.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import arrow from '../../assets/arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "79141ede-4f97-444c-8f87-804a23aa4950");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg} alt="" /></h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium id maxime exercitationem cupiditate nam. Esse veniam vitae praesentium saepe ducimus consequuntur, perferendis in! Praesentium id maxime exercitationem cupiditate nam</p>
          <ul>
            <li><img src={mail} alt="" />abcd@gmail.com</li>
            <li><img src={phone} alt="" />+92-1234-123456789</li>
            <li><img src={location} alt="" />13th Street Kill Devil Hills, <br/> NC 27948, USA
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label >Phone Number</label>
            <input type="text" name='phone' placeholder='Enter your phone number' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now<img src={arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact