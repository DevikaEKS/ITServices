
import React from 'react';
import "./Bannerit.css";
import Bannerim from "../Assetit/Group 2 (1).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"/>
function Bannerit() {
  return (
    <div className='container-fluid bannerpage m-0 p-0' id='sapbanner'>
      <div className='row d-flex justify-content-evenly align-items-center'>
        <div className='col-md-6'>
          <h1 className='main-text'>CREATING VALUE THROUGH CUSTOMIZED IT SOLUTIONS AND AUTOMATION</h1>
          <p className='parasap'>Explore our tailored approach to IT services, where we analyse your distinct needs to craft solutions that perfectly align with your business objectives.</p>
          {/* <button className='px-4 explorebutton text-light'>EXPLORE <FontAwesomeIcon icon={faCircleArrowRight}></FontAwesomeIcon></button> */}
        </div>
        <div className='col-md-6                                                                                                                                                                                                                                                            '>
          <img src={Bannerim} alt='loading' className='banner-image'/>
        </div>
      </div>
    </div>
  )
}

export default Bannerit
