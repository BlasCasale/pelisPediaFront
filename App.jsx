import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingView from "./src/View/LandingView/LandingView";
import FormLogin from "./src/components/FormLogin/FormLogin";
import FormRegister from './src/components/FormRegister/FormRegister';
import NavBar from "./src/components/NavBar/NavBar";
import Index from "./src/components/Index/Index";
import Favorites from "./src/components/Favorites/Favorites";

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingView />} />
                    <Route path="/login" element={<FormLogin />} />
                    <Route path="/register" element={<FormRegister />} />
                    <Route path="/index" element={<Index />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};