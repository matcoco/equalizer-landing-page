import React from "react"
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="container-footer">
            <h2>equalizer</h2>
            <div className="footer-content">
                <div className="content1">
                    <p>All rights reserved © Equalizer 2021
                        Have any problems? Contact us via social media or email us at <b>equalizer@example.com</b></p>

                </div>
                <div className="content2">
                    <ul>
                        <li><FaFacebookSquare size={25}/></li>
                        <li><FaInstagram size={25}/></li>
                        <li><FaTwitter size={25}/></li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer;