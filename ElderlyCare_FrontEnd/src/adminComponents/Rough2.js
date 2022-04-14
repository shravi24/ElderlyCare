import React, { useEffect, useState } from "react";
import { Input, Select, TextArea, Button, CheckBox, UploadFile, Slideshow, InputValidation } from "../basicComponents";
import { COLORS, FONTS } from "../theme/theme";
import { Container } from "./offerElements";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const URL = "http://localhost:8080/api";

const AddOffer = () => {

    //Constants
    const [registrantId, setRegistrantId] = useState();
    const [subscriptionData, setSubscriptionData] = useState(
        {
            'user': { "user_id": "" },//confusion with registrantId
            "address": "",
            "area": "",
            "user_number": "1",
            "age": "",
            "email_id": "",
            "phone_no": ""

        });

    const [usersData, setUsersData] = useState({});
    const [page, setPage] = useState(1);

    //Options
    const options =
    {

        roomsNumberOptions: [1, 2, 3, 4, 5],

        personsNumberOptions: [1, 2, 3],
        equipment: {
            room: ["Virtual Daughter", "Doctor Visit", "Meal Delivery", "Seniority Products"]

        },
        Area: ["Bharati Vidyapeeth 411046", "Katraj 411043", "Shaniwar Peth 411020", "Sadashive Peth 411024", "Shivajinagar 411016", "Meknès", "Rabat", "Oujda", "Kénitra", "Agadir", "Tétouan", "Témara", "Safi",
            "Narhe 411090", "Sangavi 411070", "Sinhgad Road 411055", "Kalewadi 411061", "Dhayari 411080", "Karve Nagar 411030", "Kothrud 411020", "Hadapsar 411013"],
    }


    //Add users to subscription 
    const addUsers = () => {
        axios.get(`${URL}/subscriptions`).then(res => {

            if (res.data !== null) {
                let added = false;

                for (const r in usersData) {


                    //create the object that i will send to my database
                    const user = { ...usersData[r] };



                    axios.post(`${URL}/users/add`, user).then(res => {
                        if (res.data.added) {
                            added = true;
                            console.log("User added");
                        }
                    });
                }
            }
        });
    }



//Update subscription data
    const addSubscriptionData = () => {
        const subscription = {
            ...subscriptionData,

            "user": {
                "user_id": registrantId,
            }
        };
        axios.post(`${URL}/offer/add`, { ...subscription }).then(res => {
            if (res.data !== null) {
                console.log("subscription added");
                addUsers();
            }
        });
    }

    //button methods
    //go next to the next page
    const goNext = () => {
        setPage(page + 1);
    }

    //go back to the previous page
    const goBack = () => {
        if (page > 1)
            setPage(page - 1);
    }

    //send data to the server 
    const sendData = (e) => {
        e.preventDefault()
        addSubscriptionData();
    }


    //render methods
    //method to render the next button changes in relation with the page number
    const RenderButton = () => {
        if (page === parseInt(subscriptionData?.user_number) + 2) {
            return (
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 30,
                    }}
                >
                    <Button text="Back" bgColor={COLORS.lightGreen} width="100px" onClick={goBack} />
                    <Button text="Submit" bgColor={COLORS.lightGreen} width="100px" type="submit" />
                </div>
            )
        }
        return (
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 30,
                }}
            >
                {page > 1 ? <Button text="Back" bgColor={COLORS.lightGreen} width="100px" onClick={goBack} /> : <div></div>}
                <Button text="Next" bgColor={COLORS.lightGreen} width="100px" onClick={goNext} />
            </div>
        )
    }


  //render the first page that contain the global informations about the house
  const GlobalSubscriptionInfo = ({ data, setData }) => {

    return (
        <div>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                }}
            >
                <div>
               
                <Input label="Name" width="400px" name="Name" setData={setData} data={data} />
                    <Input label="Address" width="400px" name="address" setData={setData} data={data} />
                    <Input label="Area" width="400px"  name="area" options={options.Area} setData={setData} data={data} />

                    <div
                        styles={{
                            marginTop: 30
                        }}
                    >
                        
                    </div>
                </div>

                <div>
                    <Select label="Number of persons for whom you will book service" width="420px" name="user_number" options={options.roomsNumberOptions} setData={setData} data={data} />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {/* <label className="checkBox-container">
                            <input
                                type="checkbox"
                                onChange={updateContract}
                                checked={activeContract === false ? "checked" : ""}
                            />
                            <span className="checkmark"></span>
                        </label> */}

                        {/* <Select label="Contract (months)" width="385px" name="duration" options={options.contractOptions} setData={setData} data={data} disabled={activeContract} /> */}

                    </div>
                    {/* <Select label="Floor" width="420px" name="floor" options={options.floorOptions} setData={setData} data={data} />
                    <Select label="Wifi" width="420px" name="wifi" options={options.wifiOptions} setData={setData} data={data} />
                    <Select label="Water & Electricity" width="420px" name="water_electricity" options={options.waterElectricutyOptions} setData={setData} data={data} /> */}

                </div>
            </div>
        </div>
    )
}

const users = ({ data, setData }) => {

    return (
        <>
            {[...Array(Object.keys(data).length > 0 ? Object.keys(data).length : 1)].map((room, i) => (
                i + 2 === page && (<div key={i + 1}>
                    <p>{data[i + 1]["intitule1"]}</p>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "flex-start",
                            flexWrap: "wrap",
                        }}
                    >

                    

                        
                        <div>
                                
                                <p
                                    style={{
                                        ...FONTS.label,
                                        marginBottom: "5px"
                                    }}
                                >
                                    Services
                                </p>
                                {
                                    options.equipment[data[i + 1]["intitule"].split(" ")[0]].map((equip, j) => (
                                        <CheckBox key={j} name="equipment" text={equip} data={data} setData={setData} index={i + 1} />
                                    ))
                                }
                            </div>

                    </div>
                </div>)
            ))
            }
        </>
    );
}

//initialise the object of roooms by using the number of rooms set by the user
useEffect(() => {
    const temp = {};
    if (parseInt(subscriptionData?.user_number) > 0) {
        for (let i = 1; i <= subscriptionData?.user_number; i++) {
            temp[i] = {
                "subscription": {
                    "subscription_id": "",
                },
                "intitule": `room`,
                "intitule1": `user ${i}`,
                'user': { "user_id": "" },//confusion with registrantId
                "address": "",
                "area": "",
                "user_number": "1",
                "age": "",
                "email_id": "",
                "phone_no": "",

                "price": "",
                "equipment": [],
            }
        }
  
    }
    setUsersData(temp);
}, [subscriptionData?.user_number]);

useEffect(() => {
    if (localStorage.getItem('userSession') !== null)
        setRegistrantId(localStorage.getItem('userSession'));
}, [])


return (
    <Container>

        <span style={{ color: COLORS.lightGreen.primary, ...FONTS.title }}>Book Service</span>
        <form onSubmit={(e) => sendData(e)}>
            {page === 1 && GlobalSubscriptionInfo({ data: subscriptionData, setData: setSubscriptionData })}
            {page >= 2 && users({ data: usersData, setData: setUsersData })}

            <RenderButton />
        </form>
    </Container>
)


}

export default AddOffer;