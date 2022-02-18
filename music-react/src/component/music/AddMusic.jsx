import React, {Component} from 'react'
import SongDataService from '../../service/SongDataService'


class AddMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            songTitle: "",
            artistName: "",
            onAlbum: "",
            collection: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let song = {
            id: this.state.id,
            songTitle: this.state.songTitle,
            artistName: this.state.artistName,
            onAlbum: this.state.onAlbum
        }
        SongDataService.addSong(song)
            .then(this.props.history.push(`songRegistry`))
            
            this.state.collection.forEach((elm) => {

            })
    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Add Employee</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>ID:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled/>
                        </div>
                        <div>
                            <label>Job Title:</label>
                            <input className="form-control" type="text" name="songTitle" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Artist Name:</label>
                            <input className="form-control" type="text" name="artistName" onChange={this.handleChange}/>
                        </div>       
                        <div>
                            <label>Album</label>
                            <input className="form-control" type="text" name="onAlbum" onChange={this.handleChange}/>
                        </div>      
                        <br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form><br/><br/>
                </div>
            </div>
        )
    }
}

export default AddMusic
