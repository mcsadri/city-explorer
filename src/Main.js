import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import LocInfo from './LocInfo';

class Main extends React.Component {

    render() {
        return (
            <div className="App">
                <h1>City Explorer</h1>
                <Container>
                    {(this.props.errorLocation.length > 0 || this.props.errorWeather.length > 0 || this.props.errorMovie.length > 0) &&
                        <Alert variant="danger">
                            {this.props.errorLocation.length > 0 &&
                                <Alert.Heading>
                                    Unable to find that location:<br />
                                    {this.props.errorLocation}
                                </Alert.Heading>}
                            {this.props.errorWeather.length > 0 &&
                                <Alert.Heading>
                                    Unable to find the weather for that location:<br />
                                    {this.props.errorWeather}
                                </Alert.Heading>}
                            {this.props.errorMovie.length > 0 &&
                                <Alert.Heading>
                                    Unable to find any movies for that location:<br />
                                    {this.props.errorMovie}
                                </Alert.Heading>}
                        </Alert>}
                </Container>
                <br />
                <div>
                    {(this.props.location.display_name || this.props.weather.date || this.props.movies.title) &&
                        <LocInfo
                            location={this.props.location}
                            weather={this.props.weather}
                            movies={this.props.movies}
                        />
                    }
                </div>
            </div >
        );
    }
}

export default Main;
