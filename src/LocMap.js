import React from 'react';
import Image from 'react-bootstrap/Image'

class LocMap extends React.Component {

    render () {
        return (
            <>
                {/* Image display solution completed with assistance from Andra Steele */}
                <Image
                    src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.location.lat},${this.props.location.lon}&zoom:10`}
                />
            </>
        )
    }
}

export default LocMap;
