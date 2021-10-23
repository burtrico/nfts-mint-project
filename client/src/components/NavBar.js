import { NavLink } from "react-router-dom";
import Logo from '../images/logo.png';
import React, { useState } from 'react'
// import CloudinaryUpload from './CloudinaryUpload'

const linkStyles = {
    padding: "3px 10px 3px 10px",
    margin: "5px",
    textDecoration: "none",
    borderRadius: "10px",
  };



function NavBar({setCurrentUser, currentUser, handleLogout}) {
    

    return(<>

<div className="title"><img src={Logo} alt="Logo"/></div>
    <div className="NavBar" >

        <div className="navlink">
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                background: "white",
                color: "black",
                }}
            >
                NFTs
            </NavLink>
        </div>  

        <div className="navlink">
            <NavLink
                to="/NftWallet"
                exact
                style={linkStyles}
                activeStyle={{
                background: "white",
                color: "black",
                }}
            >
                NFT Wallet
            </NavLink>
        </div>    

        <div className="navlink">
            <NavLink
                to="/NftMint"
                exact
                style={linkStyles}
                activeStyle={{
                background: "white",
                color: "black",
                }}
            >
                NFT Mint
            </NavLink>
        </div>

        <div className="navlink">
            <NavLink
                to="/NftContractContainer"
                exact
                style={linkStyles}
                activeStyle={{
                background: "white",
                color: "black",
                }}
            >
                NFT Contracts
            </NavLink>
            <hr/>
            <button onClick={handleLogout}>Logout</button>
        </div> 


    </div>
</>)
}


export default NavBar;