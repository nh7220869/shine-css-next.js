
// import "./servives.css"
"use client"
// export default function Services() {
//   return (
//     <div className="services-container">
//       {/* Main Heading */}
//       <div className="heading">
//         <h1>Our Services</h1>
//       </div>

//       {/* Services Section */}
//       <div className="services-grid">
//         {/* Service Card 1 */}
//         <div className="service-card">
//           <div className="service-image">
//             <img 
//               src="/oil-change.jpg" 
//               alt="Oil Change" 
//             />
//           </div>
//           <h2>Oil Change</h2>
//           <p>
//             Regular oil changes are essential to keep your engine running smoothly. Our oil change service ensures your engine stays well-lubricated and efficient.
//           </p>
//         </div>

//         {/* Service Card 2 */}
//         <div className="service-card">
//           <div className="service-image">
//             <img 
//               src="/QualityBrakeService.jpg" 
//               alt="Brake Services" 
//             />
//           </div>
//           <h2>Brake Services</h2>
//           <p>
//             We provide top-notch brake inspection and replacement services to ensure your safety on the road. Don't compromise on brake performance!
//           </p>
//         </div>

//         {/* Service Card 3 */}
//         <div className="service-card">
//           <div className="service-image">
//             <img 
//               src="/Tire-Repair-facts.jpg" 
//               alt="Tire Services" 
//             />
//           </div>
//           <h2>Tire Services</h2>
//           <p>
//             Our tire services include balancing, rotation, and replacement. We help you get the best tires to ensure a smooth and safe driving experience.
//           </p>
//         </div>

//         {/* Service Card 4 */}
//         <div className="service-card">
//           <div className="service-image">
//             <img 
//               src="/diagnostics-01.jpg" 
//               alt="Engine Diagnostics" 
//             />
//           </div>
//           <h2>Engine Diagnostics</h2>
//           <p>
//             Our advanced diagnostic tools help us identify engine issues before they become major problems, ensuring your car stays in peak condition.
//           </p>
//         </div>

//         {/* Service Card 5 */}
//         <div className="service-card">
//           <div className="service-image">
//             <img 
//               src="/9-Best-Car-AC-Repair.jpg" 
//               alt="AC Repair & Maintenance" 
//             />
//           </div>
//           <h2>AC Repair & Maintenance</h2>
//           <p>
//             Keep your cabin cool during the summer with our AC repair and maintenance services. We ensure your air conditioning is always working at its best.
//           </p>
//         </div>

//         {/* Service Card 6 */}
//         <div className="service-card">
//           <div className="service-image">
//             <img 
//               src="/battery-cnt.jpg" 
//               alt="Battery Services" 
//             />
//           </div>
//           <h2>Battery Services</h2>
//           <p>
//             We provide battery testing, charging, and replacement to ensure your vehicle always starts reliably, even on the coldest mornings.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';

// const ServicesPage = () => {
//   const [showAll, setShowAll] = useState(false);

//   // Define the first 20 services and the additional 30 services
//   const initialServices = [
//     'Residential Cleaning', 'Commercial Cleaning', 'Office Cleaning', 'Carpet Cleaning',
//     'Window Cleaning', 'Post-Construction Cleaning', 'Deep Cleaning', 'Move-In/Move-Out Cleaning',
//     'Eco-Friendly Cleaning', 'Janitorial Services', 'Pressure Washing', 'Floor Care & Maintenance',
//     'Air Duct Cleaning', 'Disinfection Services', 'Sanitization Services', 'Post-Event Cleaning',
//     'Holiday Cleaning Special', 'Green Cleaning', 'Pet-Friendly Cleaning', 'Specialized Surface Cleaning'
//   ];

//   const additionalServices = [
//     'Home Organization', 'Mattress Cleaning', 'Tile & Grout Cleaning', 'Steam Cleaning', 'Oven Cleaning',
//     'Fridge Cleaning', 'Gutter Cleaning', 'Curtain & Drapery Cleaning', 'Garage Cleaning', 'Event Cleanup',
//     'Construction Site Cleanup', 'Apartment Cleaning', 'Window Treatment Cleaning', 'Maid Services', 'Roof Cleaning',
//     'Chandelier Cleaning', 'Commercial Kitchen Cleaning', 'Tile Floor Cleaning', 'Blinds Cleaning', 'Ceiling Fan Cleaning',
//     'Swimming Pool Cleaning', 'Pressure Washing Driveways', 'Wall Cleaning', 'Sofa Cleaning', 'Lawn Care',
//     'Hoarding Cleaning', 'Exterior House Washing', 'Tile and Carpet Shampooing', 'Air Freshening', 'Post-Flood Cleaning',
//     'Holiday Lights Setup & Cleanup'
//   ];

//   // Combine the initial and additional services based on the `showAll` state
//   const displayedServices = showAll ? [...initialServices, ...additionalServices] : initialServices;

//   return (
//     <div className="bg-light-green text-gray-800">
      
//       {/* Header Section */}
//       <header className="bg-dark-green text-white py-4">
//         <div className="container mx-auto text-center">
//           <h1 className="text-3xl font-bold">Cleaning Services</h1>
//           <p className="text-lg">Professional Cleaning Solutions for Homes & Offices</p>
//         </div>
//       </header>

//       {/* Services Section */}
//       <section className="py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-2xl font-semibold text-dark-green">Our Services</h2>
//           <p className="text-lg text-gray-700 mb-8">
//             We offer a variety of cleaning services to meet your needs. Whether it's residential, commercial, or specialized cleaning, we have got you covered.
//           </p>

//           {/* Service Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {displayedServices.map((service, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-bold text-dark-green mb-4">{service}</h3>
//                 <p className="text-gray-600 mb-4">
//                   Detailed description for {service} will go here.
//                 </p>
//                 <a href={`#${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-yellow-500 font-semibold hover:underline">Learn More</a>
//               </div>
//             ))}
//           </div>

//           {/* "Explore More" Button */}
//           {!showAll && (
//             <div className="mt-8">
//               <button
//                 onClick={() => setShowAll(true)}
//                 className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400"
//               >
//                 Explore More Services
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-dark-green text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 Cleaning Services. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ServicesPage;

import React, { useState } from 'react';
import './services.css';  // Importing the CSS file

const ServicesPage = () => {
  const [showAll, setShowAll] = useState(false);

  // Define the 15 main core services with image paths
  const mainServices = [
    { name: 'Residential Cleaning', image: '/s1.webp' },
    { name: 'Commercial Cleaning', image: '/s2.webp' },
    { name: 'Office Cleaning', image: '/s3.jpg' },
    { name: 'Carpet Cleaning', image: '/s4.webp' },
    { name: 'Window Cleaning', image: '/s5.jpg' },
    { name: 'Post-Construction Cleaning', image: '/s6.jpg' },
    { name: 'Deep Cleaning', image: '/s7.jpeg' },
    { name: 'Move-In/Move-Out Cleaning', image: '/s8.jpg' },
    { name: 'Pressure Washing', image: '/s9.jpg' },
    { name: 'Floor Cleaning', image: '/s10.jpg' },
    { name: 'Kitchen Cleaning', image: '/s11.jpg' },
    { name: 'Bathroom Cleaning', image: '/s12.jpg' },
  ];

  return (
    <div className="services-container">
      <section className="services-section">
        <h2 className='Heading'>Our Cleaning Services</h2>
        <p>
          We offer the following core cleaning services to meet your needs:
        </p>

        {/* Service Cards (Show first 6 services initially) */}
        <div className="service-cards">
          {mainServices.slice(0, 6).map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />
              <h3>{service.name}</h3>
              <p>Detailed description for {service.name} will go here.</p>
              <a href={`#${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                Learn More
              </a>
            </div>
          ))}
          {/* Show additional services if "Show More" is clicked */}
          {showAll && mainServices.slice(6).map((service, index) => (
            <div key={index + 6} className="service-card">
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />
              <h3>{service.name}</h3>
              <p>Detailed description for {service.name} will go here.</p>
              <a href={`#${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* "Explore More" Button */}
        {!showAll && (
          <div className="explore-more-btn-container">
            <button
              onClick={() => setShowAll(true)}
              className="explore-more-btn"
            >
              Explore More Services
            </button>
          </div>
        )}
      </section>

      {/* Footer Section */}
      
    </div>
  );
};

export default ServicesPage;

