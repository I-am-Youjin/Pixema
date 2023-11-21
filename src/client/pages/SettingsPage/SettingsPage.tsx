import React, { useState, useEffect } from "react";
import {
  PageWrapper,
  Title,
  InnerWrapper,
  TextWrapper,
  InnerTitle,
  Description,
  SettingsSection,
  SectionsWrapper,
  InputsWrapper,
  NewPasswordWrapper,
  BtnsWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useActions } from "../../../store/hooks/useActions";
import { ThemeModes } from "../../../styles/themes";
import CustomSwitch from "../../components/CustomSwitch/CustomSwitch";
import CustomInput from "../../components/CustomInput/CustomInput";
import {
  getAuth,
  updatePassword,
  updateEmail,
  updateProfile,
  reauthenticateWithCredential,
  User,
  EmailAuthProvider,
  verifyBeforeUpdateEmail,
  signOut,
} from "firebase/auth";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { useSnackbar } from "notistack";

const SettingsPage = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const defaultUser = {
    name: user?.displayName,
    email: user?.email,
    password: "",
    newPassword: "",
    confirmPassword: "",
  };

  const stateUser = useTypedSelector((state) => state.user.email);
  const theme = useTypedSelector((state) => state.theme.themeMode);
  const { toggleTheme, setUser, clearFavorite, removeUser } = useActions();
  const [updateData, setUpdateData] = useState(defaultUser);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleChangeTheme = () => {
    if (theme === "dark") {
      toggleTheme(ThemeModes.LIGHT);
    } else {
      toggleTheme(ThemeModes.DARK);
    }
  };

  const handleSetUser = () => {
    if (user) {
      setUser({
        name: user.displayName,
        email: user.email,
        id: user.uid,
        token: (user as any).accessToken,
      });
    }
  };

  const handleSave = async () => {
    if (
      updateData.password &&
      updateData.newPassword &&
      updateData.confirmPassword &&
      updateData.password !== updateData.newPassword &&
      updateData.newPassword === updateData.confirmPassword
    ) {
      const credential = EmailAuthProvider.credential(
        user?.email as string,
        updateData.password
      );

      await reauthenticateWithCredential(user as User, credential)
        .then(() => {
          updatePassword(user as User, updateData.newPassword);
          enqueueSnackbar("Password has been update", {
            variant: "success",
          });
        })
        .catch(() => {
          enqueueSnackbar("Wrong current password", {
            variant: "error",
          });
        });
    }

    if (
      updateData.password &&
      updateData.newPassword &&
      updateData.password === updateData.newPassword
    ) {
      enqueueSnackbar("Current password and new password match", {
        variant: "error",
      });
    }

    if (updateData.newPassword !== updateData.confirmPassword) {
      enqueueSnackbar("Password confirmation faild", {
        variant: "error",
      });
    }

    if (updateData.name && updateData.name !== user?.displayName) {
      await updateProfile(user as User, { displayName: updateData.name });
      enqueueSnackbar("User name has been changed.", {
        variant: "success",
      });
      setUser({
        name: updateData.name,
        email: updateData.email,
        token: (user as any)?.accessToken,
        id: user?.uid,
      });
    }

    if (
      updateData.password &&
      updateData.email &&
      updateData.email !== user?.email
    ) {
      const credential = EmailAuthProvider.credential(
        user?.email as string,
        updateData.newPassword ? updateData.newPassword : updateData.password
      );
      await reauthenticateWithCredential(user as User, credential)
        .then(() => {
          verifyBeforeUpdateEmail(
            auth.currentUser as User,
            updateData.email as string
          ).then(() => {
            if (user?.emailVerified) {
              updateEmail(auth.currentUser as User, updateData.email as string)
                .then(() => {
                  enqueueSnackbar("Email update success.", {
                    variant: "success",
                  });
                })
                .catch(() => {
                  signOut(auth);
                  clearFavorite();
                  enqueueSnackbar("Please, verify your email before update.", {
                    variant: "success",
                  });
                  setTimeout(() => {
                    navigate("/");
                    window.location.reload();
                  }, 3000);
                });
            }
          });
        })
        .catch(() => {
          enqueueSnackbar("Wrong current password.", {
            variant: "error",
          });
        });
    }
  };

  const handleChangeValue = (
    fieldName: keyof typeof defaultUser,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdateData(
      (prevData: {
        name: string | null | undefined;
        email: string | null | undefined;
        password: string;
        newPassword: string;
        confirmPassword: string;
      }) => {
        return { ...prevData, [fieldName]: event.target.value };
      }
    );
  };

  useEffect(() => {
    if (user) {
      setUpdateData({
        name: user?.displayName,
        email: user?.email,
        password: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  return (
    <PageWrapper>
      <SectionsWrapper>
        {stateUser ? (
          <SettingsSection>
            <Title>Profile</Title>
            <InputsWrapper>
              <CustomInput
                type="text"
                lable="Name"
                placeholder="Your name"
                onChange={(event) => handleChangeValue("name", event)}
                value={updateData.name ? updateData.name : ""}
              />
              <CustomInput
                type="email"
                lable="Email"
                placeholder="Your email"
                onChange={(event) => handleChangeValue("email", event)}
                value={updateData.email ? updateData.email : ""}
              />
            </InputsWrapper>
          </SettingsSection>
        ) : null}
        {stateUser ? (
          <SettingsSection>
            <Title>Password</Title>
            <InputsWrapper>
              <CustomInput
                type="password"
                lable="Password"
                placeholder="Your password"
                onChange={(event) => handleChangeValue("password", event)}
                value={updateData.password}
              />
              <NewPasswordWrapper>
                <CustomInput
                  type="password"
                  lable="New password"
                  placeholder="New password"
                  onChange={(event) => handleChangeValue("newPassword", event)}
                  value={updateData.newPassword}
                />
                <CustomInput
                  type="password"
                  lable="Confirm password"
                  placeholder="Confirm password"
                  onChange={(event) =>
                    handleChangeValue("confirmPassword", event)
                  }
                  value={updateData.confirmPassword}
                />
              </NewPasswordWrapper>
            </InputsWrapper>
          </SettingsSection>
        ) : null}
        <SettingsSection>
          <Title>Color mode</Title>
          <InnerWrapper>
            <TextWrapper>
              <InnerTitle>{theme === "dark" ? "Dark" : "White"}</InnerTitle>
              <Description>Use dark theme</Description>
            </TextWrapper>
            <CustomSwitch onClick={handleChangeTheme}></CustomSwitch>
          </InnerWrapper>
        </SettingsSection>
      </SectionsWrapper>
      {stateUser ? (
        <BtnsWrapper>
          <CustomBtn
            title="Cancel"
            onClick={() => setUpdateData(defaultUser)}
          />
          <CustomBtn title="Save" isPurple={true} onClick={handleSave} />
        </BtnsWrapper>
      ) : null}
    </PageWrapper>
  );
};

export default SettingsPage;
