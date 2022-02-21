import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UpdateMusicComponent from '../music/UpdateMusicComponent'
import SongRegistryComponent from '../music/SongRegistryComponent'
import AddMusic from '../music/AddMusic'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import WelcomeComponent from '../general/WelcomeComponent'


class RouterComponent extends Component {
    render() {
        return (
            <div>
            <Router>
            <Header/>
                <Routes>
                    <Route exact path="/" element={<WelcomeComponent/>}></Route>
                    <Route path="/theSong/:id" element={<AddMusic/>}></Route>
                    <Route path="/song/:id" element={<UpdateMusicComponent/>}></Route>
                    <Route path="/songRegistry" element={<SongRegistryComponent/>}></Route> 
                   </Routes>
                    <Footer />      
                 </Router>
            </div>
        )
    }
}
export default RouterComponent;
