import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import LocMap from './LocMap';
import Weather from './Weather';

class LocInfo extends React.Component {
    render() {
        return (
            <>
                <h3>The city you searched for is: {this.props.location.display_name}</h3>
                <Accordion>

                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Show Coordinates</Accordion.Header>
                        <Accordion.Body>The coordinates for {this.props.location.display_name} are {this.props.location.lat}, {this.props.location.lon}.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Show Map</Accordion.Header>
                        <Accordion.Body>
                            <LocMap location={this.props.location}/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Weather forecast</Accordion.Header>
                        <Accordion.Body>
                            <Weather
                                weather={this.props.weather}
                            />
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </>
        );
    }
}

export default LocInfo;
