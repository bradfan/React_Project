import SongDataService from "../../service/SongDataService"
import { Formik, Form, Field} from 'formik'
import React, {Component } from 'react'

class UpdateMusicComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            songTitle: this.props.match.params.songTitle,
            artistName: this.props.match.params.artistName,
            onAlbum: this.props.match.params.onAlbum
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let song = {
            id: this.state.id,
            songTitle: values.songTitle,
            artistName: values.artistName,
            onAlbum: values.onAlbum
        }
            SongDataService.updateSong(song)
            .then(() => this.props.history.push(`/songRegistry`))
        }

        render() {
            let {id, songTitle, artistName, onAlbum} = this.state
            return (
                <div>
                    <div className="songBackground">
                    <h3>Update Song</h3>
                    </div>    
                    <div className="container"> <Formik
                    initialValues={{id, songTitle, artistName, onAlbum}}
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
                                    <Field className="form-control" type="text" name="songTitle" />
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

export default UpdateMusicComponent

    
