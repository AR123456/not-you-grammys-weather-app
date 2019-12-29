import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { DayWrapper } from "../styles";

const DayCard = props => {
    return (
        <Col onClick={props.selectDay}>
            <DayWrapper isActive={props.isActive}>
                <Card>
                    <CardHeader>{props.day}</CardHeader>
                    <CardBody>
                        <h3><strong>{props.current.toFixed(1)}°</strong></h3>
                        <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
                        <p><strong>High:</strong> {props.high.toFixed(1)}°</p>
                        <p><strong>Low:</strong> {props.low.toFixed(1)}°</p>
                    </CardBody>
                </Card>
            </DayWrapper>
        </Col>
    )
}

export default DayCard;