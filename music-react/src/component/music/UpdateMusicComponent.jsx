import SongDataService from "../../service/SongDataService";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function UpdateMusicComponent() {
  const [songs, setSongs] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const returnToRegistry = useCallback(() =>
    navigate(`/songRegistry`, { replace: true })
  );

  useEffect(() => {
    axios.get(`http://localhost:8080/retrieveById/${id}`).then((response) => {
      setSongs(response.data);
      });
  }, []);

  const handleChange = (e) => {
    console.log("update song SAVE btn clicked");
    setSongs({
      ...songs,
      [e.target.name]: e.target.value,
    });
    SongDataService.updateSong(songs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSongs({
      ...songs,
      [e.target.name]: e.target.value,
    })
    returnToRegistry();
  };

  return (
    <div>
      <div className="songBackground">
        <h3>Update Song</h3>
      </div>
      <div className="container">
        <form className="form-control">
          <label>ID</label>
          <input
            className="form-control"
            placeholder="Choose an ID that hasn't been assigned."
            type="text"
            name="id"
            onChange={handleChange}
            required
          />
          <label>Song</label>
          <input
            className="form-control"
            type="text"
            placeholder="Update Song Title"
            name="songTitle"
            onChange={handleChange}
            required
          />
          <label>Artist</label>
          <input
            className="form-control"
            type="text"
            placeholder="Update Artist Name"
            name="artistName"
            onChange={handleChange}
            required
          />
          <label>Artist</label>
          <input
            className="form-control"
            type="text"
            placeholder="Update Album Name"
            name="onAlbum"
            onChange={handleChange}
            required
          />

          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
       <br />
        <br />
      </div>
    </div>
  );
}

export default UpdateMusicComponent;


