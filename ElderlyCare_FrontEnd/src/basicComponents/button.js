import React from "react";
import { COLORS, FONTS } from "../theme/theme";
import styled from "styled-components";

const Btn = styled.button`
    width: ${props => props.width};
    background-color: ${props => props.bgColor.primary};
    padding: 5px 10px;
    text-align: center;
    border-radius: 25px;
    border:none;
    outline:none;
    color: white;
    cursor: pointer;
    margin: 0 5px 0 0;
    transition: .3s ease-in-out;
    
    &:hover{
        background-color: ${props => props.bgColor.hover}
    }
`;

const Button = ({ width, bgColor, text, icon = "", onClick, type = "button" }) => {

    return (
        <Btn width={width} bgColor={bgColor} onClick={onClick} type={type}>
            {icon !== "" ? <i className={`fas fa-${icon}`} style={{ margin: "0 5px", fontSize: 15 }}></i> : <></>}

            <span
                style={{
                    ...FONTS.btnText
                }}
            >
                {text}
            </span>

        </Btn>
    )
}

export default Button