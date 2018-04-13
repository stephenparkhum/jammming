import React from 'react';
import './Track.css'

class Track extends React.Component {
    render() {
        return (
            <div className="Track">
              <div className="Track-information">
                <h3>Track Name</h3>
                <p>Artist | Track Album</p>
              </div>
              <a className="Track-action"></a>
            </div>
        )
    }

    renderAction(isRemoval) {
        if (isRemoval) {
            return '-';
        } else {
            return '+';
        }
    };
}

export default Track;
