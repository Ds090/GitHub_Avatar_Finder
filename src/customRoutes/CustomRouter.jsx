import { Route, Routes } from "react-router-dom";
import UserData from "../Components/UserDetails/UserData";

// CustomRoute component defines the application's routing configuration.
function CustomRoute() {
    return (
        <Routes>
            {/* Define a route for the path '/' */}
            <Route path="/" element={<UserData />} />
        </Routes>
    );
}

export default CustomRoute;
