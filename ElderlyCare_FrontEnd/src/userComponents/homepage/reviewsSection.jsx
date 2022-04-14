import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../userComponents/marginer";
import { ReviewCard } from "../../userComponents/reviewCard";
import { SectionTitle } from "../../userComponents/sectionTitle";

import User1Img from "../../assets/illustrations/VirtualDaughter.jpg";
import User2Img from "../../assets/illustrations/Doctor.jpg";
import User3Img from "../../assets/illustrations/meal2.jpg";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


const ReviewsContainer = styled(Element)`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap:wrap;
`;


const Diivv = styled.div`
  align-items: center;
  display: flex;
  justify-content:space-around
`;

const HorizontalRule = styled.hr`
  width: 7%;
  height: 0.31rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #015D13 0%, #07B92B 70%);
  backdrop-filter: blur(25px);
`;


export function ReviewsSection(props) {

  return (

    <ReviewsContainer>
      <SectionTitle >Services </SectionTitle>
      <HorizontalRule />
      <Marginer direction="vertical" margin="3em" />
      <Diivv>
        <ReviewCard
          reviewText=""
         
          username="Virtual Daughter"
          HyperLink ="See More"
          ImageUrl={User1Img}
          title="We provide trained care takers for  Total cost of Rs. 10000"
          Cost = "10000"
          icon={faAngleDown}
        />
       
        <ReviewCard
          reviewText=""
          username="Emergency Doctor Visit"
          ImageUrl={User2Img}
          title="We provide emergency doctor visit 
          for  Total cost of Rs. 20000 "
          icon={faAngleDown}
        />

        <ReviewCard
          reviewText=""
          username="Meal Service"
          ImageUrl={User3Img}
          title="We provide meal service according to health condition for total cost of Rs. 5000 "
          icon={faAngleDown}
        />
      </Diivv>
    </ReviewsContainer>

  );
}
