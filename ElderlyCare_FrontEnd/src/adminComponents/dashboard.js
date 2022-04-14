import React, { useEffect, useState } from "react";
import { Input, Select, TextArea, Button, CheckBox, UploadFile, Slideshow, InputValidation } from "../basicComponents";
import { COLORS, FONTS } from "../theme/theme";
import { Container } from "./offerElements";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom'
// import AddOffer from "./addOffer";

const Dashboard = () => {

    return(

        <p>You are subscribed to new services 
        
        </p>
    
      
    )
}

export default Dashboard;
// const URL = "http://localhost:8080/api";

// const Dashboard = () => {

//     return(
//         <div className="dashboard-container">
//             <div className="card" style={{width: "18rem"}}>
//             <img className="card-img-top" src="../images/food.jpg" alt="Card image cap"/>
//   <div className="card-body">
//     <h5 className="card-title">Meals</h5>
//     <h6 className="card-subtitle mb-2 text-muted">Add/Update/Remove Meals</h6>
//     {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//     {/* <a href="#" className="card-link">Open</a> */}
//     <Link to="./meals" className='card-link'>Open</Link>
//     {/* <a href="#" className="card-link">Another link</a> */}
//   </div>
// </div>
//         </div>
//     )
// }

// export default Dashboard;