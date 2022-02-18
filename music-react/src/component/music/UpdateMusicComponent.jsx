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
            .then(() => this.props.history.push(`/songRegistry`))
        }

        render() {
            let {id, songName, artistName, onAlbum} = this.state
            return (
                <div>
                    <div className="songBackground">
                    <h3>Update Song</h3>
                    </div>    
                    <div className="container"> <Formik
                    initialValues={{id, songName, artistName, onAlbum}}
                    onSubmit={this.onSubmit}
                    enableReinitialize={true}
                >
                    {
                        () => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset>
                                    <label>Song</label>
                                    <Field className="form-control" type="text" name="songName" />
                                </fieldset>
                                <fieldset>
                                    <label>Artist</label>
                                    <Field className="form-control" type="text" name="artistName" />
                                </fieldset>
                                <fieldset>
                                    <label>Album Name</label>
                                    <Field className="form-control" type="text" name="albumName" />
                                </fieldset>
                                
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    } 
                </Formik><br/><br/>
            </div>
        </div>
    )
}
}

export default UpdateSongComponent

    
}