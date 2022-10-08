import React from 'react';

class Location extends React.Component {
    render () {
        return (
            <>
                <h2>The city you searched for is: {this.props.location.display_name}</h2>
                <h2>Latitude = {this.props.location.lat}</h2>
                <h2>Longitude = {this.props.location.lon}</h2>
            </>
        )
    }
}

export default Location;
