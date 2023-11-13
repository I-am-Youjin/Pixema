import React from "react";
import ReactDom from "react-dom";
import FilterBar from "./FilterBar";
import { IFilter } from "../../../types/types";

const portal = document.getElementById("portal");

export const FilterBarPortal: React.FC<IFilter> = ({ isOpened, onClick }) =>
  ReactDom.createPortal(
    <FilterBar isOpened={isOpened} onClick={onClick} />,
    portal as HTMLElement
  );
