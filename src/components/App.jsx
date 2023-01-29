import { BrowserRouter, Route, Routes } from "react-router-dom";
import forms from "../forms.js";
import Header from "./Header";
import Finished from "./pages/Finished.jsx";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./styles/GlobalStyle.jsx";

export default function App() {
    const { signIn, signUp } = forms;

    return (
        <>
            <Header />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn form={signIn} />} />
                    <Route path="/sign-up" element={<SignUp form={signUp} />} />
                    <Route path="/finished" element={<Finished />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}