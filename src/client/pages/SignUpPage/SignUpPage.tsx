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
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  User,
  deleteUser,
  updateProfile,
} from "firebase/auth";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import debounce from "lodash.debounce";
import { actionCodeSettings } from "./actionSignUpSettings";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const emptyUserData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const [error, setError] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");
  const [signUpData, setSignUpData] = useState(emptyUserData);
  const navigate = useNavigate();

  const handleChangeValue = (
    fieldName: keyof typeof emptyUserData,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpData(
      (prevData: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
      }) => {
        return { ...prevData, [fieldName]: event.target.value };
      }
    );
  };

  const SignUp = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
      .then(() => {
        sendEmailVerification(
          auth.currentUser as User,
          actionCodeSettings
        ).then(() => {
          updateProfile(auth.currentUser as User, {
            displayName: signUpData.name,
          });
          enqueueSnackbar("Check your email", { variant: "success" });
          setTimeout(() => {
            navigate("/");
          }, 3000);
          setTimeout(() => {
            const auth = getAuth();
            const user = auth.currentUser;
            if (!user?.emailVerified) {
              deleteUser(user as User);
            }
          }, 30000);
        });
      })
      .catch(() => {
        setErrorMessege("User exists!");
        AlertFn();
      });
  };

  const AlertFn = () => {
    setError(true);
    setTimeout(() => setError(false), 5000);
  };

  const handleSignUp = () => {
    switch (true) {
      case !(
        signUpData.email &&
        signUpData.password &&
        signUpData.name &&
        signUpData.confirmPassword
      ):
        setErrorMessege("You have empty fields");
        return AlertFn();
      case !(signUpData.password === signUpData.confirmPassword):
        setErrorMessege("Passwords mismatch");
        return AlertFn();
      case !signUpData.email.includes("@"):
        setErrorMessege(`Email not include "@" symbol`);
        return AlertFn();
      default:
        return SignUp();
    }
  };

  const debouncedHandle = debounce(handleSignUp, 300);

  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo navBarIsOpen={false} />
      </LogoWrapper>
      <AuthWrapper>
        <Title>Sign Up</Title>
        <InputsWrapper>
          <CustomInput
            type="text"
            placeholder="Your name"
            lable="Name"
            onChange={(event) => handleChangeValue("name", event)}
            value={signUpData.name}
          />
          <CustomInput
            type="email"
            placeholder="Your email"
            lable="Email"
            onChange={(event) => handleChangeValue("email", event)}
            value={signUpData.email}
          />
          <CustomInput
            type="password"
            placeholder="Your password"
            lable="Password"
            onChange={(event) => handleChangeValue("password", event)}
            value={signUpData.password}
          />
          <CustomInput
            type="password"
            placeholder="Confirm password"
            lable="Confirm password"
            onChange={(event) => handleChangeValue("confirmPassword", event)}
            value={signUpData.confirmPassword}
          />
        </InputsWrapper>
        <BtnWrapper>
          <CustomBtn
            onClick={debouncedHandle}
            title="Sign up"
            isPurple={true}
          />
          <AfterBtnTextWrapper>
            <ContextualText $isClickable={false} $size="16px">
              Already have an account?
            </ContextualText>
            <ContextualText
              $isClickable={true}
              $size="16px"
              $isPurple={true}
              onClick={() => navigate("/SignIn")}
            >
              Sign In
            </ContextualText>
          </AfterBtnTextWrapper>
        </BtnWrapper>
      </AuthWrapper>
      <Rights>© All Rights Reserved</Rights>
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
    </PageWrapper>
  );
};

export default SignUpPage;
