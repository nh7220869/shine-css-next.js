
import "./page.css";
import '../app/component/animation.css'
export default function Main() {
  return (
    <div className="page">
       <div className="main-container">
<div className="desktop-only">
     
        {/* pc*/}
        <div className="text-section-desktop">
          <p className="title">
            <span className="highlight">First</span>
            <span className="regular">Class</span>
            <span className="highlight">Clearing</span><br />
            <span className="regular">Servicing</span>
          </p>

          <p className="description">
          Shine Shine: From Dirt to Dazzle – We Provide Top-Quality Cleaning Services for a Shine That Lasts!
          </p>

          <div className="button-container">
            <a href="tel:+92 3282513267" className="contact-button">Contact Us</a>
          </div>
        </div>
      </div>
      

        {/* Mobile Version */}

        <div className="mobile-only">

        <div className="text-section-mobile">
          <p className="titleM">
            <span className="highlightM">First</span>
            <span className="regularM">Class</span>
            <span className="highlightM">Clearing</span>
            <span className="regularM">Servicing</span>
          </p>

          <p className="descriptionM">
          Shine Shine: From Dirt to Dazzle – We Provide Top-Quality Cleaning Services for a Shine That Lasts!
          </p>
          <a href="tel:+92 3282513267" className="contact-button">Contact Us</a>

         
        </div>
        </div>
        </div>

        {/* pc */}

        <div className="desktop-only">
            <div className="info-section-desktop">
        <h1 className="sections-title">What can we do?</h1>
        <p className="section-text">
        At Shine Shine, we offer professional cleaning services for both homes and businesses, ensuring every space sparkles and feels fresh. Our team provides a range of services including regular cleaning, deep cleaning, office cleaning, carpet care, and post-construction cleanup. Using eco-friendly products and a customer-focused approach, we tailor our services to meet your needs, delivering exceptional results with attention to detail. Let us handle the cleaning, so you can enjoy a spotless, healthy environment!
        </p>
        <div className="explore-button-container">
          <a href="/services" className="explore-button">Explore More →</a>
        </div>
      </div>
      

      <img src="/homei.jpg" alt="What we do" className="info-image-desktop" />
      </div>

      {/* Mobile  */}
      <div className="mobile-only">
      <div className="info-section mobile">
        <h1 className="section-title"><b> What can we do?</b></h1>
        <p className="section-text">
        At Shine Shine, we offer professional cleaning services for both homes and businesses, ensuring every space sparkles and feels fresh. Our team provides a range of services including regular cleaning, deep cleaning, office cleaning, carpet care, and post-construction cleanup. Using eco-friendly products and a customer-focused approach, we tailor our services to meet your needs, delivering exceptional results with attention to detail. Let us handle the cleaning, so you can enjoy a spotless, healthy environment!
        </p>
        <div className="explore-button-container">
          <a href="/services" className="explore-button">Explore More →</a>
        </div>
      </div>
      <div className="Ima">

      <img src="/homei.jpg" alt="What we do" className="info-image mobile" /> </div>
</div>





    </div>
  );
}