import React from "react";
import SongDataService from "../../service/SongDataService";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";


function AddMusic() {
  const [songs, setSongs] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const returnToRegistry = useCallback(() =>
    navigate(`/songRegistry`, { replace: true })
  );

  useEffect(() => {
    SongDataService.addSong(songs).then((response) => {
      setSongs(response.data);
    });
  }, []);

    const handleChange = (e) => {
      console.log("add song SAVE btn clicked");
      setSongs({
        ...songs,
        [e.target.name]: e.target.value,
      });
      
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSongs({
      [e.target.name]: e.target.value,
    });
    SongDataService.addSong(songs);
    returnToRegistry();
  };
  return (
    <div>
      <div className="jumbotron" style={{ backgroundColor: "gray" }}>
        <h3 style={{ textAlign: "center" }}>Add Song</h3>
      </div>
      <div className="container">
        <form>
          <div className="form-group">
            <label>ID:</label>
            <input className="form-control" type="text" value={id} disabled />
          </div>
          <div>
            <label>Song:</label>
            <input
              className="form-control"
              type="text"
              name="songTitle"
             onChange={handleChange}
            />
          </div>
          <div>
            <label>Artist Name:</label>
            <input className="form-control" type="text" name="artistName"  onChange={handleChange}/>
          </div>
          <div>
            <label>Album</label>
            <input className="form-control" type="text" name="onAlbum"  onChange={handleChange}/>
          </div>
          <br />
          <br />
          <button className="btn btn-success" type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <br />
          <br />
        </form>
        <br />
        <br />
        <p></p>
      </div>
    </div>
  );
}

export default AddMusic;
