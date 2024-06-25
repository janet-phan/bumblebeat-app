import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// create state to hold list of songs in playlist
// identify playlist by id (to display songs)
// user params from react-router-dom
// useEffect (fetch request) -> connect to backend to find playlist by id
// create route that uses id
// fetch  request to route
// then then catch, chaining
// if response is successful, update state with setter function


const Playlist2 = () => {
  const [createPlaylistFormData, setCreatePlaylistFormData] = useState({
    playlistName: "",
    songs: "",
  });

  const handleCreatePlaylistFormDataChange = (e) => {
    const { name, value } = e.target;
    setCreatePlaylistFormData({
      ...createPlaylistFormData,
      [name]: value,
    });
  };
  console.log(createPlaylistFormData);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://bumblebeat.onrender.com/playlist/create-playlist", {
      method: "POST",
      body: JSON.stringify(createPlaylistFormData),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  //   return (
  // <div>
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>#</th>
  //         <th>Title/Artist</th>
  //         <th>Duration</th>
  //         <th>Remove</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {playlist.map((song, index) => (
  //         <tr key={song._id}>
  //           <td>{index + 1}</td>
  //           <td>{`${song.title} - ${song.artist}`}</td>
  //           <td>{song.duration}</td>
  //           <td>
  //             <button onClick={() => handleRemoveSong(song._id)}>Remove</button>
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // </div>

  return (
    <div className="playlist">
      <form
        id="createPlaylist"
        className="createPlaylist"
        onSubmit={handleFormSubmit}
      >
        <label>Playlist Name</label>
        <br />
        <input
          type="text"
          name="playlistName"
          id="playlistName"
          placeholder="Playlist Name"
          value={createPlaylistFormData.playlistName}
          onChange={handleCreatePlaylistFormDataChange}
          required
        />
        <br />
        <label>Songs</label>
        <br />
        <textarea
          type="text"
          name="playlistSongs"
          id="playlistSongs"
          placeholder="Playlist Songs"
          defaultValue="songs"
          onChange={handleCreatePlaylistFormDataChange}
          required
        />
        <br />
        <br />
        <button type="submit" value="Create Playlist">
          Create Playlist
        </button>
      </form>
    </div>
  );
};

export default Playlist2;
