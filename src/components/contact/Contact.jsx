import { useState } from "react";
import "./contact.scss";




const Contact = props =>  {
    const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    //   <h1>TEST</h1>
      <div className="contact" id="contact">
      <div className="left">
        <img src="assets/purpleDiamonds.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply Soon!</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact