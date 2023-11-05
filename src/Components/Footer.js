import React from "react";
import './FooterStyles.css'
 
const Footer = () => {
    return (
        <div class='box'>
            <h1 class='section'>Contact Support</h1>
            <div class='container'>
            <ul class='list'>
                    <li class='list-item'>
                        <h2>Service Desk</h2>
                        <p>(000) 000-0000</p>
                    </li>
                </ul>
                <ul class='list'>
                    <li class='list-item'>
                        <h2>Contact Email</h2>
                        <p>placeholder@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer