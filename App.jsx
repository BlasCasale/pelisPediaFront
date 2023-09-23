import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingView from "./src/View/LandingView/LandingView";
import MainView from './src/View/MainView/MainView';
import FormLogin from "./src/components/FormLogin/FormLogin";
import FormRegister from './src/components/FormRegister/FormRegister';

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingView />} />
                    <Route path="/login" element={<FormLogin />} />
                    <Route path="/register" element={<FormRegister />} />
                    <Route path="/main" element={<MainView />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};