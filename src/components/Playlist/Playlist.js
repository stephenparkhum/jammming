import React from 'react';
import TrackList from '../TrackList/TrackList';
import Track from '../Track/Track';
import './Playlist.css';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
              <input defaultValue={'New Playlist'}/>
              <Track />
              <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>

        )
    }
}

export default Playlist;
