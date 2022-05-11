import React from "react";
import './styles/App.css'
import { BrowserRouter, Routes, Link, Route} from "react-router-dom";
import LogIn from "./components/images/icons/logIn/LogIn";
import Button from "./components/UI/buttons/button/Button";
import Heart from "./components/images/icons/heart/Heart";
import MapMarker from "./components/images/icons/mapmarker/MapMarker";
import Search from "./components/images/icons/search/Search";
import AuthPage from "./pages/AuthPage";
import Navigation from "./pages/Navigation";

function App() {

  return (
    <BrowserRouter>  
        {/* тут ниже будут правила роутинга */}
        <Routes>       
              <Route path="" element={<AuthPage />} />
              <Route path="/navigation" element={<Navigation />} />
        </Routes>   

    </BrowserRouter>
    
  );
}

export default App;
