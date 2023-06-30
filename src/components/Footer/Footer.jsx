import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div>
      <footer>
        <div >
         
          <ul> About Us
            <li>Our Company</li>
            <li>Our Coffee</li>
            <li>Stories and News</li>
            <li>Starbucks Archive</li>
            <li>Investor Relations</li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div>
         
          <ul> Careers
            <li>Culture and Values</li>
            <li>Inclusion, Diversity, and Equity</li>
            <li>College Achievement Plan</li>
            <li>Alumni Community</li>
            <li>U.S. Careers</li>
            <li>International Careers</li>
          </ul>
        </div>
        <div >
          
          <ul>Social Impact
            <li>People</li>
            <li>Planet</li>
            <li>Environmental and Social Impact Reporting</li>
          </ul>
        </div>
        <div>
         
          <ul> For Business Partners
            <li>Landlord Support Center</li>
            <li>Suppliers</li>
            <li>Corporate Gift Card Sales</li>
            <li>Office and Food service Coffee</li>
          </ul>
        </div>
        <div >
         
          <ul> Order and Pickup
            <li>Order on the App</li>
            <li>Order on the Web</li>
            <li>Delivery</li>
            <li>Order and Pickup Options</li>
            <li>Explore and Find Coffee for Home</li>
          </ul>
        </div>
      </footer>

      <section className="footer2">
        {/* <i className="bi bi-spotify" style="font-size:2rem;color:black;"></i>
        <i className="bi bi-facebook" style="font-size:1.8rem; color:black;"></i>
        <i className="bi bi-pinterest" style="font-size:1.8rem;color:black;"></i>
        <i className="bi bi-instagram" style="font-size:1.8rem;color:black;"></i>
        <i className="bi bi-youtube" style="font-size:1.8rem;color:black;"></i>
        <i className="bi bi-twitter " style="font-size:1.8rem;color:black;"></i>
                 <img src="images/spotify.png" className="footer-icons" alt="spotify logo" /> */}
        <img src="/images/fb.png" className="footer-icons" alt="fb logo" />
        <img src="images/pinterest.png" className="footer-icons" alt="pinterest logo" />
        <img src="images/insta.png" className="footer-icons" alt="insta logo" />
        <img src="images/youtube.png" className="footer-icons" alt="youtube logo" />
        <img src="images/twitter.png" className="footer-icons" alt="twitter logo" />
        <div className="foot-note">
          <span>Privacy Notice </span><span>|</span><span> Terms of Use </span>
          <span>|</span> <span> Do Not Share My Personal Information</span>
          <span> | </span> <span>CA Supply Chain Act </span> <span>| </span>
          <span> Cookie Preferences</span>
        </div>
        <div className="copy">
          &copy;2023 Starbucks Coffee Company. All rights reserved.
        </div>
      </section>
    </div>
    </div>
  )
}

export default Footer
