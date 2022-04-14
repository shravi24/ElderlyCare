import React from "react";
import Button from "../basicComponents/button";
import { FONTS, COLORS } from "../theme/theme";
import axios from "axios";
import {Link} from 'react-router-dom';
import AlertSuccess from "./success";

const OfferItem = ({ item ,offers, setOffers }) => {

    const URL = "http://localhost:8080";
    const link = `/gesture/offer/edit/${item.offer_id}`;

    const SuccessData = {
        title: "Success",
        type: "success",
        text: "Your transaction has been completed.",
        footer: ""
      };

      //console.log({subscriptionData});
    
    // console.log(subscriptionData);
    // const res = await axios.get(`some-url/todos`);
    
    const deleteOffer = () => {
        console.log("i am deleting")
        axios.post(`${URL}/api/users/delete/${item.id}`).then( res => {
            if(res.data.deleted)
                setOffers(offers.filter( o => o.id !== item.id ));
            console.log(res.data);
        });
    }

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-end",
                margin: "5px 0",
                borderBottom: `2px solid ${COLORS.bg}`
            }}

            key={item.id}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        width: "150px",
                        marginRight: 10
                    }}
                >
                    {/* <img src={item.image !== "" && require("../images/"+item.image).default} alt={item.intitule} style={{ width: "150px", borderRadius: "30px 0 30px 0", }} /> */}
                    {/* <img src="../images/House-1637532024720-2893.jpg" alt={item.intitule} style={{ width: "150px", borderRadius: "30px 0 30px 0", }} /> */}
                </div>

                <div
                    style={{
                        width: "60%",
                    }}
                >
                    <span>Name: {item.name}, <br></br>
                    Address: {item.address}, </span>
                    <span> <br></br>Area Code: {item.area}</span>
                    <p
                        style={{
                            ...FONTS.desc,
                        }}
                    />
                        {/* {item.description.slice(0, 200)} ...</p> */}
                </div>

            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: 10
                }}
            >
            <span>Payment Required: {item.totalcost}</span>
                
                    {/* <Button text="Pay" bgColor={COLORS.lightGreen} width="100px" icon="edit" /> */}
                    <AlertSuccess {...SuccessData} />
                
              <Button text="Discard" bgColor={COLORS.red} width="100px" icon="trash-alt" onClick={deleteOffer}/>
            </div>
        </div>
    );
}

export default OfferItem