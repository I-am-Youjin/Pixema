import React from "react";
import ReactDom from "react-dom";
import DesktopNavBar from "./DesktopNavBar";
import { INavBar } from "../../../types/types";

const portal = document.getElementById("portal");

export const NavBarPortal: React.FC<INavBar> = ({ isOpened }) =>
  ReactDom.createPortal(
    <DesktopNavBar isOpened={isOpened} isDesktop={false} />,
    portal as HTMLElement
  );
