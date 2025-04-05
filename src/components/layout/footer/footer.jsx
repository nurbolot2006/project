import "./footer.css"
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"footer-col"}>
                        <h4>FINT A STORE</h4>
                        <ul>
                            <li><a href="">BECOME A MEMBER</a></li>
                            <li><a href="">SIGN UP FOR EMAIL</a></li>
                            <li><a href="">SEND US FEEDBACK</a></li>
                            <li><a href="">STUDENT DISCOUNTS</a></li>
                        </ul>
                    </div>
                    <div className={"footer-col"}>
                        <h4>GET HELP</h4>
                        <ul>
                            <li><a href="">Order Status</a></li>
                            <li><a href="">Delivery</a></li>
                            <li><a href="">Returns</a></li>
                            <li><a href="">Payment Options</a></li>
                            <li><a href="">Contact Us On Koldon.com Inquiries</a></li>
                        </ul>
                    </div>
                    <div className={"footer-col"}>
                        <h4>ABOUT KOLDON KROSS</h4>
                        <ul>  
                            <li><a href="">News</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Investors</a></li>
                            <li><a href="">Sustainability</a></li>
                        </ul>
                    </div>
                    <div className={"footer-col"}>
                        <h4>Follow us</h4>
                        <div className={"social-links"}>
                            <a href="https://www.facebook.com/share/1BouL4Kb8x/"> <RiFacebookFill /> </a>
                            <a href="https://www.instagram.com/koldon_kross/"> <FaInstagram /> </a>
                            <a href="https://t.me/KoldonKross"> <FaTelegramPlane /> </a>
                        </div>
                    </div>
                    <div className={"footer-met container"}>
                        <a href="https://www.google.com/maps/place/Kyrgyzstan/@41.1024497,69.4572666,6z/data=!3m1!4b1!4m6!3m5!1s0x3897381dfce927f3:0x281058b74e88c433!8m2!3d41.20438!4d74.766098!16s%2Fm%2F0jt3tjf?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"> <MdOutlinePlace /> Kyrgyzstan </a>
                        <p>© 2025 Koldon_kross</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;