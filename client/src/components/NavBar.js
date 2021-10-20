import { NavLink } from "react-router-dom";
import Logo from '../images/logo.png';


const linkStyles = {
    padding: "3px 10px 3px 10px",
    margin: "5px",
    textDecoration: "none",
    borderRadius: "10px",
  };




function NavBar({ color, title, description, changeColor }) {
    

    return(<>

<div className="title"><img src={Logo} alt="Logo"/></div>
    <div className="NavBar" >

                {/* <NavLink to="/api/nfts">- NFTs -</NavLink>
            <NavLink to="/api/nft_contracts">- NFT Contracts -</NavLink>
            <NavLink to="/api/nft_contracts">- NFT Contracts -</NavLink> */}

        <div className="navlink">
            <NavLink
                to="/nfts"
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
                // to="/NftContractContainer"
                to="/nft_contracts"
                exact
                style={linkStyles}
                activeStyle={{
                background: "white",
                color: "black",
                }}
            >
                NFT Contracts
            </NavLink>
        </div> 

        

        

        

    </div>
</>)
}


export default NavBar;