import React from 'react';
//import ReactDOM from 'react-dom';
import './header.css';
import logo from './../../assets/logo.svg'

// function Header() {
//     const head = < div id = "Header" > < img id = "logo"
//     src = { logo }
//     alt = "iconLogo" / > < /div>

//     return head;
// }




class Header extends React.Component {
    render() {
        return <div id = "Header" > < img id = "logo"
        src = { logo }
        alt = "iconLogo" / > < /div>;
    }
}
export default Header;