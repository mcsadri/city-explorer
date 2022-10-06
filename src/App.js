import React from 'react';
import './App.css';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userCity: '',
            location: {}
        }
    }

    getCity = (event) => {
        this.setState({ userCity: event.target.value });
    };

    searchCity = async () => {
        const locIq = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.userCity}&format-json`;
        console.log('api url: ', locIq);
        const response = await axios.get(locIq);
        console.log('response object: ', response);
        console.log('response.data[0]: ', response.data[0]);
        this.setState({location: response.data[0]});
        console.log('userCity: ', this.userCity);
    };

    render() {
        return (
            <div className="App">
                <h1>City Explorer</h1>
                {/* <Container>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter a city name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Seattle"
                                onChange={this.getCity}
                            />
                        </Form.Group>
                    </Form>
                    <Button
                        onClick={this.searchCity}
                        variant="outline-primary"
                        size="sm" >
                        Explore!
                    </Button>
                </Container> */}
                <label>Enter a city name to explore:</label>
                <br/>
                <input
                    type="text"
                    onChange={this.getCity}
                    placeholder="Seattle"
                />
                <br/>
                <button onClick={this.searchCity}>Explore!</button>
            </div >
        );
    }
}

export default App;
