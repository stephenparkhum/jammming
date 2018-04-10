import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
      super(props);
      //this.state.searchResults = [name, artist, album];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jammming</h1>
        </header>
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchResults />

            <div className="App-playlist">
              // Add a SearchResults component -->
              // Add a Playlist component -->
            </div>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
