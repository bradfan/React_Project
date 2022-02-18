import UpdateMusicComponent from "../music/UpdateMusicComponent";
import SongRegistryComponent from "../music/SongRegistryComponent";
import AddMusic from "../music/AddMusic"
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class RouterComponent extends Component {
    render() {
        return (
            <div>
            <Router>
            <HeaderComponent/>
                <Switch>
                    <Route exact path="/">WelcomeComponent name="Bob"</Route>
                    <Route path="/theSong/:id" component={AddMusic} />
                    <Route path="/song/:id/:artistName" component = {UpdateMusicComponent} />
                    <Route path = "/songRegistry" exact component = {SongRegistryComponent} />
                    </Switch> 
                 <FooterComponent />      
            </Router>
            </div>
        )
    }
}
export default RouterComponent