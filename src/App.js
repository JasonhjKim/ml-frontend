import React, { Component } from 'react';
import axios from 'axios';
import Predict from './Predict';
import styled from 'styled-components';

class App extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('http://159.65.69.12:3000/')
            .then((res) => {
                return res.data
            })
            .then((res) => {
                this.setState({
                    data: res
                })
                console.log(this.state.data)
            })

    }

    render() {
        var predictions = this.state.data.map((item, index) => {
            return <Predict item={item} key={index}></Predict>
        })

        const Container = styled.div `
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        `
        return(
            <div>
                <h1>This is App</h1>
                <Container>
                    { predictions }
                </Container>
            </div>
        )
    }
}

export default App;
