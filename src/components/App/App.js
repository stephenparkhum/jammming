import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/Searchbar';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          searchResults: [
          'name': 'Psycho',
          'artist': 'Post Malone',
          'album': 'Stoney',
          'id': 'song-id'
      ]
      }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
        </header>
        <SearchBar />
        <div>


            <div className="App-playlist">
              <SearchResults />
              <Playlist />
            </div>

        </div>

      </div>
    );
  }
}

export default App;
