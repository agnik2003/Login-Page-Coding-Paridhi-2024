import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  AltLogin,
  AltLoginButton,
  BackgroundImage,
  Container,
  Cover,
  DesktopOptimization,
  FacebookButton,
  GoogleButton,
  IconContainer,
  IconContainerResponsive,
  IconInputResponsive,
  /*Input,*/ InputField,
  InputIcon,
  LoginPopup,
  MaxWidth450px,
  MobileIconContainer,
  MobileInputField,
  Page,
  SignUpButton,
  TabletOptimization,
  Text,
  Title,
  Underline,
  Popup,
  CenteredContainer,
  Button,
} from "./signupStyles";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const SignUp = () => {
  const [inputList, setinputList] = useState([{ name: "" }]);
  const [verificationResults, setVerificationResults] = useState([]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
    // verifyGID(value);
  };

  // const verifyGID = async (value) => {
  //   try {
  //     const response = await axios.get(`http://localhost:6001/paridhi/event/coding/allyearcp/${value}`);
  //     if (response.status === 200) {
  //       // GID is valid, handle accordingly
  //       console.log(`GID ${value} is valid`);
  //     } else {
  //       // GID is invalid, handle accordingly
  //       console.log(`GID ${value} is invalid`);
  //     }
  //   } catch (error) {
  //     // Error occurred while verifying GID, handle accordingly
  //     console.error("Error verifying GID:", error);
  //   }
  // };



  const handleremove=index=>{
    const list=[...inputList];

    list.splice(index,1);
    setinputList(list);

  }

  const handleaddclick = () => {
    if (inputList.length < 2) {
      setinputList([...inputList, { name: "" }]);
      setVerificationResults([...verificationResults, null]);
    } else {
      alert("You can only add up to 2 names");
    }
  };

  const verifyGID = async (value, index) => {
    try {
      const response = await axios.get(`http://localhost:6001/paridhi/event/coding/allyearcp/${value}`);
      if (response.status === 200) {
        setVerificationResults(prevResults => {
          const updatedResults = [...prevResults];
          updatedResults[index] = "valid";
          return updatedResults;
        });
        console.log(`GID ${value} is valid`);
      } else {
        setVerificationResults(prevResults => {
          const updatedResults = [...prevResults];
          updatedResults[index] = "invalid";
          return updatedResults;
        });
        console.log(`GID ${value} is invalid`);
      }
    } catch (error) {
      console.error("Error verifying GID:", error);
    }
  };


  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  }, []);

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };

  return (
    <CenteredContainer>
      <Cover>
        <Container>
          <Title>CODING</Title>
          <Underline />
          <IconContainer>
            <InputIcon
              className="fa fa-user-o"
              aria-hidden="true"
            ></InputIcon>
            <InputField name="college" type="text" placeholder="Team Name" />
          </IconContainer>

          {inputList.map((x, i) => {
        return (
          <IconContainer key={i}>
            <InputIcon className="fa fa-id-card-o" aria-hidden="true"></InputIcon>
            <InputField name={`gid ${i+1}`} type="text" placeholder={`GID ${i+1}`} onChange={(e) => handleinputchange(e, i)} />
            {inputList.length !== 1 && (
            <Button className="fa fa-minus" onClick={() => handleremove(i)}></Button>
            )}
            {inputList.length - 1 === i && (
              <Button className="fa fa-plus"  onClick={handleaddclick}></Button>
            )}
            <Button className="Verify" onClick={() => verifyGID(x.name, i)}> Verify</Button>
            {verificationResults[i] && <Text>{verificationResults[i]}</Text>}
            

          </IconContainer>
          );
        })}
           {/* <IconContainer>
            <InputIcon
              className="fa fa-id-card-o"
              ar5ia-hidden="true"
            ></InputIcon>
            <InputField name="college" type="number" placeholder="TID" />
            <Button className="Verify"> Verify</Button>

          </IconContainer> */}

          <SignUpButton onClick={popup}>Pay Now</SignUpButton>
        </Container>
      </Cover>
    </CenteredContainer>
  );
};

export default SignUp;
