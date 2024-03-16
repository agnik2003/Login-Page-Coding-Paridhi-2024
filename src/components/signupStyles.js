import styled from "styled-components";
export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevent scrolling */
  background-image: url("https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover; /* Correct property name */
  height: 100vh;
  width: 100vw; /* Set width to 100vw to cover the whole page */
  position: fixed; /* Fix the background position */
  top: 0;
  left: 0;
  z-index: -1; /* Send the background to the back */
`;

export const Cover = styled.div`
  margin: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
  width: 30%;
  @media (max-width: 1120px) {
    width: 80%; /* Adjust the width as per your requirements */
  }
`;

export const BackgroundImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 100%; /* Set the height to cover the entire viewport */
`;

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.9);
  position: relative;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 0 0 0;
`;

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75em;
`;

export const AltLogin = styled.div`
  width: 80%;
  height: 2em;
  display: flex;
  justify-content: space-around;
`;

export const AltLoginButton = styled.div`
  width: 47.5%;
  height: 90%;
  border-radius: 0.25em;
  background-color: black;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const GoogleButton = styled(AltLoginButton)`
  margin-left: 2rem;
  background-image: url("../icons/google.png");
`;

export const FacebookButton = styled(AltLoginButton)`
  background-image: url("../icons/facebook.png");
`;

export const Input = styled.input`
  border: none;
  padding: 1em;
  font-size: 0.75em;
  outline: none;
  color: rgb(195, 195, 195);
  ::placeholder {
    color: rgb(155, 155, 155);
  }

  :focus {
    outline-color: rgb(149, 149, 149);
  }
`;

export const Title = styled.h1`
  color: rgb(231, 231, 231);
  font-size: 2.1rem;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 1%;
`;

export const Underline = styled.div`
  width: 10%;
  background-color: rgb(255, 101, 96);
  height: 3px;
  margin-bottom: 2%;
`;

export const SignUpButton = styled.div`
  width: 25%;
  height: 2em;
  color: white;
  background-color: rgb(255, 101, 96);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.05s;
  border-radius: 4rem;
  cursor: pointer;
  margin-bottom: 2%;

  &:hover {
    border: 3px solid rgb(231, 231, 231);
    background: transparent;
  }
`;

export const Text = styled.p`
  position: relative;
  font-size: 0.8rem;
  bottom: 0.5%;
  color: rgb(231, 231, 231);
  margin: 1%;
`;

export const LoginPopup = styled.div`
  position: absolute;
  height: 30em;
  width: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25em;
  background-color: black;
  color: white;
  bottom: 0;
  transform: scale(1);
  transition: 1.5s;
`;

export const IconContainer = styled.div`
  position: relative;
  display: inline-flex;
  text-align: center;
  width: 80%;
  margin-bottom: 10px;
  background: rgb(190, 190, 190, 0.3);
  border-radius: 0.2rem;
  padding: 0.7em;
  font-size: 1.2rem;
`;

export const InputIcon = styled.i`
  color: rgb(200 200 200);
  margin-right: 1rem;
  left: 20px;
  height: 1rem;
  font-size: 1.2rem;
`;

export const InputField = styled.input`
  background: transparent;
  width: 70%;
  border: none;
  outline: none;
  .fa {
    color: rgb(125, 125, 125);
    margin-right: 1rem;
    left: 20px;
  }
  color: rgb(170, 170, 170);
  font-size: 1rem;
`;

/* MOBILE VERSION */
export const TabletOptimization = styled.div`
  @media only screen and (min-device-width: 37em) {
    .page {
      font-size: 1em;
    }

    .cover {
      width: 60%;
      height: 70%;
    }
  }
`;

/* DESKTOP OPTIMIZATION */
export const DesktopOptimization = styled.div`
  @media only screen and (min-device-width: 64em) {
    .page {
      font-size: 1.25em;
    }

    .cover {
      width: 30%;
      height: 78%;
    }
  }
`;

/* MAX WIDTH 450PX */
export const MaxWidth450px = styled.div`
  @media (max-width: 450px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const IconContainerResponsive = styled(IconContainer)`
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const IconInputResponsive = styled(Input)`
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const MobileIconContainer = styled(IconContainer)`
  @media only screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const MobileInputField = styled(InputField)`
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;



export const Button = styled.div`
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &.fa{
    color: rgb(125,125,125);
    margin-left: 1rem;
    /* margin-right: 1rem; */
    // margin-top: .7rem;
    
  }
  &.Verify {
    // padding:0.3rem;
    font-size:1rem;
    /* Add styles for the Verify button */
    margin-right:0.5rem;
    margin-left: 0.5rem;
    // margin-top: 0.5rem; /* Move the button to the right side */
    /* height: 2rem; */
    // background-color: rgb(0, 112, 4,0.5); /* Green color, you can change it as needed */
    color: white;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    font:bold;

    &:hover {
      color: rgb(0, 255, 8,0.7);
      transition: 0.1s;
    }
  }

  &.fa-plus:hover,
  &.fa-minus:hover {
    color: rgb(220, 220, 220);
    transition: 0.1s;
  }
`;
