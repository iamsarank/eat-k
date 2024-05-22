import React from "react";
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Order your favorite food here</h2>
                <p>Overall,"Creating Delicious Dishes" is an essential resource for anyone looking to start a food business or take their culinary skills to the next level.</p>
                <a href="#explore-menu"><button>View Menu</button></a>
            </div>
        </div>
    )
};

export default Header;
