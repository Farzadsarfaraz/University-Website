import React, { useRef } from "react";
import "./Tistimonial.css";

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }


  return (
    <div className="testimonial">
     <i class="bx bxs-right-arrow-alt btn next-btn" onClick={slideForward}></i>
      <i class="bx bxs-left-arrow-alt btn back-btn" onClick={slideBackward}></i>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="" />
                <div>
                  <h3>William</h3>
                  <span>United Kingdom</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione ex et at blanditiis consequuntur voluptas facilis est?
                Ipsa minima, deleniti repudiandae itaque corporis dolore
                nesciunt magni adipisci praesentium? Necessitatibus, velit?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://th.bing.com/th/id/OIP.slLcWi79VfPwwHTWYmGKNQHaHa?rs=1&pid=ImgDetMain" alt="" />
                <div>
                  <h3>John</h3>
                  <span>Sweden</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione ex et at blanditiis consequuntur voluptas facilis est?
                Ipsa minima, deleniti repudiandae itaque corporis dolore
                nesciunt magni adipisci praesentium? Necessitatibus, velit?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://www.wellbeingcentrelondon.com/_webedit/cached-images/194-0-0-724-10000-6667-1280.jpg" alt="" />
                <div>
                  <h3>Kamrandorf</h3>
                  <span>Russia</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione ex et at blanditiis consequuntur voluptas facilis est?
                Ipsa minima, deleniti repudiandae itaque corporis dolore
                nesciunt magni adipisci praesentium? Necessitatibus, velit?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://th.bing.com/th/id/OIP.OKKu5wLz5l0womu_NBis8AHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />
                <div>
                  <h3>Johannes</h3>
                  <span>Germany</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione ex et at blanditiis consequuntur voluptas facilis est?
                Ipsa minima, deleniti repudiandae itaque corporis dolore
                nesciunt magni adipisci praesentium? Necessitatibus, velit?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Testimonial;
