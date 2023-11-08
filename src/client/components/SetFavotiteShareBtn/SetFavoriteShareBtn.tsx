import React, { createRef, useRef, useState } from "react";
import { BtnWrapper, StyledBtn, StyledInput } from "./styles";
import { useClipboard } from "use-clipboard-copy";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { useActions } from "../../../store/hooks/useActions";

const SetFavoriteShareBtn = () => {
  const clipboard = useClipboard();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    clipboard.copy();
    setCopied(!copied);
    setTimeout(() => setCopied(false), 1000);
  };

  const films = useTypedSelector((state) => state.films.allFilms);
  const { imdbID } = useParams();
  let thisFilm = (films as [])?.find((film: any) => film.imdbID === imdbID);

  const { addToFavorite, delFromFavorite } = useActions();

  const addToRemoveFromFavoriteFn = () => {
    (thisFilm as any)?.isFavorite
      ? delFromFavorite(thisFilm)
      : addToFavorite(thisFilm);
  };
  return (
    <BtnWrapper>
      <StyledBtn onClick={addToRemoveFromFavoriteFn}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.77 20.7843L12.48 17.4943C12.0722 17.1843 11.5078 17.1843 11.1 17.4943L6.77 20.7843C6.45424 21.0381 6.02377 21.0959 5.65228 20.9343C5.28078 20.7727 5.02957 20.4184 5 20.0143V5.95431C5.03878 5.12998 5.40465 4.35513 6.01656 3.80141C6.62847 3.24769 7.4359 2.96081 8.26 3.00431H15.26C16.0891 2.96643 16.8987 3.26256 17.5077 3.82643C18.1166 4.39029 18.4741 5.17479 18.5 6.00431V20.0143C18.4611 20.4038 18.2163 20.7426 17.8586 20.9017C17.501 21.0609 17.0855 21.0161 16.77 20.7843Z"
            fill="white"
          />
        </svg>
      </StyledBtn>
      <StyledBtn onClick={copyToClipboard}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="7.54545"
            cy="11.6363"
            r="2.54545"
            stroke="white"
            stroke-width="2"
          />
          <circle
            cx="16.4546"
            cy="6.54545"
            r="2.54545"
            stroke="white"
            stroke-width="2"
          />
          <circle
            cx="16.4546"
            cy="16.7273"
            r="2.54545"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M13.9998 16L10.0908 13.5455M10.0908 10.5L13.9998 8"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </StyledBtn>
      <StyledInput value={window.location.href} ref={clipboard.target} />
      <Stack
        sx={{
          width: "96%",
          position: "absolute",
          left: "2%",
          bottom: "1%",
          opacity: copied ? "0.6" : "0",
          zIndex: "10",
        }}
        spacing={2}
      >
        <Alert severity="success"> URL copied to clipboard</Alert>
      </Stack>
    </BtnWrapper>
  );
};

export default SetFavoriteShareBtn;
