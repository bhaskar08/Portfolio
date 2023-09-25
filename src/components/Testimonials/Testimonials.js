import React from "react";
import "./testimonials.css";
import maq from "../../assets/img/maq.jpg";
import { GoDotFill } from 'react-icons/go';

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h2>Work-Experience</h2>
      <div className="container testimonial_container">
        <div className="testimonial_item">
          <div className="info">
            <h4 className="role">Associate Software Engineer (Summer 2023)</h4>
            <div className="info-item">
                <ul>
                    <li>Wrote codes for helping in the rollover changes for some modules.</li>
                    <li>Validated data between various linked streams by writing test cases.</li>
                    <li>Created PowerBI reports for data visualization and analysis for US based MNC.</li>
                    <li>Created custom visuals for PowerBI reports using React.JS</li>
                </ul>
            </div>
          </div>
          <div className="maq_img">
            <img src={maq} alt="" />
          </div>
        </div>

        {/* <div className='testimonial_item'>
                            <div className='client-logo'>
                                <h2>Microsoft</h2>
                            </div>
                            <h5 className='client_name'>
                                Microsoft
                            </h5>
                            <small className='client_review'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </small>
                        </div>



                        <div className='testimonial_item'>
                            <div className='client-logo'>
                                <h2>FB</h2>
                            </div>
                            <h5 className='client_name'>
                                Fackbook
                            </h5>
                            <small className='client_review'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </small>
                        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
