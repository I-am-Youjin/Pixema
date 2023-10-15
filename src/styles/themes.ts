export enum ThemeModes {
  LIGHT = "light",
  DARK = "dark",
}

const palettes = {
  [ThemeModes.DARK]: {
    primary: {
      purple: "#7B61FF",
      main: "#000000",
      contextual: "#AFB2B6",
      contrastText: "#ffffff",
    },
    secondary: {
      error: "#FF5154",
      green: "#00A340",
      yellow: "#F3A608",
      orange: "#F45D2D",
      light: "#80858B",
      dark: "#242426",
      graphite: "#323537",
    },
  },
  [ThemeModes.LIGHT]: {
    primary: {
      purple: "##7B61FF",
      main: "#FFFFFF",
      contextual: "#AFB2B6",
      contrastText: "#000000",
    },
    secondary: {
      error: "#FF5154",
      green: "#00A340",
      yellow: "#F3A608",
      orange: "#F45D2D",
      light: "#80858B",
      dark: "#242426",
      graphite: "#323537",
    },
  },
};

export const createTheme = (mode: ThemeModes) => {
  return {
    palette: {
      mode: mode,
      ...palettes[mode],
    },
  };
};
