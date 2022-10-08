import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import LocMap from './LocMap';

class LocInfo extends React.Component {
    render() {
        return (
            <>
                <h3>The city you searched for is: {this.props.location.display_name}</h3>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Show Latitude</Accordion.Header>
                        <Accordion.Body>The latitude for {this.props.location.display_name} is {this.props.location.lat}.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Show Longitude</Accordion.Header>
                        <Accordion.Body>The longtitude for {this.props.location.display_name} is {this.props.location.lon}.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Show Map</Accordion.Header>
                        <Accordion.Body>
                            <LocMap location={this.props.location}/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>
        );
    }
}

export default LocInfo;
