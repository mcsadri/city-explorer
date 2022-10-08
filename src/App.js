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
            userCity: '',
            location: {},
            err: 'Error: Unable to Geocode!',
            apiError: false,
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

    // try/catch and <Alert> solution completed via pair programming with Andra Steele
    searchCity = async () => {
        try {
            const locIq = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.userCity}&format=json`;
            const response = await axios.get(locIq);
            this.setState({ location: response.data[0] }); 
            this.setState({apiError: false});
        } catch (err) {
            this.setState({ apiError: true });
            this.setState({ location: {} });
            console.error(this.state.err);
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
                    {this.state.apiError &&
                        <Alert variant="danger">
                            <Alert.Heading>Error: Unable to Geocode!</Alert.Heading>
                        </Alert>
                    }
                </Container>
                <br />
                <div>
                    {this.state.location.display_name &&
                        <LocInfo
                            location={this.state.location}
                        />
                    }
                </div>
            </div >
        );
    }
}

export default App;
