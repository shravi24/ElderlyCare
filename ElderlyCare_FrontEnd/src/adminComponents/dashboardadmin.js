import React, { useEffect, useState } from "react";
import { Input, Select, TextArea, Button, CheckBox, UploadFile, Slideshow, InputValidation } from "../basicComponents";
import { COLORS, FONTS } from "../theme/theme";
import { Container } from "./offerElements";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom'

import assistant1 from '../images/assistant1.jpg'
import doctor from '../images/Doctor.jpg'
import walker from '../images/walker.jpg'
import food from '../images/food.jpg'


//  import app from './styles/app.css';
// import menuAdmin from './styles/menuAdmin.css';

const URL = "http://localhost:8080/api";

const Dashboardadmin = () => {

    return(
        <div className="dashboard-container">
            <div className="card" style={{width: "18rem",display:"inline-block"}}>
               <img className="card-img-top" src={food} alt="Card image cap" style={{height:"285"}}/>
               <div className="card-body">
               <h5 className="card-title">Meals</h5>
                <h6 className="card-subtitle mb-2 text-muted">Add/Update/Remove Meals</h6>
   
                <Link to="./meals" className='card-link'>Open</Link>
   
               </div>
           </div>

           <div className="card" style={{width: "18rem",display:"inline-block"}}>
               <img className="card-img-top" src={doctor} alt="Card image cap" style={{height:"285"}}/>
               <div className="card-body">
               <h5 className="card-title">Doctors</h5>
                <h6 className="card-subtitle mb-2 text-muted">Add/Update/Remove Doctors</h6>
   
                <Link to="./doctors" className='card-link'>Open</Link>
   
               </div>
           </div>

           <div className="card" style={{width: "18rem",display:"inline-block"}}>
               <img className="card-img-top" src={walker} alt="Card image cap" style={{height:"285"}}/>
               <div className="card-body">
               <h5 className="card-title">Products</h5>
                <h6 className="card-subtitle mb-2 text-muted">Add/Update/Remove Products</h6>
   
                <Link to="./Product" className='card-link'>Open</Link>
   
               </div>
           </div>

           <div className="card" style={{width: "18rem",display:"inline-block"}}>
               {/* <img className="card-img-top" src="assistant1" alt="Card image cap"/> */}
               <img className="card-img-right" src={assistant1} style={{ width: "280px" , height : "300px" }} />
               <div className="card-body">
               <h5 className="card-title">Virtual Daughters</h5>
                <h6 className="card-subtitle mb-12 text-muted">Add/Update/Remove Virtual Daughters and Sons</h6>
   
                <Link to="./assistants" className='card-link'>Open</Link>
   
               </div>
               </div>

        </div>
    )
}

export default Dashboardadmin;