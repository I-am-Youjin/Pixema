import React, { useState } from "react";
import "./styles/App.css";
import { ThemeProvider } from "styled-components";
import { createTheme } from "./styles/themes";
import MainPage from "./client/pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import { userRoutes } from "./client/Routes/UserRoutes";
import Layout from "../src/Layout/Layout";
import { useTypedSelector } from "./store/hooks/useTypedSelector";

function App() {
  const userTheme = useTypedSelector((state: any) => state.theme.themeMode);
  const currentTheme = createTheme(userTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            {userRoutes.map(
              ({ path, id, Component, componentAdditionalProps }) => {
                return (
                  <Route
                    key={id}
                    path={path}
                    element={<Component {...componentAdditionalProps} />}
                  />
                );
              }
            )}
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
