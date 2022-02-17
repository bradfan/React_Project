import axios from 'axios'

retrieveAllSongs() {

    retrieveAllSongs() {
        return axios.get(`http://localhost:8080/retrieveAllSongs`);
    }

    deleteSong(id) {
        return axios.delete(`http://localhost:8080/deleteSong`);
    }
    updateSong(song) {
        return axios.put(`http://localhost:8080/updateSong`)
    }

    addSong(song) { 
        return axios.post(`http://localhost:8080/addSong`)
    }
}
export default new SongDataService()