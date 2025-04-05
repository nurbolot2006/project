import headericons from "../../../assets/headericons.svg";
import headercorzin from "../../../assets/headercorzin.svg";
import { IoSearchOutline } from "react-icons/io5   ";

// import { SlMagnifier } from "react-icons/sl";
import './header.css'


const Header = () => {

    return (
        <div className="container">
            <div className="header-top">
                <h4>Help</h4>
                <div className="line"></div>
                <h4>Sign In</h4>
            </div>
            <div className="header-down">
                <h3>Men</h3>
                <h3>sport</h3>
                <h3>Women</h3>
            </div>
            <div className="header-input">
                <input placeholder="Search"/>
                <IoSearchOutline/>
            </div>
            <div className="header-icons">
                <img className={"1"} src={headericons} alt=""/>
                <img className={"2"} src={headercorzin} alt=""/>
            </div>
        </div>
    );
};

export default Header;