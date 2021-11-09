// import div from "./App.module.css";
import { Route } from "react-router-dom";
import React from "react";
// import RecipeCards from "./components/RecipeCard/RecipeCards";
import LandingPage from "./components/Landing/LandingPage";
// import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import AddDog from "./components/AddDog/AddDog";
import About from "./components/About/About";
import Home from "./components/Home/Home.jsx";
// import ButtonsPage from "./components/Paged/Paged";
function App() {
  return (
    <div>    
      <Route exact path="/home" render={() => <Home />} />     
      <Route exact path="/" render={() => <LandingPage />} />
      <Route exact path="/About" render={() => <About />} />
      <Route exact path="/home/Detail" render={() => <Detail />} />
      <Route exact path="/home/AddDog" render={() => <AddDog />} />
      
    </div>
  );
}


export default App;