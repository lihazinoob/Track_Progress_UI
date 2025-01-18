import ThemeProvider from "./context/theme_context";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import UserInfoContextProvider from "./context/user_info_context";
import "./index.css";
function App() {
    return (
        <>
            <ThemeProvider storageKey="theme">
                <UserInfoContextProvider>
                    <RouterProvider router={router} />
                </UserInfoContextProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
