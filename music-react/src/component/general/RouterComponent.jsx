import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UpdateMusicComponent from '../music/UpdateMusicComponent'
import SongRegistryComponent from '../music/SongRegistryComponent'
import AddMusic from '../music/AddMusic'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import { Switch } from "react-router"

class RouterComponent extends Component {
    render() {
        return (
            <div>
            <Router>
            <Header/>
                <Switch>
                    <Route exact path="/">WelcomeComponent name="Bob"</Route>
                    <Route path="/theSong/:id" component={AddMusic} />
                    <Route path="/song/:id/:artistName" component = {UpdateMusicComponent} />
                    <Route path = "/songRegistry" exact component = {SongRegistryComponent} />
                    </Switch> 
                 <Footer />      
            </Router>
            </div>
        )
    }
}
export default RouterComponent