import React, {Component} from 'react'
import SongDataService from '../../service/SongDataService'

class SongRegistryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
        // check this
        this.refreshSongRegistry = this.refreshSongRegistry.bind(this)
        this.deleteSongClicked = this.deleteSongClicked.bind(this)
        this.updateSongClicked = this.updateSongClicked.bind(this)
        this.addSongClicked = this.addSongClicked.bind(this)
    }

    componentDidMount() {
        this.refreshSongRegistry();
    }

    refreshSongRegistry() {
        SongDataService.retrieveAllSongs()
        .then(
            response =>
                this.setState({
                    songs: response.data,
                })
        )
    }

    deleteSongClicked(id, songName, artistName, onAlbum) {
        console.log('Delete Song Clicked')
        SongDataService.deleteSong(id)
        .then(
            response => {
                this.setState({message: `Deleted Song: ${songName} ${artistName}`})
                alert(this.state.message)
                this.refreshSongRegistry();
            }
        )
    }

    updateSongClicked(id, songName) {
        console.log('Update Song Clicked')
        this.props.songs.push(`/song/${id}/${songName}`)
    }

    addSongClicked() {
        console.log('Add Song Clicked')
        this.props.songs.push(`/theSong/-1`)
    }

    render() {
        return(
            <div className="container">
            <h1>Song Registry</h1><br/>
            <div className="songBackground">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Song Name</th>
                            <th>Artist Name</th>
                            <th>Album Name</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.songs.map (
                                songs =>
                                <tr key={songs.id}>
                                    <td>{songs.id}</td>
                                    <td>{songs.songName}</td>
                                    <td>{songs.artistName}</td>
                                    <td>{songs.onAlbum}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteSongClicked(songs.id, songs.songName, songs.artistName, songs.onAlbum)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => this.updateSongClicked(songs.id, songs.songName, songs.artistName, songs.onAlbum)}>Update</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <br />
                    <button className="btn btn-success" onClick={this.addSongClicked}>Add Song</button>
                </div>
                </div>    
            </div>
        )
    }
}

export default SongRegistryComponent