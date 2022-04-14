import React from 'react';
import Button from '../basicComponents/button';
import Input from '../basicComponents/input';
import { FONTS } from '../theme/theme';
import { COLORS } from '../theme/theme';
import { useState } from 'react';
import Select from '../basicComponents/select';
import axios from 'axios';
import validator from 'validator'
import AlertSuccess from "./success";

function SingUp(props) {

    const [signUp, setSignUp] = useState({});
    const GenderOptions = ["Male", "Female"];
    const [type, setType] = useState("password")
    const [icon, setIcon] = useState("eye")
    // const GenderOptions1 = ["Male", "Female"];

    const [errorMessage, setErrorMessage] = useState('')
  
    // const validate = (value) => {
    
    //   if (validator.isStrongPassword(value, {
    //     minLength: 8, minLowercase: 1,
    //     minUppercase: 1, minNumbers: 1, minSymbols: 1
    //   })) {
    //     setErrorMessage('Is Strong Password')
    //   } else {
    //     setErrorMessage('Is Not Strong Password')
    //   }
    // }

    const SuccessData = {
        title: "Success",
        type: "success",
        text: "Your signup process has been completed.",
        footer: ""
      };

    const [emailError, setEmailError] = useState('');
  const validateEmail = (e) => {
    var email_id = e.target.value
  
    if (validator.isEmail(email_id)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
    const handleIconClick = () => {
        if (type === "password") {
            setType('text');
            setIcon('eye-slash');
        }
        else {
            setType('password');
            setIcon('eye')
        }
    }

    // emailValidation() {
    //     const regex =
    //       /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //     return !(!signUp?.emailId || regex.test(signUp?.emailId) === false);
    //   }

    const handleSubmit = (e) => {
        console.log("test signup")
        e.preventDefault();
        const pattern = /^[a-zA-Z]+$/;
        const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const phpat = /^[0-9\b]+$/;
        if((!signUp?.full_name || pattern.test(signUp?.full_name) === false))
        {
            alert('valid full name is required')
        }
        if((!signUp?.phoneNo || phpat.test(signUp?.phoneNo) === false))
        {
            alert('valid phone No is required')
        }
        if((!signUp?.emailId || regex.test(signUp?.emailId) === false))
        {
            alert('valid email is required')
        }
        if((signUp?.password != signUp?.confirmPassword))
        {
            alert('passwords does not matched')
        }
        if ((signUp?.password === signUp?.confirmPassword)) {
            console.log(JSON.stringify(signUp))
            axios.post('http://localhost:8080/api/signup', signUp).then(res => {
                if (res.data === "ok")
                    window.location.href = "/login"
                alert(res.data)
            })
        }
        
    }


    return (
        //
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            justifyItems: 'center',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)) , url("https://bostonglobe-prod.cdn.arcpublishing.com/resizer/sSO6mgfJs3MwiNbZKV8JM-ahfFY=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ZTNK7NRE7UI6FOOVLISGFY3ECQ.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'ceter',
            width: '100vw',
            height: '100vh'

        }}>

            <div style={{
                display: 'flex',
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 50,
                paddingTop: 50,
                flexDirection: 'column',
                alignItems: 'center',
                width: 800,
                height: 500
            }}>


                <div style={{
                    width: "100%",
                    paddingLeft: "100px",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}>
                    {/* <img src={logoWhite} style={{ width: "100px" }} /> */}

                </div>
                <span style={{
                    ...FONTS.bigTitle,
                    color: COLORS.lightGreen.primary,
                }}>
                    Sign Up
                </span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div style={{
                        width: "650px",
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        padding: 10,
                    }}>
                        <Input label="Full name" name="full_name" data={signUp} setData={setSignUp} width="300px" />
                        <Input label="Username" name="user_name" data={signUp} setData={setSignUp} width="300px" />
                    </div>

                    <div style={{
                        width: "650px",
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',

                        padding: 10,
                    }}>
                        <Input label="Phone" width="300px" name="phoneNo" data={signUp} setData={setSignUp} />
                       
                        <Input label="Password" width="300px" name="password" data={signUp} setData={setSignUp} type={type} icon={icon} onClickIcon={() => handleIconClick()} />
                    </div>

                    <div style={{
                        width: "650px",
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',

                        padding: 10,
                    }}>

                        <Select label="Gender" options={GenderOptions} width="300px" name="gender" data={signUp} setData={setSignUp} />
                        <Input label="Confirm password" width="300px" name="confirmPassword" data={signUp} setData={setSignUp} type={type}  />
                        <Input label="Email Id" width="300px" name="emailId"  data={signUp} setData={setSignUp} onChange={(e)=>{ validateEmail("email",e.target.value)}}  />
                        
                        {/* <span>Enter Email: </span><input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)}></input> <br /> */}
                        
                    </div>

                    <div style={{
                        marginTop: 20,
                        width: "650px",
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <Button bgColor={COLORS.lightGreen} width="100px" text="Sign Up" type="submit" />
                    </div>
                </form>

            </div>

        </div>
    );
}

export default SingUp;