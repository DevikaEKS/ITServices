// // import React, { useState } from 'react';
// // import im1 from '../Assetit/video_shape_1.png.png';
// // import im2 from "../Assetit/Group 27.png";
// // import logo from "../Assetit/Group 270989676.png";
// // import im4 from "../Assetit/about_3_1-shape.png.png";
// // import "./Aboutpage.css";

// // function Aboutpage() {
// //     const [content, setContent] = useState('mission'); // Default content is 'mission'

// //     return (
// //         <div className='container-fluid'>
// //             {/* <div className='row my-4 doodlebg'>
// //                 <div className='col'>
// //                 <div className='col'>
// //                     <img src={im1} alt="Background" />
// //                 </div>
// //                 <div className='col'>
// //                     <h3>Know About Us</h3>
// //                     <p>At KG Genius Labs, we are dedicated to empowering businesses with cutting-edge IT solutions and services that drive growth, efficiency, and success.</p>
// //                     <p>With a focus on innovation and excellence, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients. Driven by a passion for technology and a commitment to customer satisfaction, we strive to deliver innovative solutions that exceed expectations and drive tangible results for our clients.</p>
// //                 </div>
// //             </div>
// //             </div> */}



// // <div className='row my-4'>
// //     <div className='col'>
// //         <div className='row border border-2 bg-warning'>
// //             <div className='col bg-info'>
// //             <h3 onClick={() => setContent('mission')}>Our Mission</h3>
// //             </div>
// //             <div className='col'>
// //             <h3 onClick={() => setContent('vision')}>Our Vision</h3>
// //             </div>   
// //         </div>
// // {/* dummy */}
// //         <div className='row border border-2 bg-warning'>
// //             <div className='col'>
// //             {content === 'mission' && (
// //                             <>
// //                             <div className='row'>
// //                                 <div className='col'>
// //                                     <img src={im2} alt="Mission Image" className="img-fluid mission-image" />
// //                                 </div>
// //                                 <div className='col'>
// //                                     <p>We're dedicated to helping businesses and individuals thrive online through creative solutions in design, development, and e-commerce.</p>
// //                                     <ul>
// //                                         <li>Providing innovative IT solutions</li>
// //                                         <li>Ensuring customer satisfaction</li>
// //                                         <li>Driving growth and efficiency</li>
// //                                     </ul>
// //                                 </div>
// //                                 </div>
// //                             </>
// //                         )}
// //             </div>
// //             <div className='col'>
// //             {content === 'vision' && (
// //                             <>
// //                                 <div className='col'>
// //                                     <img src={im2} alt="Vision Image" className="img-fluid vision-image"  height={"100px"}/>
// //                                 </div>
// //                                 <div className='col'>
// //                                     <p>Our vision is to be a global leader in IT services, recognized for our innovation, customer-centric approach, and sustainability.</p>
// //                                     <ul>
// //                                         <li>Leading the industry with cutting-edge technology</li>
// //                                         <li>Fostering a culture of continuous improvement</li>
// //                                         <li>Promoting sustainable business practices</li>
// //                                     </ul>
// //                                 </div>
// //                             </>
// //                         )}
// //             </div>   
// //         </div>
        


// //     </div>
// //     <div className='col'>
// //         <img src={im4}/>
// //     </div>
// // </div>


// // {/* 
// //             <div className='row my-4 doodlebg'>
// //                 <div className='col'>
// //                     <div className='row border border-3'>
// //                         <div className='col bg-info'>
// //                             <h3 onClick={() => setContent('mission')}>Our Mission</h3>
// //                         </div>
// //                         <div className='col bg-primary'>
// //                             <h3 onClick={() => setContent('vision')}>Our Vision</h3>
// //                         </div>
// //                     </div>
// //                     <div className='row'>
// //                         <div className='col'>
// //                         {content === 'mission' && (
// //                             <>
// //                                 <div className='col'>
// //                                     <img src={im2} alt="Mission Image" className="img-fluid mission-image" />
// //                                 </div>
// //                                 <div className='col'>
// //                                     <p>We're dedicated to helping businesses and individuals thrive online through creative solutions in design, development, and e-commerce.</p>
// //                                     <ul>
// //                                         <li>Providing innovative IT solutions</li>
// //                                         <li>Ensuring customer satisfaction</li>
// //                                         <li>Driving growth and efficiency</li>
// //                                     </ul>
// //                                 </div>
// //                             </>
// //                         )}
// //                         {content === 'vision' && (
// //                             <>
// //                                 <div className='col'>
// //                                     <img src={im3} alt="Vision Image" className="img-fluid vision-image"  height={"100px"}/>
// //                                 </div>
// //                                 <div className='col'>
// //                                     <p>Our vision is to be a global leader in IT services, recognized for our innovation, customer-centric approach, and sustainability.</p>
// //                                     <ul>
// //                                         <li>Leading the industry with cutting-edge technology</li>
// //                                         <li>Fostering a culture of continuous improvement</li>
// //                                         <li>Promoting sustainable business practices</li>
// //                                     </ul>
// //                                 </div>
// //                             </>
// //                         )}
// //                     </div>
// //                     </div>
// //                 </div>
// //             </div> */}







// //             {/* <div className='row my-4'>
// //                 <div className='col'>
// //                     <img src={im2} alt="Key Differentiators" />
// //                 </div>
// //                 <div className='col'>
// //                     <h3>KEY DIFFERENTIATORS</h3>
// //                     <p>We offer tailored solutions that precisely align with your business objectives. We empower organizations to thrive in today's digital landscape.</p>
// //                     <div className='row'>
// //                         <div className='col'>
// //                             <ul>
// //                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Versatility</li>
// //                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} /> Scalability</li>
// //                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Industry-Specific Solutions and Expertise</li>
// //                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Dedicated Support and Maintenance</li>
// //                             </ul>
// //                         </div>
// //                         <div className='col'>
// //                             <ul>
// //                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Tailored IT Solutions</li>
// //                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Innovation</li>
// //                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Highly Customizable E-commerce Solutions</li>
// //                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Integrated ERP Solutions</li>
// //                             </ul>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div> */}
// //         </div>
// //     );
// // }

// // export default Aboutpage;



// // demo


// import React, { useState } from 'react';
// import im1 from '../Assetit/video_shape_1.png.png';
// import im2 from "../Assetit/Group 27.png";
// import logo from "../Assetit/Group 270989676.png";
// import im4 from "../Assetit/about_3_1-shape.png.png";
// import "./Aboutpage.css";

// function Aboutpage() {
//     const [content, setContent] = useState('mission'); // Default content is 'mission'

//     return (
//         <div className='container-fluid' id='aboutuspageit'>
// <div className='row my-4 doodlebg'>
                
//                 <div className='col'>
//                      <img src={im1} alt="Background" className='imb1'/>
//                 </div>
//                  <div className='col'>
//                      <h3>Know About Us</h3>
//                      <p>At KG Genius Labs, we are dedicated to empowering businesses with cutting-edge IT solutions and services that drive growth, efficiency, and success.</p>
//                     <p>With a focus on innovation and excellence, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients. Driven by a passion for technology and a commitment to customer satisfaction, we strive to deliver innovative solutions that exceed expectations and drive tangible results for our clients.</p>
//                  </div>
          
//             </div> 
           
//             <div className='row my-4'>
//                 <div className='col-lg-6'>
//                     <div className=' row'>
                        
//                         <div className='col mission'>
//                             <h3 onClick={() => setContent('mission')}>Our Mission</h3>
//                         </div>
//                         <div className='col vision'>
//                             <h3 onClick={() => setContent('vision')}>Our Vision</h3>
//                         </div>
//                     </div>
//                     {/* Content Area */}
//                     <div className='row border border-1 rounded-3  clrbox'>
//                         <div className='col'>
//                             {content === 'mission' && (
//                                 <>
//                                     <div className='row'>
//                                         <div className='col'>
//                                             <img src={im2} alt="Mission Image" className="img-fluid mission-image imb1" />
//                                         </div>
//                                     </div>
//                                 </>
//                             )}
//                             {content === 'vision' && (
//                                 <>
//                                     <div className='col'>
//                                         <img src={im4} alt="Vision Image" className="img-fluid vision-image imb1" />
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                         <div className='col'>
//                             {content === 'mission' && (
//                                 <>
//                                     <p>We're dedicated to helping businesses and individuals thrive online through creative solutions in design,development and e-commerce.</p>
//                                     <ul>
//                                         <li>Providing innovative IT solutions</li>
//                                         <li>Ensuring customer satisfaction</li>
//                                         <li>Driving growth and efficiency</li>
//                                     </ul>
//                                 </>
//                             )}
//                             {content === 'vision' && (
//                                 <>
//                                     <p>Our vision is to be a global leader in IT services, recognized for our innovation, customer-centric approach and sustainability.</p>
//                                     <ul>
//                                         <li>Leading the industry with cutting-edge technology</li>
//                                         <li>Fostering a culture of continuous improvement</li>
//                                         <li>Promoting sustainable business practices</li>
//                                     </ul>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-lg-6'>
//                     <div className='row'>
//                         <div className='col'>
//                             <img src={im4} className='imb1'/>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Section for Key Differentiators */}
//             <div className='row my-4'>
//                 <div className='col'>
//                     <img src={im2} alt="Key Differentiators" className="img-fluid imb1" />
//                 </div>
//                 <div className='col'>
//                     <h3>KEY DIFFERENTIATORS</h3>
//                     <p>We offer tailored solutions that precisely align with your business objectives. We empower organizations to thrive in today's digital landscape.</p>
//                     <div className='row'>
//                         <div className='col'>
//                             <ul>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Versatility</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} /> Scalability</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Industry-Specific Solutions and Expertise</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Dedicated Support and Maintenance</li>
//                             </ul>
//                         </div>
//                         <div className='col'>
//                             <ul>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Tailored IT Solutions</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Innovation</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Highly Customizable E-commerce Solutions</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Integrated ERP Solutions</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
          
       
//         </div>
        
//     );
// }

// export default Aboutpage;


// import React, { useState, useEffect } from 'react';
// import im1 from '../Assetit/video_shape_1.png.png';
// import im2 from "../Assetit/Group 27.png";
// import logo from "../Assetit/Group 270989676.png";
// import im4 from "../Assetit/about_3_1-shape.png.png";
// import "./Aboutpage.css";

// function Aboutpage() {
//     const [contentIndex, setContentIndex] = useState(0); // State to track content index

//     // Define mission and vision content
//     const contents = [
//         {
//             title: 'Our Mission',
//             image: im2,
//             text: "We're dedicated to helping businesses and individuals thrive online through creative solutions in design, development and e-commerce.",
//             bullets: [
//                 'Providing innovative IT solutions',
//                 'Ensuring customer satisfaction',
//                 'Driving growth and efficiency'
//             ]
//         },
//         {
//             title: 'Our Vision',
//             image: im4,
//             text: 'Our vision is to be a global leader in IT services, recognized for our innovation, customer-centric approach and sustainability.',
//             bullets: [
//                 'Leading the industry with cutting-edge technology',
//                 'Fostering a culture of continuous improvement',
//                 'Promoting sustainable business practices'
//             ]
//         }
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // Toggle between 0 and 1 for contentIndex
//             setContentIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
//         }, 2000); // Change content every second

//         return () => clearInterval(interval); // Cleanup interval on component unmount
//     }, []);

//     const [hovered, setHovered] = useState(false); // State to track hover state

//     return (
//         <div className='container-fluid' id='aboutuspageit'>
//             <div className='row my-4 doodlebg'>
//                 <div className='col'>
//                     <img src={im1} alt="Background" className='imb1' />
//                 </div>
//                 <div className='col'>
//                     <h3>Know About Us</h3>
//                     <p>At KG Genius Labs, we are dedicated to empowering businesses with cutting-edge IT solutions and services that drive growth, efficiency, and success.</p>
//                     <p>With a focus on innovation and excellence, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients. Driven by a passion for technology and a commitment to customer satisfaction, we strive to deliver innovative solutions that exceed expectations and drive tangible results for our clients.</p>
//                 </div>
//             </div>

//             <div className='row my-4'>
//                 <div className='col-lg-6'>
//                     <div className=' row'>
//                         <div className='col mission'>
//                             <h3>Our Mission</h3>
//                         </div>
//                         <div className='col vision'>
//                             <h3>Our Vision</h3>
//                         </div>
//                     </div>
//                     {/* Content Area */}
//                     <div className={`row border border-1 rounded-3 clrbox ${hovered ? 'hovered' : ''}`}
//                          onMouseEnter={() => setHovered(true)}
//                          onMouseLeave={() => setHovered(false)}>
//                         <div className='col'>
//                             <div className='row'>
//                                 <div className='col'>
//                                     <img src={contents[contentIndex].image} alt={contents[contentIndex].title} className="img-fluid mission-image imb1" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col'>
//                             <p>{contents[contentIndex].text}</p>
//                             <ul>
//                                 {contents[contentIndex].bullets.map((bullet, index) => (
//                                     <li key={index}>{bullet}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-lg-6'>
//                     <div className='row'>
//                         <div className='col'>
//                             <img src={im4} className='imb1' />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Section for Key Differentiators */}
//             <div className='row my-4'>
//                 <div className='col'>
//                     <img src={im2} alt="Key Differentiators" className="img-fluid imb1" />
//                 </div>
//                 <div className='col'>
//                     <h3>KEY DIFFERENTIATORS</h3>
//                     <p>We offer tailored solutions that precisely align with your business objectives. We empower organizations to thrive in today's digital landscape.</p>
//                     <div className='row'>
//                         <div className='col'>
//                             <ul>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Versatility</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} /> Scalability</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Industry-Specific Solutions and Expertise</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Dedicated Support and Maintenance</li>
//                             </ul>
//                         </div>
//                         <div className='col'>
//                             <ul>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Tailored IT Solutions</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Innovation</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Highly Customizable E-commerce Solutions</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Integrated ERP Solutions</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Aboutpage;


// import React, { useState, useEffect } from 'react';
// import im1 from '../Assetit/video_shape_1.png.png';
// import im2 from "../Assetit/Group 27.png";
// import logo from "../Assetit/Group 270989676.png";
// import im4 from "../Assetit/about_3_1-shape.png.png";
// import visionimg from "../Assetit/Rectangle 2381.png";
// import missionimg from "../Assetit/Rectangle 21 (1).png";
// import "./Aboutpage.css";

// function Aboutpage() {
//     const [activeTab, setActiveTab] = useState('mission'); // State to track active tab
//     const [intervalId, setIntervalId] = useState(null); // State to track the interval ID

//     useEffect(() => {
//         const id = setInterval(() => {
//             setActiveTab(prevTab => prevTab === 'mission' ? 'vision' : 'mission');
//         }, 1000);
//         setIntervalId(id); // Store the interval ID in state

//         return () => clearInterval(id); // Cleanup function to clear interval on component unmount
//     }, []); // Empty dependency array ensures this effect runs only once

//     const handleTabClick = (tab) => {
//         setActiveTab(tab); // Set the active tab based on the clicked tab ('mission' or 'vision')
//         clearInterval(intervalId); // Clear the interval using the stored interval ID
//     };

//     return (
//         <div className='container-fluid' id='aboutuspageit'>
//             <div className='row my-4 doodlebg'>
//                 <div className='col'>
//                     <img src={im1} alt="Background" className='imb1' />
//                 </div>
//                 <div className='col'>
//                     <h3>Know About Us</h3>
//                     <p>At KG Genius Labs, we are dedicated to empowering businesses with cutting-edge IT solutions and services that drive growth, efficiency, and success.</p>
//                     <p>With a focus on innovation and excellence, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients. Driven by a passion for technology and a commitment to customer satisfaction, we strive to deliver innovative solutions that exceed expectations and drive tangible results for our clients.</p>
//                 </div>
//             </div>

//             <div className='row my-4'>
//                 <div className='col-lg-6'>
//                     <div className=' row'>
//                         <div className={`col mission d-flex align-items-center ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => handleTabClick('mission')}>
//                             <h3>Our Mission</h3>
//                         </div>
//                         <div className={`col vision d-flex align-items-center ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => handleTabClick('vision')}>
//                             <h3>Our Vision</h3>
//                         </div>
//                     </div>
//                     {/* Content Area */}
//                     <div className={`row border border-1 rounded-3 clrbox ${activeTab === 'vision' ? 'vision-active' : ''}`}>
//                         <div className='col'>
//                             <div className='row'>
//                                 <div className='col'>
//                                     <img src={activeTab === 'mission' ? missionimg : visionimg} alt={activeTab === 'mission' ? 'Mission Image' : 'Vision Image'} className="img-fluid mission-image imb1" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col'>
//                             <p>{activeTab === 'mission' ? "We're dedicated to helping businesses and individuals thrive online through creative solutions in design, development and e-commerce." : "Our vision is to be a global leader in IT services, recognized for our innovation, customer-centric approach and sustainability."}</p>
//                             <ul>
//                                 {activeTab === 'mission' ? (
//                                     <>
//                                         <li>Providing innovative IT solutions</li>
//                                         <li>Ensuring customer satisfaction</li>
//                                         <li>Driving growth and efficiency</li>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <li>Leading the industry with cutting-edge technology</li>
//                                         <li>Fostering a culture of continuous improvement</li>
//                                         <li>Promoting sustainable business practices</li>
//                                     </>
//                                 )}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-lg-6'>
//                     <div className='row'>
//                         <div className='col'>
//                             <img src={im4} className='imb1' />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Section for Key Differentiators */}
//             <div className='row my-4'>
//                 <div className='col'>
//                     <img src={im2} alt="Key Differentiators" className="img-fluid imb1" />
//                 </div>
//                 <div className='col'>
//                     <h3>KEY DIFFERENTIATORS</h3>
//                     <p>We offer tailored solutions that precisely align with your business objectives. We empower organizations to thrive in today's digital landscape.</p>
//                     <div className='row'>
//                         <div className='col'>
//                             <ul>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Versatility</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} /> Scalability</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Industry-Specific Solutions and Expertise</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Dedicated Support and Maintenance</li>
//                             </ul>
//                         </div>
//                         <div className='col'>
//                             <ul>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Tailored IT Solutions</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Innovation</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Highly Customizable E-commerce Solutions</li>
//                                 <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Integrated ERP Solutions</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Aboutpage;



import React, { useState ,useEffect} from 'react';
import im1 from '../Assetit/video_shape_1.png.png';
import im2 from "../Assetit/Group 27.png";
import logo from "../Assetit/Group 270989676.png";
import im4 from "../Assetit/about_3_1-shape.png.png";
import visionimg from "../Assetit/Rectangle 2381.png";
import missionimg from "../Assetit/Rectangle 21 (1).png";
import "./Aboutpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Aboutpage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const [activeTab, setActiveTab] = useState('mission'); // Default active tab is 'mission'

    return (
        <div className='container' id='aboutuspageit'>
            <div className='row my-4 doodlebg'>
                <div className='col'>
                    <img src={im1} alt="Background" className='imb1' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" />
                </div>
                <div className='col'>
                    <h3>Know About Us</h3>
                    <p>At KG Genius Labs, we are dedicated to empowering businesses with cutting-edge IT solutions and services that drive growth, efficiency, and success.</p>
                    <p>With a focus on innovation and excellence, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients. Driven by a passion for technology and a commitment to customer satisfaction, we strive to deliver innovative solutions that exceed expectations and drive tangible results for our clients.</p>
                </div>
            </div>

            <div className='row my-4'>
                <div className='col-sm-12 col-lg-7'>
                    <div className=' row'>
                        <div className={`col mission ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => setActiveTab('mission')}>
                            <h3>Our Mission</h3>
                        </div>
                        <div className={`col vision ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => setActiveTab('vision')}>
                            <h3>Our Vision</h3>
                        </div>
                    </div>
                    {/* Content Area */}
                    <div className={`row border border-1 rounded-3 clrbox ${activeTab === 'vision' ? 'vision-active' : ''}`} style={{ height: '300px', overflow: 'auto' }}>
                        <div className='col-sm-12 col-lg-6'>
                            <div className='row'>
                                <div className='col'>
                                    <img src={activeTab === 'mission' ?missionimg : visionimg} alt={activeTab === 'mission' ? 'Mission Image' : 'Vision Image'} className="img-fluid mission-image" />
                                </div>
                            </div>
                        </div>
                        <div className='col' style={{ maxHeight: '400px', overflow: 'auto' }}>
                            {activeTab === 'mission' ? (
                                <>
                                    <p>We're dedicated to helping businesses and individuals thrive online through creative solutions in design, development and e-commerce.</p>
                                    <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Providing innovative IT solutions</p>
                                        <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Ensuring customer satisfaction</p>
                                        <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />miDriving growth and efficiency</p>
                                </>
                            ) : (
                                <>
                                    <p>Our vision is to be a global leader in IT services, recognized for our innovation, customer-centric approach and sustainability.</p>
                                        <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Leading the industry with cutting-edge technology</p>
                                        <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Fostering a culture of continuous improvement</p>
                                    <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Promoting sustainable business practices</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='row'>
                        <div className='col'>
                            <img src={im4} className='imb2'data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Section for Key Differentiators */}
            <div className='row my-4'>
                <div className='col'>
                    <img src={im2} alt="Key Differentiators" className="img-fluid imb3 ms-5" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="300"/>
                </div>
                <div className='col'>
                    <h3>KEY DIFFERENTIATORS</h3>
                    <p>We offer tailored solutions that precisely align with your business objectives. We empower organizations to thrive in today's digital landscape.</p>
                    <div className='row'>
                        <div className='col'>
                            <ul>
                                <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Versatility</li>
                                <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} /> Scalability</li>
                                <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Industry-Specific Solutions and Expertise</li>
                                <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Dedicated Support and Maintenance</li>
                            </ul>
                        </div>
                        <div className='col'>
                           
                            <ul>
                                <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Tailored IT Solutions</li>
                                <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Innovation</li>
                                <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Highly Customizable E-commerce Solutions</li>
                                <li><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Integrated ERP Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Aboutpage;
