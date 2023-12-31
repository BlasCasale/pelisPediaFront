import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingView from "./src/View/LandingView/LandingView";
import FormLogin from "./src/components/FormLogin/FormLogin";
import FormRegister from './src/components/FormRegister/FormRegister';
import NavBar from "./src/components/NavBar/NavBar";
import MovieListContainer from "./src/components/MovieListContainer/MovieListContainer";
import FavoritesListContainer from "./src/components/FavoritesListContainer/FavoritesListContainer";
import Footer from "./src/components/Footer/Footer";

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingView />} />
                    <Route path="/login" element={<FormLogin />} />
                    <Route path="/register" element={<FormRegister />} />
                    <Route path="/home" element={<MovieListContainer />} />
                    <Route path="/favorites" element={<FavoritesListContainer />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};