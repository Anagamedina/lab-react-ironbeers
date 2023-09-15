import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from "./components/Navbar";
import AllBeersPage from "./pages/AllBeersPage";
import NewBeerPage from "./pages/NewBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import HomePage from "./pages/HomePage";
import SingleBeerPage from "./pages/SingleBeersPage";


function App() {
  return (
    <div className="App">
    <Navbar/>

       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/beers/:id" element={<SingleBeerPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
       </Routes>   
    </div>
  )
}

export default App


//npm install --save-dev @babel/plugin-proposal-private-property-in-object
