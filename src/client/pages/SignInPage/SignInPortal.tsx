import React from "react";
import ReactDom from "react-dom";
import SignInPage from "./SignInPage";

const portal = document.getElementById("portal");

export const FilterBarPortal = () =>
  ReactDom.createPortal(<SignInPage />, portal as HTMLElement);
