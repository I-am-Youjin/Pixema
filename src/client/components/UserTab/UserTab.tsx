import React, { useEffect, useState } from "react";
import {
  StyledWrapper,
  StyledUserIcon,
  UserInfoConteiner,
  UserName,
  UserActionBtn,
  UserActionsWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { IUserTab } from "../../../types/types";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useActions } from "../../../store/hooks/useActions";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../../../store/hooks/useAuth";

const UserTab: React.FC<IUserTab> = ({ isDesktop }) => {
  const stateUser = useTypedSelector((state) => state.user);
  const [openedUserActions, setOpenedUserActions] = useState(false);
  const { removeUser, clearFavorite } = useActions();
  const navigate = useNavigate();

  const handleOpenProfileActions = () => {
    setOpenedUserActions(!openedUserActions);
  };

  const handleLogOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    removeUser();
    clearFavorite();
  };

  const handleOpenSettings = () => {
    navigate("/settings");
  };

  const initials = stateUser.name
    ?.split(" ")
    .reduce(
      (initials: string, nameOrSurname: string) =>
        initials + nameOrSurname[0].toUpperCase(),
      ""
    );

  useAuth();

  return stateUser.name ? (
    <StyledWrapper $isDesktop={isDesktop} onClick={handleOpenProfileActions}>
      <UserInfoConteiner>
        <StyledUserIcon>{initials}</StyledUserIcon>
        <UserName>{stateUser.name}</UserName>
      </UserInfoConteiner>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.7808 9.37534C18.1258 9.8066 18.0559 10.4359 17.6247 10.7809L12 15.2807L6.37527 10.7809C5.94401 10.4359 5.87408 9.8066 6.21909 9.37534C6.5641 8.94408 7.1934 8.87416 7.62466 9.21917L12 12.7194L16.3753 9.21917C16.8065 8.87416 17.4358 8.94408 17.7808 9.37534Z"
          fill="white"
        />
      </svg>
      <UserActionsWrapper $isOpen={openedUserActions}>
        <UserActionBtn onClick={handleOpenSettings}>Edit profile</UserActionBtn>
        <UserActionBtn onClick={handleLogOut}>Log out</UserActionBtn>
      </UserActionsWrapper>
    </StyledWrapper>
  ) : (
    <StyledWrapper $isDesktop={isDesktop} onClick={() => navigate("/SignIn")}>
      <UserInfoConteiner>
        <StyledUserIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </StyledUserIcon>
        <UserName>Sign in</UserName>
      </UserInfoConteiner>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.23496 6.35943C9.66622 6.01442 10.2955 6.08434 10.6405 6.5156L15.1403 12.1403L10.6405 17.765C10.2955 18.1963 9.66622 18.2662 9.23496 17.9212C8.8037 17.5762 8.73378 16.9469 9.07879 16.5156L12.579 12.1403L9.07879 7.76499C8.73378 7.33373 8.8037 6.70444 9.23496 6.35943Z"
          fill="#AFB2B6"
        />
      </svg>{" "}
    </StyledWrapper>
  );
};

export default UserTab;
