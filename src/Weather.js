import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <>
                {this.props.weather.map(forecast => (
                    <>
                        <b>{forecast.date} </b><br/>
                        Description: {forecast.description}<br/>
                        Low temp: {forecast.lowTemp}<br/>
                        High temp: {forecast.highTemp}<br/>
                    </>
                ))}
            </>
        );
    }
}
    
export default Weather;
    