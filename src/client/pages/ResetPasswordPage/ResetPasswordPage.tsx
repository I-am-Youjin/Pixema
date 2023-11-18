import React, { useState } from "react";
import { PageWrapper } from "./styles";
import Logo from "../../components/Logo/Logo";
import {
  LogoWrapper,
  AuthWrapper,
  Title,
  InputsWrapper,
  BtnWrapper,
  Rights,
} from "./styles";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (inputValue) {
      const auth = getAuth();
      sendPasswordResetEmail(auth, inputValue)
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          setError(true);
          setTimeout(() => setError(false), 5000);
        });
    } else {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };
  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo navBarIsOpen={false} />
      </LogoWrapper>
      <AuthWrapper>
        <Title>Reset password</Title>
        <InputsWrapper>
          <CustomInput
            type="email"
            placeholder="Your email"
            lable="Email"
            onChange={(event) => handleChangeValue(event)}
            value={inputValue}
          />
        </InputsWrapper>
        <BtnWrapper>
          <CustomBtn
            onClick={handleResetPassword}
            title="Reset"
            isPurple={true}
          />
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
          Wrong email
        </Alert>
      </Stack>
    </PageWrapper>
  );
};

export default ResetPasswordPage;
