import SongDataService from "../../service/SongDataService"

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            songName: this.props.match.params.jobTitle,
            artistName: this.props.match.params.artistName,
            onAlbum: this.props.match.params.onAlbum
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let song = {
            id: this.state.id,
            songName: values.songName,
            artistName: values.artistName,
            onAlbum: values.onAlbum
        }
            SongDataService.updateSong(song)
            .then(() => this.props.history.push(`/SongRegistry`))
        }
    
}