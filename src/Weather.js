import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <>
                {this.props.weather.map(forecast => (
                    <>
                        <b>{forecast.date} </b>
                        {forecast.description}<br/>
                    </>
                ))}
            </>
        );
    }
}
    
export default Weather;
    