import React, { useState } from "react";
import "./styles/App.css";
import { ThemeProvider } from "styled-components";
import { createTheme } from "./styles/themes";
// import PostsPage from "./client/pages/PostsPage/PostsPage";
import { Routes, Route } from "react-router-dom";
// import { userRoutes } from "./client/Routes/userRoutse";
// import PrivateRoute from "./client/Routes/PrivateRoute/PrivateRoute";
import Layout from "../src/Layout/Layout";
import { useTypedSelector } from "./store/hooks/useTypedSelector";
// import { useActions } from "./store/hooks/useActions";

function App() {
  const userTheme = useTypedSelector((state) => state.theme.themeMode);
  const currentTheme = createTheme(userTheme);
  // const isLoggedIn = useTypedSelector((state) => state.session.isLoggedIn);
  // const { authorizeUser } = useActions();

  // if (!isLoggedIn) {
  //   authorizeUser();
  // }

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<PostsPage />} />
            {userRoutes.map(
              ({ path, id, Component, componentAdditionalProps, strict }) => {
                return (
                  <Route
                    key={id}
                    path={path}
                    element={
                      !strict ? (
                        <Component {...componentAdditionalProps} />
                      ) : (
                        <PrivateRoute>
                          <Component {...componentAdditionalProps} />
                        </PrivateRoute>
                      )
                    }
                  />
                );
              }
            )} */}
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
