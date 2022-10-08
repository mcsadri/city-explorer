import React from 'react';
import LocMap from './LocMap';

class LocInfo extends React.Component {
    render () {
        return (
            <>
                <h2>The city you searched for is: {this.props.location.display_name}</h2>
                <h2>Latitude = {this.props.location.lat}</h2>
                <h2>Longitude = {this.props.location.lon}</h2>
                <LocMap
                    location = {this.props.location}
                />
            </>
        )
    }
}

export default LocInfo;
