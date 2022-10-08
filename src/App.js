import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Location from './Location';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userCity: '',
            location: {}
        }
    };

    getCity = (event) => {
        this.setState({ userCity: event.target.value });
    };

    // getKeyPress = (event) => {
    //     event.preventDefault();
    //     console.log(event.key);
    //     if(event.key === 'Enter'){
    //         this.searchCity();
    //     }
    // };

    searchCity = async () => {
        const locIq = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.userCity}&format=json`;
        const response = await axios.get(locIq);
        this.setState({location: response.data[0]});
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

                </Container>
                <br/>
                <div>
                    {this.state.location.display_name &&
                        <Location
                            location = {this.state.location}
                        />
                    }
                </div>
            </div >
        );
    }
}

export default App;
