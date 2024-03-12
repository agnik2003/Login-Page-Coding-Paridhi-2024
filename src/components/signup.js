import React, { useEffect, useState } from "react";
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

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove=index=>{
    const list=[...inputList];

    list.splice(index,1);
    setinputList(list);

  }

  const handleaddclick = () => {
    if (inputList.length < 2) {
      setinputList([...inputList, { name: "" }]);
    } else {
      alert("You can only add up to 2 names");
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
          <IconContainer>
            <InputIcon className="fa fa-id-card-o" aria-hidden="true"></InputIcon>
            <InputField name="name" type="number" placeholder={`GID ${i+1}`} onChange={(e) => handleinputchange(e, i)} />
            {inputList.length !== 1 && (
            <Button className="fa fa-minus" onClick={() => handleremove(i)}></Button>
            )}
            {inputList.length - 1 === i && (
              <Button className="fa fa-plus"  onClick={handleaddclick}></Button>
            )}
            <Button className="Verify"> Verify</Button>
            

          </IconContainer>
          );
        })}

          <SignUpButton onClick={popup}>Pay Now</SignUpButton>
        </Container>
      </Cover>
    </CenteredContainer>
  );
};

export default SignUp;
