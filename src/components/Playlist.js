import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [songId, setSongId] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://bumblebeat.onrender.com/playlist/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        console.log("Fetched data:", data); // Log fetched data

        if (data?.songs?.length === 0) {
          setPlaylistTitle("Sample Playlist");
          setPlaylist([
            {
              id: 1,
              title: "Driver's License",
              artistName: "Olivia",
              time: "3:30",
            },
            {
              id: 2,
              title: "Big Reputation",
              artistName: "Taylor Swift",
              time: "4:15",
            },
            {
              id: 3,
              title: "Year Without Rain",
              artistName: "Selena Gomez",
              time: "3:55",
            },
          ]);
        } else {
          setPlaylistTitle(data.title);
          setPlaylist(data.songs);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        console.error('Stack trace:', error.stack);
      }
    };

    fetchData();
  }, [id]);

  const removeSong = async (songId) => {
    try {
      const response = await fetch(`https://bumblebeat.onrender.com/playlist/${id}/songs/${songId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlaylist(data);
    } catch (error) {
      console.error('Error removing song:', error.message);
      console.error('Stack trace:', error.stack);
    }
  };

  const addSong = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://bumblebeat.onrender.com/playlist/${id}/songs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ songId })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlaylist(data);
      setSongId("");
    } catch (error) {
      console.error('Error adding song:', error.message);
      console.error('Stack trace:', error.stack);
    }
  };

  return (
    <div>
      <h1>{playlistTitle}</h1>
      <form id="playlistAddSong"
      className="playlistAddSong" 
      onSubmit={addSong}>
        <input
        id="playlistAddSongInput"
          type="text"
          value={songId}
          onChange={(e) => setSongId(e.target.value)}
          placeholder="Enter song ID"
          required
        />
        <button type="submit">Add Song</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((song, index) => (
            <tr key={song.id}>
              <td>{index + 1}</td>
              <td>{song.title}</td>
              <td>{song.artistName}</td>
              <td>{song.time}</td>
              <td>
                <button onClick={() => removeSong(song.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Playlist;
