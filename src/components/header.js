import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { menuData } from '../data/menuData'
import { Button } from "./button"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">openDOORS</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to = {item.link} key={index}>
            {item.title}
          </NavLink>
        
        ))}
      </NavMenu>
      {/* <NavBtn>
          <Button primary="true" round="true" to="/trips">Join us</Button>
      </NavBtn> */}
    </Nav>
  )
}
 

export default Header

const Nav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  height: 80px;
  
`
const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1 rem;
  margin: 6px;
  height:100;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px){
    display: block;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    transform: translate(-100%, 75%);
    position: absolute;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none
  }
`
// const NavBtn = styled.div`
//   display:flex;
//   align-items: center;
//   margin-right: 24px;

//   @media screen and (max-width: 768px){
//     display: none
//   }
// `