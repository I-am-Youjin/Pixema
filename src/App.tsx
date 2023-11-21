import "./styles/App.css";
import { ThemeProvider } from "styled-components";
import { createTheme } from "./styles/themes";
import MainPage from "./client/pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import { userRoutes } from "./client/Routes/UserRoutes";
import Layout from "../src/Layout/Layout";
import { useTypedSelector } from "./store/hooks/useTypedSelector";
import PrivateRoute from "./client/Routes/PrivateRoute";

function App() {
  const userTheme = useTypedSelector((state: any) => state.theme.themeMode);
  const currentTheme = createTheme(userTheme);
  // const user = useTypedSelector((state) => state.user.token);

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            {userRoutes.map(
              ({
                path,
                id,
                Component,
                componentAdditionalProps,
                hiddenForLoggedInUser,
              }) => {
                return (
                  <Route
                    key={id}
                    path={path}
                    element={
                      hiddenForLoggedInUser ? (
                        <PrivateRoute>
                          <Component {...componentAdditionalProps} />
                        </PrivateRoute>
                      ) : (
                        <Component {...componentAdditionalProps} />
                      )
                    }
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
