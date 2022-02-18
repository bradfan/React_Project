import UpdateSongComponent from "../music/UpdateMusicComponent";
import SongRegistryComponent from "../music/SongRegistryComponent";
import AddMusic from "../music/AddMusic"

class RouterComponent extends Component {
    render() {
        return (
            <div>
            <Router>
            <HeaderComponent/>
                <Switch>
                    <Route exact path="/">WelcomeComponent name="Bob"</Route>
                    <Route path="/theSong/:id" component={AddMusic} />
                    <Route path="/song/:id/:artistName" component = {UpdateSongComponent} />
                    <Route path = "/songRegistry" exact component = {SongRegistryComponent} />
                    </Switch> 
                 <FooterComponent />      
            </Router>
            </div>
        )
    }
}
export default RouterComponent