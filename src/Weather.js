import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Weather extends React.Component {
    render() {
        return (
            <Row>
                {this.props.weather.map(forecast => (
                    <Col>
                        <Card>
                            <Card.Title>{forecast.date}</Card.Title>
                            <Card.Text><b>Outlook</b>: {forecast.description}</Card.Text>
                            <Card.Text><b>Low temp</b>: {forecast.lowTemp}</Card.Text>
                            <Card.Text><b>High temp</b>: {forecast.highTemp}</Card.Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
}
    
export default Weather;
    