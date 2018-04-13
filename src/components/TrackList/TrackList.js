import React from 'react';
import Track from '../Track/Track';
import './TrackList.css'

class TrackList extends React.Component {
    render() {
        return (
            <div className="Track">
              <div className="Track-information">
                <h3>Deliquesce</h3>
                <p>Maestus | Deliquesce</p>
              </div>
              <a className="Track-action"></a>

            </div>

        )


    }
}

export default TrackList;
