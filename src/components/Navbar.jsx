import React from 'react';
import { Component } from "react";
import { MenuData } from "./MenuData";
import './Navbar.css';
class Navbar extends Component{
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})}
    render()
    {
        return(
            <nav className="NavbarItems">
                <h1 className="logo">ZAISEI <i className="fab fa-react"></i></h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                        MenuData.map((item, index)=>{
                            return(
                                <li key={index}><a href={item.url}className={item.cName}><i className={item.icon}>{item.title}</i></a></li>
                            )
                        })}
                </ul>
            </nav>
        )    
    }
} 
export default Navbar;