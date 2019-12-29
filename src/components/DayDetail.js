import React from "react";
import { CardBody } from "reactstrap";
import { DetailsWrapper } from "../styles";

const DayDetails = props => {
    return (
        <DetailsWrapper>
            <CardBody>
                <h2>Weather Details for {props.date} in {props.location}</h2>
                <h3><strong>{props.current.toFixed(1)}°</strong></h3>
                <p><img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} /></p>
                <h4>{props.description}</h4>
                <p><strong>High:</strong> {props.high.toFixed(1)}° / <strong>Feels Like:</strong> {props.apparentHigh.toFixed(1)}°</p>
                <p><strong>Low:</strong> {props.low.toFixed(1)}° / <strong>Feels Like:</strong> {props.apparentLow.toFixed(1)}°</p>
                <p><strong>Precipitation:</strong> {props.precip}% chance</p>
                <p><strong>Wind Speed:</strong> {props.windSpeed}</p>
                <p><strong>Wind Direction:</strong> {props.windDirection[0].toUpperCase() + props.windDirection.substring(1)}</p>
            </CardBody>
        </DetailsWrapper>    
    )
}

export default DayDetails;