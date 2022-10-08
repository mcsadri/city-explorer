import React from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image'

class LocMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mapUrl: ''
        }
    };

    getMap = async () => {
        const locIqMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.location.lat},${this.props.location.lon}&zoom:11`;
        const response = await axios.get(locIqMap);
        console.log('locIqMap: ', locIqMap);
        this.setState({mapUrl: response});
    };

    render () {
        return (
            <>
                map = {this.getMap()};
                {/* <Image
                    src={}
                    alt={}
                    title={}
                /> */}
            </>
        )
    }
}

export default LocMap;
