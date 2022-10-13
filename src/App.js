import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import LocInfo from './LocInfo';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            location: {},
            weather: [],
            // err: 'Error: Unable to Geocode!',
            errorLocation: '',
            errorWeather: '',
            dispResults: false,
            dispError: false,
        }
    };

    getCity = (event) => {
        this.setState({searchQuery: event.target.value});
    };

    // getKeyPress = (event) => {
    //     event.preventDefault();
    //     console.log(event.key);
    //     if(event.key === 'Enter'){
    //         this.searchCity();
    //     }
    // };

    // try/catch and <Alert> solution completed via pair programming with Andra Steele
    searchCity = async () => {
        try {
            const locationUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
            const response = await axios.get(locationUrl);
            this.setState({location: response.data[0]});
            this.setState({
                // dispResults: true,
                // dispError: false,
                errorLocation: ''
            }, () => this.searchWeather());
        } catch (error) {
            this.setState({
                // dispResults: false,
                // dispError: true,
                location: {},
                errorLocation: error.message
            });
            console.error(error);
        }
    };

    searchWeather = async () => {
        try {
            const weatherUrl = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
            let response = await axios.get(weatherUrl);
            console.log('Weather data from server: ', response.data);
            this.setState({
                weather: response.data,
                errorWeather: ''
            });
        } catch (error) {
            console.log(error)
            this.setState({
                // dispResults: false,
                // dispError: true,
                weather: [],
                errorWeather: `status ${error.response.status}: ${error.response.statusText}`
            });
            // console.error(this.state.errorWeather);
        }
    };

    render() {
        return (
            <div className="App">
                <h1>City Explorer</h1>
                <Container>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter a city name</Form.Label>
                            <Form.Control
                                onChange={this.getCity}
                                type="text"
                                placeholder="Seattle"
                            // onKeyPress={this.getKeyPress} 
                            />
                        </Form.Group>
                        <Button
                            onClick={this.searchCity}
                            variant="outline-primary"
                            size="sm" >
                            Explore!
                        </Button>
                    </Form>
                    {this.state.errorLocation.length > 0 &&
                        <Alert variant="danger">
                            <Alert.Heading>
                                Unable to find that location:<br/>
                                {this.state.errorLocation}
                            </Alert.Heading>
                        </Alert>
                    }
                    {this.state.errorWeather.length > 0 &&
                        <Alert variant="danger">
                            <Alert.Heading>
                                Unable to find the weather for that location:<br/>
                                {this.state.errorWeather}
                            </Alert.Heading>
                        </Alert>
                    }
                </Container>
                <br />
                <div>
                    {(this.state.location.display_name || this.state.weather.date) &&
                        <LocInfo
                            location={this.state.location}
                            weather={this.state.weather}
                        />
                    }
                </div>
            </div >
        );
    }
}

export default App;
