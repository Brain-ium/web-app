import React from "react";

const Footer = () => (
    <footer>
        <div className="footer-container">
            <div className="contact-info">
                <h3>Contact Us</h3>
                <p>Email: <a href="mailto:support@brainium.com">support@brainium.com</a></p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Learning Lane, Education City, AB, Canada</p>
            </div>
            
            <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/help">Help Center</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
    
            <div className="social-media">
                <h3>Follow Us</h3>
                {/* Links */}
            </div>
    
            <div className="newsletter-signup">
                <h3>Subscribe to Our Newsletter</h3>
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2024 Brain-ium. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;