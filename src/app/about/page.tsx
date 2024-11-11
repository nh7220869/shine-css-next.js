"use client";
import "./about.css";
import Image from "next/image";
import '../component/animation.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      
      <h1 className="company-title">Our Company</h1>
      <p className="company-description">
      Shine Shine was founded with a simple goal in mind: to provide reliable, high-quality cleaning services that make a difference. We believe that a clean environment contributes to a healthier and happier life, and we are committed to helping our clients maintain pristine spaces. Over the years, we have built a strong reputation for our attention to detail, professionalism, and customer care. As a locally-owned company, we take pride in serving our community and ensuring that our clients always receive the best service possible.
      </p>
      
      <hr className="divider" />
      
      <h1 className="team-title">Our Team</h1>
      <p className="team-description">
      Our team at Shine Shine consists of skilled, trained, and dedicated professionals who have a passion for cleaning and a keen eye for detail. We carefully select our staff based on their experience, work ethic, and commitment to customer satisfaction. Each member of our team is fully insured and equipped with the best tools and products to provide exceptional cleaning services. We work together to ensure your space is spotless, every time.
      </p>

      <div className="team-image-container">
        <Image
          src="/ourteam.jpg"
          alt="Our Team"
          className="team-image"
          width={600}
          height={400}
        />
      </div>

      <hr className="divider" />

      <h1 className="who-we-are-title">Who Are We?</h1>
      <p className="who-we-are-description">
      At Shine Shine, we are a professional cleaning services company dedicated to delivering top-quality cleaning solutions for homes, offices, and commercial spaces. With years of experience in the industry, we pride ourselves on our attention to detail and commitment to providing a spotless environment for our clients. Our mission is to offer reliable, efficient, and affordable cleaning services that leave your space shining bright.
      </p>

      <hr className="divider" />
      
      <h1 className="why-choose-us-title">Why Choose Us?</h1>
      <div className="benefits-list">
      <ul>
    <li>→ <b className="font-serif">Experienced Cleaning Professionals</b>: Our team of skilled cleaners brings years of experience to ensure thorough and efficient cleaning every time.</li>
    <li>→ <b className="font-serif">Eco-Friendly Solutions</b>: We use safe, environmentally-friendly cleaning products that are effective yet gentle on your space and the planet.</li>
    <li>→ <b className="font-serif">Customized Cleaning Plans</b>: We offer flexible cleaning schedules tailored to your needs, whether it’s one-time deep cleaning or regular maintenance.</li>
    <li>→ <b className="font-serif">Affordable Pricing</b>: Enjoy premium cleaning services without breaking the bank—no hidden charges, just honest and affordable pricing.</li>
    <li>→ <b className="font-serif">Punctual and Reliable</b>: We respect your time and always show up on time, ensuring your space is cleaned as scheduled.</li>
    <li>→ <b className="font-serif">Customer Satisfaction Guaranteed</b>: We prioritize your satisfaction and always aim to exceed expectations with each cleaning service.</li>
    <li>→ <b className="font-serif">Comprehensive Cleaning Services</b>: From homes to offices, we offer a wide range of cleaning services to meet all your needs, big or small.</li>
</ul>

      </div>
    </div>
  );
};

export default About;
