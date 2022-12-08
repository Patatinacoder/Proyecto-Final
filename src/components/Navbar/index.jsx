
import React, { useContext} from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import { Theme } from "../../contexts/Theme";
import "./styles.css";

const NavBar = () => {

    const {themeColor, setThemeColor} = useContext(Theme)
    
    const handleChange = (event)=>{
        setThemeColor(event.target.value)
    

    }
    console.log(themeColor);
    return (
        <ul className={themeColor === 'dark' ? "ul-container-dark" : "ul-container"}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/category/Familiar'>Familiar</Link>
                <Link to='/category/Love'>Love</Link>
                <Link to='/category/Action'>Action</Link>
            </li>


<select value={themeColor} onChange={handleChange}>

    <option value={'light'}>Light</option>
    <option value={'dark'}>Dark</option>
</select>
           
            <CartWidget />
        </ul>
    );
};

export default NavBar;