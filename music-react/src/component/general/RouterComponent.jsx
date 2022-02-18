import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import UpdateMusicComponent from "../music/UpdateMusicComponent";
import SongRegistryComponent from "../music/SongRegistryComponent";
import AddMusic from "../music/AddMusic";
import WelcomeComponent from "./WelcomeComponent";


class RouterComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
                    <Route exact path="/" element={<WelcomeComponent/>}></Route>
                    <Route path="/theSong/:id" element={<AddMusic/>}></Route>
                    <Route path="/song/:id/:artistName" element={<UpdateMusicComponent/>}></Route>
                    <Route path="/songRegistry" element={<SongRegistryComponent/>}></Route> 
                    </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default RouterComponent;
