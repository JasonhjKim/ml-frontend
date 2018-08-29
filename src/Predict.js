import React, { Component } from 'react';
import styled from 'styled-components';

export default class Predict extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: String
        }
        console.log(props);
    }

    componentDidMount() {
        const head = "data:image/jpeg;base64,"
        const src = head + 
        this.setState({
            image: this.props.item.img
        });
    }
    render() {
        const Container = styled.div `
            width: 30%;
            height: 25%;
            display: flex;
            flex-direction: column;
            align-items: center
            border: 1px solid black;
        `   
        console.log(this.props)
        return(
            <Container>
                <img src={`data:image/jpeg;base64,${this.state.image} `} style={{ width: "33%"}} />
                <p>fork: { this.props.item.fork }</p>
                <p>spoon: { this.props.item.spoon }</p>
                <p>knife: { this.props.item.knife }</p>
            </Container>
        )
    }
}