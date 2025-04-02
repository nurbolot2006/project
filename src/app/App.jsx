import React from 'react';
import HomePage from "../pages/HomePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "../components/layout/Layout.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <Layout/>}>
                        <Route index element={ <HomePage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;