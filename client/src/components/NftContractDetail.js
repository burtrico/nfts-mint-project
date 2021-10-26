import React from "react";
import '../index.css';


const NftContractDetail = ({content, nftContract, handleCancel, cancelNftContractButton}) => {
  return (
    <div className="nftContractDetail">
      {/* <div className="box"> */}
        {/* <span className="close-icon" onClick={handleClose}>x</span> */}
        {content}
      {/* </div> */}
    </div>
  );
};
 
export default NftContractDetail;