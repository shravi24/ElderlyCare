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

    const [userId, setUserId] = useState();


    const [houseData, setHouseData] = useState(
        {
            'user': { "user_id": "" },
            "address": "",
            "floor": "",
            "area": "",
            "city": "",
            "image": "",
            "user_number": "1",
         
            "duration": "",
            "description": ""
            // "wifi": "",
            // "water_electricity": "",
            // "created_at": "",
            // "updated_at": ""
        });
    const [roomsData, setRoomsData] = useState({});
    const [page, setPage] = useState(1);
    const [activeContract, setActiveContract] = useState(true);
    const options = {
        wifiOptions: ["Exist/notIncluded", "Dont Exist", "Exist/Included"],
        waterElectricutyOptions: ["Exist/Included", "Exist/notIncluded"],
        roomsNumberOptions: [1, 2, 3, 4, 5],
        contractOptions: [3, 6, 9, 12],
        floorOptions: [1, 2, 3, 4, 5, 6, 7],
        personsNumberOptions: [1, 2, 3],
        equipment: {
            room: ["Virtual Daughter", "Doctor Visit", "Meal Delivery", "Seniority Products"],
            kitchen: ["fridge", "water heater", "washing machine", "oven"],
        },
        cities: ["Casablanca", "Fés", "Tanger", "Marrakech", "Salé", "Meknès", "Rabat", "Oujda", "Kénitra", "Agadir", "Tétouan", "Témara", "Safi",
            "Mohammédia", "Khouribga", "El Jadida", "Béni Mellal", "Nador", "Taza", "Khémisset", "Settat"],
    }
    const [allImages, setAllImages] = useState([]);
    const [allImagesNames, setAllImagesNames] = useState([]);


    const addUsers = () => {

        axios.get(`${URL}/offers/recentOne/${userId}`).then(res => {

            if (res.data !== null) {
                let added = false;

                for (const r in roomsData) {
                    var img1, img2;

                    allImages.map((img, i) => {

                        if (!isNaN(img[roomsData[r]["intitule"]]?.length - 1)) {
                            img1 = img[roomsData[r]["intitule"]][img[roomsData[r]["intitule"]].length - 1].image1;
                            img2 = img[roomsData[r]["intitule"]][img[roomsData[r]["intitule"]].length - 1].image2;
                        }
                    })

                    //create the object that i will send to my database
                    const user = { ...roomsData[r] };

                    //delete key i dont need to send to backend
                    // delete room.images;

                    //add and update the values of certain keys in object in rder to send it to backend
                    // room.offer.offer_id = res.data;
                    // room.equipment = room.equipment.join();
                    // room.image1 = img1;
                    // room.image2 = img2;

                    axios.post(`${URL}/users/add`,user).then(res => {
                        if (res.data.added) {
                            added = true;
                            console.log("User added");
                        }
                    });
                }
            }
        });

        sendImagesToserver()
    }

    const sendImagesToserver = () => {
        let imageData;
        console.log(allImages);

        allImages.map((img, i) => {

            var objectName = img[Object.keys(img)][img[Object.keys(img)].length - 1];
            console.log(Object.keys(img))
            img[Object.keys(img)].map((file, i) => {
                if (i !== img[Object.keys(img)].length - 1) {
                    imageData = new FormData();
                    imageData.append('imageFile', file);
                    imageData.append('imageName', objectName[Object.keys(objectName).length === 1 ? 'image' : `image${i + 1}`]);

                    axios.post(`${URL}/upload/image`, imageData, {
                        onUploadProgress: progressEvent => {
                            console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
                        }
                    })
                }
            })

        })

        setTimeout(function(){ window.location.href="/gesture/offer" }, 1000);
    }

    const addHouseData = () => {
        var houseImageName;
        allImages.map((img, i) => {

            if (!isNaN(img["house"]?.length - 1 - 1))
                houseImageName = img["house"][img["house"].length - 1].image;

        })

        const house = {
            ...houseData,
            "image": houseImageName,
            "user": {
                "user_id": userId,
            }
        };

        axios.post(`${URL}/offers/add`, { ...house }).then(res => {
            if (res.data !== null) {
                console.log("housedata added");
                addUsers();
            }
        });
    }

    //update the state of contract to make it able to write inside the input
    const updateContract = (e) => {
        if (e.target.checked) {
            houseData.contract = true
            setActiveContract(false)
        }
        else {
            houseData.contract = false
            setHouseData({ ...houseData, duration: "" });
            setActiveContract(true)
        }
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
        addHouseData();
    }

    //render methods
    //method to render the next button changes in relation with the page number
    const RenderButton = () => {
        if (page === parseInt(houseData?.user_number) + 2) {
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
    const GlobalHouseInfo = ({ data, setData }) => {

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
                    {/* <p>Please enter the details of person for whom you want to book service</p> */}
                    <Input label="Full_name" width="400px" name="name" setData={setData} data={data} />
                        <Input label="Adress" width="400px" name="address" setData={setData} data={data} />
                        <Input label="Area (m)" width="400px" type="number" name="area" setData={setData} data={data} />
                        <TextArea label="Description" name="description" setData={setData} data={data} />
                        <div
                            styles={{
                                marginTop: 30
                            }}
                        >
                            <UploadFile name="image" data={data} setData={setData} multiple={false} allImages={allImages} setAllImages={setAllImages} allImagesNames={allImagesNames} setAllImagesNames={setAllImagesNames} />
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

    //render the rooms page by looping around an object to show different section of adding rooms to object
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
                                <UploadFile name="images" data={data} setData={setData} multiple={true} index={i + 1} allImages={allImages} setAllImages={setAllImages} allImagesNames={allImagesNames} setAllImagesNames={setAllImagesNames} />

                                <div
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        bachgroundColor: "red",
                                        borderRadius: 25,
                                        overflow: "hidden",
                                        boxShadow: "3px 5px 8px rgba(0,0,0,0.2)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 20,
                                    }}
                                >
                                    {data[i + 1]["images"].length > 0 ?

                                        <Slideshow imageList={data[i + 1]["images"]} />
                                        :
                                        <i className="fas fa-images" style={{ color: COLORS.lightGreen.primary, fontSize: 100 }}></i>
                                    }

                                </div>
                            </div>


                            <div>
                                {
                                    data[i + 1]["intitule"] !== "kitchen" && (
                                        <>
                                        <Input label="Area (m)" width="400px" type="number" name="area" setData={setData} data={data} />
                                            {/* <Input label="Address" width="400px" type="number" name="price" data={data} setData={setData} index={i + 1} /> */}
                                            <Select label="Persons" width="420px" name="nbr_personne" options={options.personsNumberOptions} setData={setData} data={data} index={i + 1} />
                                            {/* <Select label="Disponible beds" width="420px" name="nbr_bed_dispo" options={parseInt(roomsData[i + 1]?.nbr_personne) > 0 ? [...Array(parseInt(roomsData[i + 1]?.nbr_personne))].map((x, i) => i + 1) : []} setData={setData} data={data} index={i + 1} /> */}
                                        </>
                                    )
                                }

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
        if (parseInt(houseData?.user_number) > 0) {
            for (let i = 1; i <= houseData?.user_number; i++) {
                temp[i] = {
                    "offer": {
                        "offer_id": "",
                    },
                    "intitule": `room`,
                    "intitule1": `user ${i}`,
                    "image1": "",
                    "image2": "",
                    "images": [],
                    "nbr_personne": "",
                    "nbr_bed_dispo": "",
                    "price": "",
                    "equipment": [],
                }
            }
            temp[parseInt(houseData?.user_number) + 1] = {

                "offer": {
                    "offer_id": "",
                },
                "intitule": `kitchen`,
                "image1": "",
                "image2": "",
                "images": [],
                "nbr_personne": "",
                "nbr_bed_dispo": "",
                "price": "",
                "equipment": [],
            }
        }
        setRoomsData(temp);
    }, [houseData?.user_number]);

    useEffect(() => {
        if (localStorage.getItem('userSession') !== null)
            setUserId(localStorage.getItem('userSession'));
    }, [])

    return (
        <Container>

            <span style={{ color: COLORS.lightGreen.primary, ...FONTS.title }}>Book Service</span>
            <form onSubmit={(e) => sendData(e)}>
                {page === 1 && GlobalHouseInfo({ data: houseData, setData: setHouseData })}
                {page >= 2 && users({ data: roomsData, setData: setRoomsData })}

                <RenderButton />
            </form>
        </Container>
    )
}

export default AddOffer;