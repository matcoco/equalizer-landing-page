import Image from "../_shared/Image";

const Footer = () => {
    return (
        <footer className="container-footer">
            <p>equalizer</p>
            <p>All rights reserved © Equalizer 2021
Have any problems? Contact us via social media or email us at <b>equalizer@example.com</b></p>
            <ul>
                <li><Image path="/assets/icon-facebook.svg" alt="logo facebook" cln="facebook"/></li>
                <li><Image path="/assets/icon-instagram.svg" alt="logo instagram" cln="instagram"/></li>
                <li><Image path="/assets/icon-twitter.svg" alt="logo twitter" cln="twitter"/></li>
            </ul>
        </footer>
    )
}

export default Footer;