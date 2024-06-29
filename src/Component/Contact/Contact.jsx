import React from "react";
import './Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3cbafd03-c31f-431b-8ec7-cf0383fb56f8");
  
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
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <i class='bx bxs-message-rounded-dots message' ></i></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum soluta
          accusantium asperiores ut blanditiis eligendi! Voluptatibus, quaerat,
          facilis veniam omnis quam eius perferendis delectus, ipsa labore esse
          iste nostrum quia.</p>
        <ul>
          <li> <i class='bx bxs-envelope img'></i>Farzadsarfarazwvo@gmai.com</li>
          <li><i class='bx bxs-mobile img'></i>015750074356 </li>
          <li><i class='bx bx-current-location img'></i>München, Deutschland </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Your Number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" required/>
            <label>Write your message</label>
            <textarea name="message" rows="6" placeholder="Enter your message"></textarea>
            <button type="submit" className="btn dark-btn"> Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
