import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import AboutScreen from "./AboutScreen";
import Error404 from "./Error404 ";
import HomeScreeen from "./HomeScreeen";
import LoginScreen from "./LoginScreen";


import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={ <HomeScreeen /> } />
            <Route path="/about" element={ <AboutScreen /> } />
            <Route path="/login" element={ <LoginScreen /> } />
            <Route path="*"  element={ <Error404 /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter