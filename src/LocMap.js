import React from 'react';
import Image from 'react-bootstrap/Image'

class LocMap extends React.Component {

    render () {
        return (
            <>
                <Image
                    src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.location.lat},${this.props.location.lon}&zoom:10`}
                    alt={`${this.props.location.display_name}`}
                    title={`${this.props.location.display_name}`}
                />
            </>
        )
    }
}

export default LocMap;
