import React, { useEffect, useState } from "react";
import { Input, Select, TextArea, Button, CheckBox, UploadFile, Slideshow, InputValidation } from "../basicComponents";
import { COLORS, FONTS } from "../theme/theme";
import { Container } from "./offerElements";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const URL = "http://localhost:8080/api";
const URL1 = "http://localhost:3000";

const AddOffer = () => {

    //Constants
    const [registrantId, setRegistrantId] = useState();
    const [subscriptionData, setSubscriptionData] = useState(
        {
            "registrant_id": 1,
            "assistant_service": false,
            "doctor_service": false,
            "meal_service": false,
            "products_service": false,
            "totalcost": 0,
            "user_number": "1",


        });

    const [usersData, setUsersData] = useState({});
    const [page, setPage] = useState(1);

    //Options
    const options =
    {

        roomsNumberOptions: [1, 2, 3, 4, 5],
        choice: ["true", "false"],

        personsNumberOptions: [1, 2, 3],
        equipment: {
            room: ["Virtual Daughter", "Doctor Visit", "Meal Delivery", "Seniority Products"]

        },
        Area: ["Bharati Vidyapeeth 411046", "Katraj 411043", "Shaniwar Peth 411020", "Sadashive Peth 411024", "Shivajinagar 411016", "Meknès", "Rabat", "Oujda", "Kénitra", "Agadir", "Tétouan", "Témara", "Safi",
            "Narhe 411090", "Sangavi 411070", "Sinhgad Road 411055", "Kalewadi 411061", "Dhayari 411080", "Karve Nagar 411030", "Kothrud 411020", "Hadapsar 411013"],
    }


    //Add users to subscription 
    const addUsers = () => {
        var cost = 0
        if(subscriptionData['assistant_service'])
            {
                cost += 10000;
            }
            if(subscriptionData['doctor_service'])
            {
                cost += 20000;
            }
            if(subscriptionData['meal_service'])
            {
                cost += 5000;
            }
            if(subscriptionData['products_service'])
            {
                cost += 5000;
            }
        console.log(cost)
        usersData['totalcost'] = cost
        axios.post(`${URL}/users/add`,usersData).then(res => {
            if (res.data.added) {
                let added = true;
                console.log("User added");
            }
        });
        // axios.get(`${URL}/subscriptions`).then(res => {

        //     if (res.data !== null) {
        //         let added = false;

                


        //             //create the object that i will send to my database
        //             const user = { ...usersData };



        //             axios.post(`${URL}/users/add`,usersData).then(res => {
        //                 if (res.data.added) {
        //                     added = true;
        //                     console.log("User added");
        //                 }
        //             });
                
        //     }
        // });
    }



    //Update subscription data
    const addSubscriptionData = () => {
        const subscription = {
            ...subscriptionData,

            "user": {
                "user_id": registrantId,
            }
        };

        if(subscription['assistant_service'])
        {
            subscription['totalcost'] += 10000;
        }
        if(subscription['doctor_service'])
        {
            subscription['totalcost'] += 20000;
        }
        if(subscription['meal_service'])
        {
            subscription['totalcost'] += 5000;
        }
        if(subscription['products_service'])
        {
            subscription['totalcost'] += 5000;
        }
        console.log(subscriptionData['totalcost']);
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
        window.location.href = `${URL1}/gesture/dashboard`;
    
    }


    //render methods
    //method to render the next button changes in relation with the page number
    const RenderButton = () => {
        if (page === parseInt(subscriptionData?.user_number) + 1) {
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


    //render the first page that contain the global informations about the sub
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

                        <Select label="Assistant Service" width="420px" name="assistant_service" options={options.choice} setData={setData} data={data} />
                        <Select label="Meal Service" width="420px" name="meal_service" options={options.choice} setData={setData} data={data} />
                        <Select label="Products Service" width="420px" name="products_service" options={options.choice} setData={setData} data={data} />
                        <Select label="Doctor Service" width="420px" name="doctor_service" options={options.choice} setData={setData} data={data} />

                        {/* <div style={{ display: "flex", alignItems: "center" }}>
                        <label className="checkBox-container">
                            <input
                                type="checkbox"
                                onChange={subscriptionData.assistant_service}
                                checked={subscriptionData.assistant_service === true ? "checked" : ""}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <Select label="Assistance Service" width="385px" name="duration" options={options.choice} setData={setData} data={data}  />

                    </div> */}


                        <div
                            styles={{
                                marginTop: 30
                            }}
                        >

                        </div>
                    </div>

                    <div>
                        {/* <Select label="Number of persons for whom you will book service" width="420px" name="user_number" options={options.roomsNumberOptions} setData={setData} data={data} /> */}
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
                        <p>User</p>
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

                            <Input placeholder="Name" type = "text" width="400px" name="name" setData={setData} data={data} />
                            {/* <Input placeholder="Email" type = "text" width="400px" name="email_id" setData={setData} data={data} />
                            <Input placeholder="Phone No." type = "text" width="400px" name="phone_no" setData={setData} data={data} /> */}
                            <Input placeholder="Address" type = "text" width="400px" name="address" setData={setData} data={data} />
                            <Select placeholder="Area" width="400px" name="area" options={options.Area} setData={setData} data={data} />


                            {/* <div>

                                <p
                                    style={{
                                        ...FONTS.label,
                                        marginBottom: "5px"
                                    }}
                                >
                                    Services
                                </p>
                                {
                                    options.equipment["room"].map((equip, j) => (
                                        <CheckBox key={j} name="equipment" text={equip} data={data} setData={setData} index={0 + 1} />
                                    ))
                                }
                            </div> */}

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

            var cost = subscriptionData.totalcost;
            
            console.log(cost);

            for (let i = 1; i <= subscriptionData?.user_number; i++) {
                temp[i] = {
                    "name": "",
                    "email_id": "",
                    "phone_no": "",
                    "address": "",
                    "area": "",
                    "age": "",
                    "gender":"",
                    "totalcost": cost
                }
            }
        }setUsersData(temp);
        
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