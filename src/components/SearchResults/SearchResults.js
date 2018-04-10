import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        return (
            <div searchResults={this.searchResults} className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} />
            </div>
        )
    }
}

export default SearchResults;
