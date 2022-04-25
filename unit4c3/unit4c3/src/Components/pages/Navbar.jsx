import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
// import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



  
    

export const NavBar = styled.div`
color:blue;
    border: solid;
  
    width: 90%;
    margin: auto;
    height: 40px;
    background-color: #fd9b95;
    text-align: center;
 display:flex;
    font-size:25px;
    justify-content: space-around;
 
`

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <NavBar className="nav" >
        {/* keep all the NavLinks here */}
      <div><Link to="/Home">Home</Link></div> 
        
      
      <div> <Link to="/About">About</Link></div> 
        <div><Link to="/Books">Books</Link></div>
        <div><Link to="/Login">Login</Link></div> 
          
     
        
      </NavBar>
    </>
  );
};
