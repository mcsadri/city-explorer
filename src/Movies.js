import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Movies extends React.Component {
    render() {
        return (
            <Row>
                {this.props.movies.map(movie => (
                    <Col>
                        <Card>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Img
                                id={movie.id}
                                src={movie.image_url}
                                alt={movie.title}
                                title={movie.title}
                            />
                            <Card.Text><b>Overview</b>: {movie.overview}</Card.Text>
                            <Card.Text><b>Avg Votes</b>: {movie.average_votes}</Card.Text>
                            <Card.Text><b>Total votes</b>: {movie.total_votes}</Card.Text>
                            <Card.Text><b>Popularity</b>: {movie.popularity}</Card.Text>
                            <Card.Text><b>Rel. date</b>: {movie.released_on}</Card.Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
}
    
export default Movies;
    