import SongDataService from "../../service/SongDataService";
import { Formik, Form, Field } from "formik";
import React, { Component } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function UpdateMusicComponent() {
  const [songs, setSongs] = useState({});
  const [loading, isLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/retrieveById/${id}`)
    .then(
        (response) => {
            setSongs(response.data);
            isLoading(false);
        }
    )
  },[]);


  const handleChange = (e)  =>{ 
      setSongs({
          ...songs,
          [e.target.name]:e.target.value
      })
  }

// //   const handleSubmit = (e) => {
//     e.preventDefault(); //remove this part if it stops working
//     setCar({
//         ...car,
//         [e.target.name]: e.target.value
//     })
//     CarService.updateCar(car).then
//     (goToCarsPage)
// }

  return (
    <div>
      <div className="songBackground">
        <h3>Update Song</h3>
      </div>
      <div className="container">
        <Formik
          initialValues={ id, songs.songTitle, songs.artistName, songs.onAlbum }
           onSubmit={handleChange}
          enableReinitialize={true}
        >
          {() => (
            <Form>
              <fieldset className="form-group">
                <label>Id</label>
                <Field
                  className="form-control"
                  type="text"
                  name= "id"
                  disabled
                />
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

              <button className="btn btn-success" type="submit" onSubmit={handleChange}>
                Save
              </button>
            </Form>
          )}
        </Formik>
        <p>{id}</p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default UpdateMusicComponent;
