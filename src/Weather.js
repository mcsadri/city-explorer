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
                        <Forecast
                            forecast = {forecast}
                        />
                    </Col>
                ))}
            </Row>
        );
    }
}

class Forecast extends React.Component {
    render() {
        const forecast = this.props.forecast;
        return (
            <Card>
                <Card.Title>{forecast.dateTime}</Card.Title>
                <Card.Text>{forecast.cityName}</Card.Text>
                <Card.Text><b>Outlook</b>: {forecast.description}</Card.Text>
                <Card.Text><b>Low temp</b>: {forecast.lowTemp}</Card.Text>
                <Card.Text><b>High temp</b>: {forecast.highTemp}</Card.Text>
            </Card>
        )
    }
}

export default Weather;
    