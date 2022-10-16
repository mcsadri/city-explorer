import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Main from './Main';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            location: {},
            weather: [],
            movies: [],
            errorLocation: '',
            errorWeather: '',
            errorMovie: '',
        }
    };

    getCity = (event) => {
        this.setState({searchQuery: event.target.value});
    };

    searchCity = async () => {
        try {
            const locationUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
            const response = await axios.get(locationUrl);
            this.setState({location: response.data[0]});
            this.setState({
                errorLocation: ''
            }, () => {
                this.searchWeather();
                this.searchMovie();
            });
        } catch (error) {
            this.setState({
                location: {},
                errorLocation: error.message
            });
            console.error(error);
        }
    };

    searchWeather = async () => {
        try {
            const weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
            let response = await axios.get(weatherUrl);
            console.log('Weather data from server: ', response.data);
            this.setState({
                weather: response.data,
                errorWeather: ''
            });
        } catch (error) {
            console.log(error)
            this.setState({
                weather: [],
                errorWeather: `Weather error. Status ${error.response.status}: ${error.response.statusText}`
            });
        }
    };

    searchMovie = async () => {
        try {
            const movieUrl = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
            let response = await axios.get(movieUrl);
            console.log('Movie data from server: ', response.data);
            this.setState({
                movies: response.data,
                errorMovie: ''
            });
        } catch (error) {
            console.log(error)
            this.setState({
                movies: [],
                errorMovie: `Movie error. Status ${error.response.status}: ${error.response.statusText}`
            });
        }
    };

    render() {
        return (
            <div className="App">
                <Container>
                    <h1>City Explorer</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter a city name</Form.Label>
                            <Form.Control
                                onChange={this.getCity}
                                type="text"
                                placeholder="Seattle"
                            />
                        </Form.Group>
                        <Button
                            onClick={this.searchCity}
                            variant="outline-primary"
                            size="sm" >
                            Explore!
                        </Button>
                    </Form>
                    <Main
                        location={this.state.location}
                        weather={this.state.weather}
                        movies={this.state.movies}
                        errorLocation={this.state.errorLocation}
                        errorWeather={this.state.errorWeather}
                        errorMovie={this.state.errorMovie}
                    />
                </Container>
            </div >
        );
    }
}

export default App;
