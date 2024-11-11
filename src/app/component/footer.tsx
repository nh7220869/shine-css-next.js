import Link from 'next/link';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-heading">About Us</h2>
          <p className="footer-text">
          Shine Shine is a professional cleaning services company dedicated to providing top-notch, reliable cleaning solutions for homes and businesses. We use eco-friendly products and the latest techniques to ensure your space is spotless and safe. Our experienced team is committed to delivering exceptional service, always prioritizing customer satisfaction.


          </p>
         
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h2 className="footer-heading"> Our Services </h2>
          <ul className="footer-list">
            <li><Link href="/services" className="footer-link">windows cleaning</Link></li>
            <li><Link href="/services" className="footer-link">House cleaning</Link></li>
            <li><Link href="/services" className="footer-link">Office cleanind</Link></li>
            <li><Link href="/services" className="footer-link">Windows cleaning</Link></li>
            <li><Link href="/services" className="footer-link">Carpet cleaning</Link></li>
            <li><Link href="/services" className="footer-link">floor cleaning</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <p className="footer-text">Get in touch with us for any inquiries or assistance.</p>
          <p className="footer-text">Email: <Link href="mailto:nh7220869@gmail.com" className="footer-link">nh7220869@gmail.com</Link></p>
          <p className="footer-text">Phone: <a href="tel:+92 3021260393" className="footer-link">+92 3021260393</a></p>
          <p className="footer-text">Visit us: Industrial Area, Korangi, Karachi</p>

          {/* Social Media Links */}
          <div className="social-links">
            <Link href="https://www.facebook.com/people/Noor-Ul-Sehar/pfbid0YcmYa1YVDDb1MQxyZx6vHontqjEpwSaFsz47kvNMpefSrBHopmyE2SfRy8wqosmrl/?rdid=pWg0Pj0xglmsWbnu&share_url=https%3A%2F%2Fwww.faceb/" className="social-link">Facebook</Link>
            <Link href="https://www.instagram.com/noorulsehar2003/profilecard/?igsh=MWJkeTJyeWZpZzNobA%3D%3D" className="social-link">Instagram</Link>
            <Link href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://shine-website-tailwind-nextjs.vercel.app/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnoorul-sehar-7468b6246%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" className="social-link">Linkedin</Link>
          </div>
        </div>
      </div>
      <hr />

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>@Shine Shine © 2024 All Rights Reserved</p>
      
      </div>
    </footer>
  );
};

export default Footer;
