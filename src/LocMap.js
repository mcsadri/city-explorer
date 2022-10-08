import React from 'react';
import Image from 'react-bootstrap/Image'

class LocMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mapUrl: ''
        }
    };

    render () {
        return (
            <>
                {/* Image display solution completed with assistance from Andra Steele */}
                <Image
                    src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.location.lat},${this.props.location.lon}&zoom:11`}
                />
            </>
        )
    }
}

export default LocMap;
