import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.header`
 background-color: #15161B;
 display: flex;
 justify-content: center;
 align-items:center;



`

export const Nav= styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
/* outline: 1px solid olive; */
max-width: 1200px;
width: 100%;
padding: 0rem 2rem;
`

export const NavItem = styled(Link)`
 /* background-color: orange; */
 padding: 0rem 0;
 text-decoration:none;
 color: #fff;
 position: relative;
 font-size: 1.2rem;
 
 &:after{
     content: '';
     position: absolute;
     height: 3px;
     width: 0%;
     bottom: -2px;
     left: 0px;
     background-color: #660099;
     transition: 0.3s ease-in-out;
    }
    
    &:hover{
     /* color: #660099; */
     &:after{
         width: 100%;

     }
 }


 
`









