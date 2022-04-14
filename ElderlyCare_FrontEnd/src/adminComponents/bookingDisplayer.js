import React, { useEffect, useState } from "react";
import Bookings from "./bookings";
import { Container } from "./offerElements";
import axios from "axios";

const BookingDisplayer = () => {

    const URL = "http://localhost:8080/api";

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("userSession") !== null) {
            axios.get(`${URL}/users`).then(res => {
                setOffers(res.data);
            });
        }
    }, [])

    useEffect(() => {
        console.log(offers);
    }, [offers])

    return (
        <Container>
            {/* <Link to="/gesture/offer/add">
                <Button text="Book" bgColor={COLORS.lightGreen} width="100px" />
            </Link> */}
            <div>
                {offers.map(item => (
                    <Bookings key={item.offer_id} item={item} offers={offers} setOffers={setOffers}/>
                ))}
            </div>
        </Container>
    )
}


export default BookingDisplayer;