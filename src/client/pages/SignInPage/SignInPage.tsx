import React, { useState } from "react";
import { PageWrapper } from "./styles";
import Logo from "../../components/Logo/Logo";
import {
  LogoWrapper,
  AuthWrapper,
  Title,
  InputsWrapper,
  ContextualText,
  BtnWrapper,
  AfterBtnTextWrapper,
  Rights,
} from "./styles";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../store/hooks/useActions";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const emptyUserData = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const { setUser } = useActions();
  const [signInData, setSignInData] = useState(emptyUserData);
  const [error, setError] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");
  const navigate = useNavigate();

  const handleChangeValue = (
    fieldName: keyof typeof emptyUserData,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignInData((prevData: { email: string; password: string }) => {
      return { ...prevData, [fieldName]: event.target.value };
    });
  };

  const SignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, signInData.email, signInData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch(() => {
        setErrorMessege("Wrong email or password");
        AlertFn();
      });
  };

  const AlertFn = () => {
    setError(true);
    setTimeout(() => setError(false), 5000);
  };

  const handleSignIn = () => {
    switch (true) {
      case !(signInData.email && signInData.password):
        setErrorMessege("There are empty fields");
        return AlertFn();
      default:
        return SignIn();
    }
  };

  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo navBarIsOpen={false} />
      </LogoWrapper>
      <AuthWrapper>
        <Title>Sign In</Title>
        <InputsWrapper>
          <CustomInput
            type="email"
            placeholder="Your email"
            lable="Email"
            value={signInData.email}
            onChange={(event) => handleChangeValue("email", event)}
          />
          <CustomInput
            type="password"
            placeholder="Your password"
            lable="Password"
            value={signInData.password}
            onChange={(event) => handleChangeValue("password", event)}
          />
        </InputsWrapper>
        <ContextualText
          $isClickable={true}
          onClick={() => navigate("/ResetPassword")}
        >
          Forgot password?
        </ContextualText>
        <BtnWrapper>
          <CustomBtn onClick={handleSignIn} title="Sign in" isPurple={true} />
          <AfterBtnTextWrapper>
            <ContextualText $isClickable={false} $size="16px">
              Don't have an account?
            </ContextualText>
            <ContextualText
              $isClickable={true}
              $size="16px"
              $isPurple={true}
              onClick={() => navigate("/SignUp")}
            >
              Sign Up
            </ContextualText>
          </AfterBtnTextWrapper>
        </BtnWrapper>
      </AuthWrapper>
      <Stack
        sx={{
          width: "96%",
          position: "absolute",
          left: "2%",
          bottom: "4%",
          opacity: error ? "1" : "0",
          zIndex: "10",
        }}
        spacing={2}
      >
        <Alert variant="filled" severity="error">
          {errorMessege}
        </Alert>
      </Stack>
      <Rights>© All Rights Reserved</Rights>
    </PageWrapper>
  );
};

export default SignInPage;
