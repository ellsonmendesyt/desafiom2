import React,{useContext} from 'react'
import {Link} from 'react-router-dom';

import { Navbar,Nav,NavItem } from './Header.styles';


const Header = () => {

   
    return (
        <Navbar >
            <Nav >
                   <NavItem to='/'>Home</NavItem>
                   <NavItem to='/carrinho'>Carrinho</NavItem>
                   
                   
            </Nav>
        </Navbar>
    )
}

export default Header
