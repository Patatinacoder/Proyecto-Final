
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/category/Familiar'>Familiar</Link>
                <Link to='/category/Love'>Love</Link>
                <Link to='/category/Action'>Action</Link>
            </li>

            <CartWidget />
        </ul>
    );
};

export default NavBar;