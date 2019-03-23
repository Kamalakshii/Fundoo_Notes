import React, { Component } from 'react';
import AppbarComponent from'./components/appBar';
export default class dashBoard extends Component {
    constructor() {
        super();
        this.state = {
            label:"",
        }
    }
    render()
    {
        return(
            <AppbarComponent>

            </AppbarComponent>
        )
    }
}