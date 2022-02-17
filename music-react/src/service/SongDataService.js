import axios from 'axios'

class SongDataService {

   retrieveAllSongs() {
       return axios.get(`http://localhost:8080/retrieveAllSongs`);
   }

   deleteSong(id) {
    return axios.delete(`http://localhost:8080/deleteSong/${id}`)
}

updateSong(song) {
    return axios.put(`http://localhost:8080/updateSong/`, song)
}

addSong(song) {
    return axios.post(`http://localhost:8080/addSong/`, song)
}
}
export default new SongDataService()